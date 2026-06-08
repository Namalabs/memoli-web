#!/usr/bin/env node

/**
 * Bulk Blog Post Migration Script
 * 
 * This script imports multiple markdown files from a source directory
 * into the blog system. Used when Ghost API is unavailable or for
 * manual content migration.
 * 
 * Usage:
 *   node scripts/import-blog-posts.mjs /path/to/posts
 * 
 * Input Format:
 *   Each post should be a .md file with YAML frontmatter
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const BLOG_DATA_DIR = path.join(__dirname, '../public/blog-data');

// Parse command line arguments
const sourceDir = process.argv[2];

if (!sourceDir) {
  console.error('❌ Usage: node scripts/import-blog-posts.mjs /path/to/posts');
  console.error('');
  console.error('Example:');
  console.error('  node scripts/import-blog-posts.mjs /Downloads/ghost-posts');
  process.exit(1);
}

if (!fs.existsSync(sourceDir)) {
  console.error(`❌ Source directory not found: ${sourceDir}`);
  process.exit(1);
}

// Ensure destination exists
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Get all markdown files from source
const markdownFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith('.md'));

if (markdownFiles.length === 0) {
  console.error(`❌ No markdown files found in ${sourceDir}`);
  process.exit(1);
}

console.log(`📝 Starting bulk import of ${markdownFiles.length} posts...\n`);

let successCount = 0;
let errorCount = 0;
const errors = [];

markdownFiles.forEach((file, index) => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(BLOG_DIR, file);
  
  try {
    const content = fs.readFileSync(sourcePath, 'utf-8');
    
    // Validate frontmatter exists
    if (!content.startsWith('---')) {
      throw new Error('Missing YAML frontmatter (must start with ---)');
    }
    
    // Extract frontmatter
    const frontmatterEnd = content.indexOf('---', 3);
    if (frontmatterEnd === -1) {
      throw new Error('Invalid frontmatter format (missing closing ---)');
    }
    
    const frontmatterStr = content.substring(3, frontmatterEnd).trim();
    
    // Parse YAML (simple parser for basic fields)
    const fields = {};
    frontmatterStr.split('\n').forEach(line => {
      const match = line.match(/^(\w+):\s*(.+?)$/);
      if (match) {
        const [, key, value] = match;
        fields[key] = value.replace(/^["']|["']$/g, ''); // Remove quotes
      }
    });
    
    // Validate required fields
    const required = ['title', 'author', 'published'];
    const missing = required.filter(f => !fields[f]);
    
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }
    
    // Copy file to destination
    fs.copyFileSync(sourcePath, destPath);
    
    console.log(`✅ [${index + 1}/${markdownFiles.length}] ${file}`);
    successCount++;
    
  } catch (error) {
    errorCount++;
    console.log(`❌ [${index + 1}/${markdownFiles.length}] ${file}: ${error.message}`);
    errors.push({ file, error: error.message });
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`📊 Import Summary`);
console.log(`${'='.repeat(60)}`);
console.log(`✅ Successful: ${successCount}/${markdownFiles.length}`);
console.log(`❌ Failed: ${errorCount}/${markdownFiles.length}`);

if (errors.length > 0) {
  console.log(`\n⚠️  Failed imports:`);
  errors.forEach(({ file, error }) => {
    console.log(`   - ${file}: ${error}`);
  });
}

if (successCount > 0) {
  console.log(`\n📝 Next steps:`);
  console.log(`   1. npm run build-blog       # Compile blog data`);
  console.log(`   2. npm run dev              # Start dev server`);
  console.log(`   3. Open http://localhost:3000/blog`);
  console.log(`\n✨ Posts imported to: ${BLOG_DIR}`);
}

process.exit(errorCount > 0 ? 1 : 0);
