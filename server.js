#!/usr/bin/env node
/**
 * Memoli Web - CMS Backend Server
 * Express.js server for Decap CMS local backend
 * Handles file operations, git commits, and deployment
 */

const express = require('express');
const path = require('path');
const { spawn } = require('child_process');
const Database = require('better-sqlite3');
const cors = require('cors');
const fs = require('fs-extra');
require('dotenv').config();

const app = express();
const ADMIN_PORT = process.env.ADMIN_PORT || 5480;
const PROJECT_ROOT = path.resolve(__dirname);
const DB_PATH = path.join(PROJECT_ROOT, 'admin.db');

// Initialize SQLite database for deployment tracking
let db;
try {
  db = new Database(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS deployments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      status TEXT,
      trigger_time TEXT,
      completion_time TEXT,
      log TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
} catch (err) {
  console.error('❌ Failed to initialize database:', err.message);
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Deployment state tracking
let deploymentInProgress = false;

// ============================================================================
// GIT OPERATIONS
// ============================================================================

/**
 * Execute git command
 */
function execGit(args, cwd = PROJECT_ROOT) {
  return new Promise((resolve, reject) => {
    const git = spawn('git', args, { cwd });
    let stdout = '';
    let stderr = '';

    git.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    git.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    git.on('close', (code) => {
      if (code === 0) {
        resolve(stdout.trim());
      } else {
        reject(new Error(stderr || stdout));
      }
    });

    git.on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Configure git user
 */
async function configureGitUser() {
  const name = process.env.GIT_AUTHOR_NAME || 'Memoli CMS';
  const email = process.env.GIT_AUTHOR_EMAIL || 'cms@memoli.app';

  try {
    await execGit(['config', 'user.name', name]);
    await execGit(['config', 'user.email', email]);
    console.log(`✓ Git user configured: ${name} <${email}>`);
  } catch (err) {
    console.warn('⚠ Could not configure git user:', err.message);
  }
}

/**
 * Commit and push changes to git
 */
async function gitCommitAndPush(message) {
  try {
    // Stage changes
    await execGit(['add', '-A']);
    console.log('✓ Staged changes');

    // Check if there are changes to commit
    let status;
    try {
      status = await execGit(['status', '--porcelain']);
    } catch {
      status = '';
    }

    if (!status) {
      console.log('ℹ No changes to commit');
      return { success: true, message: 'No changes' };
    }

    // Commit
    await execGit(['commit', '-m', message]);
    console.log(`✓ Committed: "${message}"`);

    // Configure remote and push if GIT_COMMIT_ON_DEPLOY is enabled
    if (process.env.GIT_COMMIT_ON_DEPLOY === 'true') {
      const remoteUrl = process.env.GIT_REMOTE_URL;
      const branch = process.env.GIT_BRANCH || 'main';

      if (!remoteUrl) {
        console.warn('⚠ GIT_REMOTE_URL not set, skipping push');
        return { success: true, message: 'Committed but not pushed (no remote URL)' };
      }

      // Configure SSH or HTTPS authentication
      if (process.env.GIT_SSH_KEY_PATH) {
        // SSH authentication
        const sshKeyPath = process.env.GIT_SSH_KEY_PATH;
        process.env.GIT_SSH_COMMAND = `ssh -i ${sshKeyPath} -o StrictHostKeyChecking=no`;
      } else if (process.env.GIT_TOKEN) {
        // HTTPS with token (only for HTTPS URLs)
        if (remoteUrl.startsWith('https://')) {
          const urlWithToken = remoteUrl.replace(
            'https://',
            `https://git:${process.env.GIT_TOKEN}@`
          );
          await execGit(['remote', 'set-url', 'origin', urlWithToken]);
        }
      }

      // Push
      await execGit(['push', 'origin', branch]);
      console.log(`✓ Pushed to ${branch}`);

      return {
        success: true,
        message: `Committed and pushed to ${branch}`,
      };
    } else {
      console.log('ℹ GIT_COMMIT_ON_DEPLOY is false, skipping push');
      return {
        success: true,
        message: 'Committed (push disabled)',
      };
    }
  } catch (err) {
    console.error('❌ Git operation failed:', err.message);
    throw err;
  }
}

// ============================================================================
// CMS PROXY ROUTES
// ============================================================================

// Simple file-based backend for Decap CMS
app.post('/api/v1/:collection/:slug', async (req, res) => {
  try {
    const { collection, slug } = req.params;
    const data = req.body;

    // Create collection folder if it doesn't exist
    const collectionPath = path.join(PROJECT_ROOT, 'src/content', collection);
    await fs.ensureDir(collectionPath);

    // Write file
    const filePath = path.join(collectionPath, `${slug}.md`);
    const content = formatMarkdownFrontmatter(data);
    await fs.writeFile(filePath, content, 'utf8');

    console.log(`✓ Saved: ${collection}/${slug}`);

    // Auto-commit if CMS_AUTO_COMMIT is enabled
    if (process.env.CMS_AUTO_COMMIT === 'true') {
      await gitCommitAndPush(`[CMS] Updated ${collection}/${slug}`);
    }

    res.json({
      success: true,
      message: `Saved ${collection}/${slug}`,
    });
  } catch (err) {
    console.error('❌ Error saving entry:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/v1/:collection/:slug', async (req, res) => {
  try {
    const { collection, slug } = req.params;
    const filePath = path.join(PROJECT_ROOT, 'src/content', collection, `${slug}.md`);

    if (!(await fs.pathExists(filePath))) {
      return res.status(404).json({ error: 'Not found' });
    }

    const content = await fs.readFile(filePath, 'utf8');
    res.json({ content });
  } catch (err) {
    console.error('❌ Error reading entry:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// DEPLOYMENT ENDPOINTS
// ============================================================================

/**
 * GET /api/deploy/status
 * Get current deployment status
 */
app.get('/api/deploy/status', (req, res) => {
  res.json({
    deploying: deploymentInProgress,
  });
});

/**
 * GET /api/deploy/history
 * Get last 10 deployments
 */
app.get('/api/deploy/history', (req, res) => {
  try {
    const stmt = db.prepare(
      'SELECT id, status, trigger_time, completion_time FROM deployments ORDER BY id DESC LIMIT 10'
    );
    const deployments = stmt.all();
    res.json(deployments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/deploy/log/:id
 * Get deployment log
 */
app.get('/api/deploy/log/:id', (req, res) => {
  try {
    const { id } = req.params;
    const stmt = db.prepare('SELECT log FROM deployments WHERE id = ?');
    const deployment = stmt.get(id);

    if (!deployment) {
      return res.status(404).json({ error: 'Deployment not found' });
    }

    res.json({ log: deployment.log });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * POST /api/deploy
 * Trigger a new build deployment
 */
app.post('/api/deploy', async (req, res) => {
  if (deploymentInProgress) {
    return res.status(409).json({
      error: 'Deployment already in progress',
    });
  }

  try {
    deploymentInProgress = true;
    const triggerTime = new Date().toISOString();

    // Create deployment record
    const stmt = db.prepare(
      'INSERT INTO deployments (status, trigger_time, log) VALUES (?, ?, ?)'
    );
    const result = stmt.run('building', triggerTime, '');
    const deploymentId = result.lastInsertRowid;

    console.log(`\n🚀 Starting deployment #${deploymentId}...`);

    // Commit changes if needed
    if (process.env.GIT_COMMIT_ON_DEPLOY === 'true') {
      try {
        await gitCommitAndPush('[DEPLOY] Automated deployment');
      } catch (err) {
        console.warn('⚠ Git commit failed:', err.message);
      }
    }

    // Run build command
    return new Promise((resolve) => {
      const buildProcess = spawn('npm', ['run', 'build'], {
        cwd: PROJECT_ROOT,
      });

      let buildLog = '';

      buildProcess.stdout.on('data', (data) => {
        const output = data.toString();
        buildLog += output;
        process.stdout.write(output);
      });

      buildProcess.stderr.on('data', (data) => {
        const output = data.toString();
        buildLog += output;
        process.stderr.write(output);
      });

      buildProcess.on('close', (code) => {
        deploymentInProgress = false;
        const completionTime = new Date().toISOString();
        const status = code === 0 ? 'success' : 'failed';

        // Update deployment record
        const updateStmt = db.prepare(
          'UPDATE deployments SET status = ?, completion_time = ?, log = ? WHERE id = ?'
        );
        updateStmt.run(status, completionTime, buildLog, deploymentId);

        console.log(
          `\n${status === 'success' ? '✅' : '❌'} Deployment #${deploymentId} ${status}`
        );

        res.json({
          success: code === 0,
          deploymentId,
          status,
          log: buildLog,
        });

        resolve();
      });
    });
  } catch (err) {
    deploymentInProgress = false;
    console.error('❌ Deployment error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ============================================================================
// STATIC FILES & CMS
// ============================================================================

// Serve public folder (for config.yml and other static assets)
app.use(express.static(path.join(PROJECT_ROOT, 'public')));

// Serve CMS HTML
app.get('/cms', (req, res) => {
  const cmsHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Memoli Blog CMS</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.css" />
  <style>
    body { margin: 0; padding: 0; }
    #app { width: 100%; height: 100vh; }
  </style>
</head>
<body>
  <div id="app"></div>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  <script>
    window.CMS_MANUAL_INIT = true;
    CMS.init({
      config: {
        load_config_file: false,
        backend: {
          name: "test-repo",
        },
        media_folder: "public/upload",
        public_folder: "/upload",
        collections: [
          {
            name: "blog",
            label: "Blog Posts",
            folder: "src/content/blog",
            create: true,
            slug: "{{slug}}",
            extension: "md",
            format: "frontmatter",
            fields: [
              { label: "Title", name: "title", widget: "string" },
              { label: "Slug", name: "slug", widget: "string" },
              { label: "Author", name: "author", widget: "string" },
              { label: "Published", name: "published", widget: "datetime" },
              { label: "Updated", name: "updated", widget: "datetime" },
              { label: "Featured", name: "featured", widget: "boolean", default: false },
              { label: "Featured Image", name: "featuredImage", widget: "image", required: false },
              { label: "Featured Image Alt", name: "featuredImageAlt", widget: "string", required: false },
              { label: "Excerpt", name: "excerpt", widget: "text" },
              { label: "Tags", name: "tags", widget: "list", required: false },
              { label: "Body", name: "body", widget: "markdown" }
            ]
          }
        ]
      }
    });
  </script>
</body>
</html>
  `;
  res.type('text/html').send(cmsHtml);
});

// Serve uploaded media
app.use('/upload', express.static(path.join(PROJECT_ROOT, 'public/upload')));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', port: ADMIN_PORT });
});

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Format data as markdown with YAML frontmatter
 */
function formatMarkdownFrontmatter(data) {
  const { body, ...frontmatter } = data;
  const yamlStr = Object.entries(frontmatter)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key}:\n  - ${value.join('\n  - ')}`;
      }
      if (typeof value === 'string') {
        const quoted = value.includes(':') || value.includes('\n') ? `"${value}"` : value;
        return `${key}: ${quoted}`;
      }
      return `${key}: ${value}`;
    })
    .join('\n');

  return `---\n${yamlStr}\n---\n\n${body || ''}`;
}

// ============================================================================
// ERROR HANDLING & STARTUP
// ============================================================================

app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({
    error: err.message || 'Internal server error',
  });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n📴 Shutting down...');
  if (db) db.close();
  process.exit(0);
});

// Start server
configureGitUser().then(() => {
  app.listen(ADMIN_PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║   Memoli CMS Backend Server (v1.0)       ║
╚════════════════════════════════════════════╝

🌐 Admin Server:  http://localhost:${ADMIN_PORT}/cms
📡 API Base:      http://localhost:${ADMIN_PORT}/api
💾 Database:      ${DB_PATH}

🔧 Environment:
   - CMS_AUTO_COMMIT: ${process.env.CMS_AUTO_COMMIT || 'false'}
   - GIT_COMMIT_ON_DEPLOY: ${process.env.GIT_COMMIT_ON_DEPLOY || 'false'}
   - GIT_BRANCH: ${process.env.GIT_BRANCH || 'main'}

📝 Usage:
   1. Open http://localhost:${ADMIN_PORT}/cms in browser
   2. Login with test-repo backend
   3. Create/edit blog posts
   4. Click Deploy button to build

ℹ️  Press Ctrl+C to stop server
    `);
  });
});
