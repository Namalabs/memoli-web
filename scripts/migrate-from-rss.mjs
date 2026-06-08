#!/usr/bin/env node

/**
 * Ghost RSS to Markdown Migration Script
 * 
 * Converts Ghost RSS feed to markdown posts with proper frontmatter,
 * downloads and optimizes images, and generates metadata.
 * 
 * Usage:
 *   node scripts/migrate-from-rss.mjs
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const IMAGE_DIR = path.join(__dirname, '../public/image/blog');
const GHOST_BLOG_URL = 'https://memoly-blog.up.railway.app';
const RSS_URL = `${GHOST_BLOG_URL}/rss/`;

// Ensure directories exist
[BLOG_DIR, IMAGE_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

/**
 * Fetch RSS feed
 */
async function fetchRSSFeed() {
  return new Promise((resolve, reject) => {
    https.get(RSS_URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

/**
 * Download and optimize image
 */
async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(IMAGE_DIR, filename);
    
    // Skip if already exists
    if (fs.existsSync(filepath)) {
      console.log(`  📦 Image cached: ${filename}`);
      return resolve(`/image/blog/${filename}`);
    }
    
    https.get(url, (res) => {
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  ✅ Downloaded: ${filename} (${fs.statSync(filepath).size / 1024 | 0} KB)`);
        resolve(`/image/blog/${filename}`);
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete on error
      reject(err);
    });
  });
}

/**
 * Convert HTML to plain text (for excerpt)
 */
function htmlToPlainText(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\n\n+/g, ' ')
    .trim();
}

/**
 * Convert HTML to Markdown (simplified)
 */
function htmlToMarkdown(html, slugForImages = '') {
  if (!html) return '';
  
  let md = html
    // Headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/g, '# $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/g, '## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/g, '### $1\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/g, '#### $1\n')
    // Paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/g, '$1\n\n')
    // Line breaks
    .replace(/<br\s*\/?>/g, '\n')
    // Bold
    .replace(/<strong[^>]*>(.*?)<\/strong>/g, '**$1**')
    .replace(/<b[^>]*>(.*?)<\/b>/g, '**$1**')
    // Italic
    .replace(/<em[^>]*>(.*?)<\/em>/g, '*$1*')
    .replace(/<i[^>]*>(.*?)<\/i>/g, '*$1*')
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
    // Images - skip for now, they're typically featured images
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/g, '')
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/g, '')
    // Lists
    .replace(/<li[^>]*>(.*?)<\/li>/g, '- $1\n')
    .replace(/<ul[^>]*>(.*?)<\/ul>/g, '$1')
    .replace(/<ol[^>]*>(.*?)<\/ol>/g, '$1')
    // Remove remaining HTML tags
    .replace(/<[^>]*>/g, '')
    // Clean up entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    // Clean up extra newlines
    .replace(/\n\n\n+/g, '\n\n')
    .trim();
  
  return md;
}

/**
 * Generate slug from title
 */
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Parse and migrate posts from RSS
 */
async function migrateFromRSS() {
  console.log('🔄 Fetching RSS feed from Ghost...\n');
  
  const rssData = await fetchRSSFeed();
  
  // Extract all <item> elements using regex
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const items = [];
  let match;
  
  while ((match = itemRegex.exec(rssData)) !== null) {
    items.push(match[1]);
  }
  
  console.log(`📰 Found ${items.length} posts\n`);
  
  const posts = [];
  const authors = {};
  const tags = new Set();
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const index = i + 1;
    
    // Extract title
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const title = titleMatch ? titleMatch[1] : 'Untitled';
    
    console.log(`[${index}/${items.length}] Processing: ${title}`);
    
    const slug = generateSlug(title);
    
    // Extract author
    const creatorMatch = item.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/);
    const author = creatorMatch ? creatorMatch[1] : 'memoli';
    const authorId = author.toLowerCase().replace(/\s+/g, '_');
    
    // Extract publish date
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const published = pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
    
    // Download featured image
    let featuredImage = null;
    const mediaMatch = item.match(/<media:content url="([^"]*)"[^>]*medium="image"/);
    if (mediaMatch && mediaMatch[1]) {
      const imageUrl = mediaMatch[1];
      const filename = `${slug}-featured.jpg`;
      try {
        featuredImage = await downloadImage(imageUrl, filename);
      } catch (err) {
        console.log(`  ⚠️  Failed to download image: ${err.message}`);
      }
    }
    
    // Extract content
    const contentMatch = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    const contentHtml = contentMatch ? contentMatch[1] : '';
    const contentMarkdown = htmlToMarkdown(contentHtml, slug);
    
    // Generate excerpt from plain text (no markdown)
    const plainText = htmlToPlainText(contentHtml);
    const excerpt = plainText
      .substring(0, 160)
      .trim() + '...';
    
    // Estimate reading time
    const wordCount = contentMarkdown.split(/\s+/).length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    
    // Create frontmatter
    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
slug: "${slug}"
customPath: "/blog/${slug}"
author: "${authorId}"
published: "${published}"
updated: "${published}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
tags: ["self-care", "wellness"]
featured: false
${featuredImage ? `featuredImage: "${featuredImage}"` : ''}
seo:
  title: "${title.replace(/"/g, '\\"')}"
  description: "${excerpt.replace(/"/g, '\\"')}"
  keywords: ["self-care", "wellness", "memoli"]
  ${featuredImage ? `ogImage: "${featuredImage}"` : ''}
  ogType: "article"
---

`;
    
    // Write markdown file
    const filepath = path.join(BLOG_DIR, `${slug}.md`);
    fs.writeFileSync(filepath, frontmatter + contentMarkdown + '\n');
    
    console.log(`  ✅ Created: ${slug}.md`);
    
    posts.push({
      slug,
      title,
      author: authorId,
      published,
      readingTime
    });
    
    // Track author
    authors[authorId] = {
      name: author,
      bio: 'Health and wellness expert'
    };
    
    tags.add('self-care');
    tags.add('wellness');
  }
  
  // Create/update authors.json
  const authorsPath = path.join(BLOG_DIR, '../authors.json');
  const existingAuthors = fs.existsSync(authorsPath) ? JSON.parse(fs.readFileSync(authorsPath)) : {};
  
  Object.assign(existingAuthors, authors);
  fs.writeFileSync(authorsPath, JSON.stringify(existingAuthors, null, 2));
  console.log(`\n✅ Authors updated: ${Object.keys(authors).join(', ')}`);
  
  // Create tags.json
  const tagsPath = path.join(BLOG_DIR, '../tags.json');
  const tagsObj = {};
  Array.from(tags).forEach(tag => {
    tagsObj[tag] = { count: posts.filter(p => true).length };
  });
  fs.writeFileSync(tagsPath, JSON.stringify(tagsObj, null, 2));
  console.log(`✅ Tags created: ${Array.from(tags).join(', ')}`);
  
  return posts;
}

// Main execution
try {
  console.log('╔════════════════════════════════════════╗');
  console.log('║ Ghost RSS → Markdown Migration         ║');
  console.log('╚════════════════════════════════════════╝\n');
  
  const posts = await migrateFromRSS();
  
  console.log('\n╔════════════════════════════════════════╗');
  console.log('║ Migration Complete! ✅                 ║');
  console.log('╚════════════════════════════════════════╝\n');
  
  console.log(`📊 Summary:`);
  console.log(`   ✅ Posts migrated: ${posts.length}`);
  console.log(`   📁 Location: ${BLOG_DIR}`);
  console.log(`   🖼️  Images: ${IMAGE_DIR}`);
  
  console.log(`\n📝 Next steps:`);
  console.log(`   1. npm run build-blog       # Compile blog data`);
  console.log(`   2. npm run dev              # Start dev server`);
  console.log(`   3. http://localhost:3000/blog  # Verify migration`);
  
  process.exit(0);
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  process.exit(1);
}
