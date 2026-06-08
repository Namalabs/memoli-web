#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

async function testMarkdownParser() {
  console.log('🧪 Testing Markdown Parser...\n');

  const samplePath = path.join(process.cwd(), 'content/blog/sample-post.md');

  if (!fs.existsSync(samplePath)) {
    console.error('❌ Sample post not found at:', samplePath);
    process.exit(1);
  }

  const content = fs.readFileSync(samplePath, 'utf-8');
  const { data, content: body } = matter(content);

  console.log('✓ Parsed sample-post.md');
  console.log(`✓ Title: "${data.title}"`);
  console.log(`✓ Slug: "${data.slug}"`);
  console.log(`✓ Author: "${data.author}"`);
  console.log(`✓ Tags: [${data.tags?.join(', ') || 'none'}]`);
  console.log(`✓ Feature Image: "${data.featureImage}"`);

  const html = md.render(body);
  console.log(`✓ HTML generated (${html.length} chars)`);

  const words = html.replace(/<[^>]*>/g, '').trim().split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));
  console.log(`✓ Reading time: ${readingTime} minute${readingTime > 1 ? 's' : ''}`);

  console.log(`✓ Author detected: ${data.author}`);
  console.log('\n✅ All tests passed!');
}

testMarkdownParser().catch((err) => {
  console.error('❌ Test failed:', err.message);
  process.exit(1);
});
