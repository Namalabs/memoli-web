#!/usr/bin/env node
/**
 * Fetch all posts from Ghost API for migration analysis
 */

const GHOST_API_URL = 'https://memoly-blog.up.railway.app';
const GHOST_API_KEY = '2af5bd0c088907d68ea4093d04';

async function fetchGhostPosts() {
  try {
    const url = `${GHOST_API_URL}/ghost/api/content/posts?key=${GHOST_API_KEY}&limit=all&include=tags,authors`;
    console.log(`📡 Fetching from Ghost API: ${GHOST_API_URL}\n`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ghost API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const posts = data.posts || [];
    
    console.log(`✅ Successfully fetched ${posts.length} posts from Ghost\n`);
    console.log('=== POST INVENTORY ===\n');
    
    posts.forEach((post, idx) => {
      console.log(`${idx + 1}. "${post.title}"`);
      console.log(`   Slug: ${post.slug}`);
      console.log(`   Published: ${post.published_at}`);
      console.log(`   Status: ${post.status}`);
      if (post.authors && post.authors.length > 0) {
        console.log(`   Authors: ${post.authors.map(a => a.name).join(', ')}`);
      }
      if (post.tags && post.tags.length > 0) {
        console.log(`   Tags: ${post.tags.map(t => t.name).join(', ')}`);
      }
      console.log(`   Words: ~${Math.ceil((post.html || '').split(/\s+/).length)}`);
      console.log();
    });
    
    console.log(`=== SUMMARY ===`);
    console.log(`Total Posts: ${posts.length}`);
    console.log(`Published: ${posts.filter(p => p.status === 'published').length}`);
    console.log(`Draft: ${posts.filter(p => p.status === 'draft').length}`);
    
    // Get unique authors and tags
    const authorsSet = new Set();
    const tagsSet = new Set();
    
    posts.forEach(post => {
      if (post.authors) post.authors.forEach(a => authorsSet.add(a.slug));
      if (post.tags) post.tags.forEach(t => tagsSet.add(t.slug));
    });
    
    console.log(`\nUnique Authors: ${authorsSet.size}`);
    Array.from(authorsSet).forEach(slug => console.log(`  - ${slug}`));
    
    console.log(`\nUnique Tags: ${tagsSet.size}`);
    Array.from(tagsSet).forEach(slug => console.log(`  - ${slug}`));
    
    // Write raw JSON for processing
    const fs = await import('fs');
    fs.writeFileSync('ghost-posts-export.json', JSON.stringify(posts, null, 2));
    console.log('\n📁 Raw export saved to: ghost-posts-export.json');
    
  } catch (error) {
    console.error('❌ Error fetching Ghost posts:', error.message);
    process.exit(1);
  }
}

fetchGhostPosts();
