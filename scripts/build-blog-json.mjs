#!/usr/bin/env node
/**
 * Build-time script: Compile markdown files to JSON for static export
 * Runs before Next.js build to generate JSON that can be imported statically
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'blog-data');

function calculateReadingTime(html) {
  const text = html.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parseMarkdownPost(content, slug) {
  const { data, content: body } = matter(content);

  const tags = Array.isArray(data.tags)
    ? data.tags.map((tag) =>
        typeof tag === 'string' ? { name: tag, slug: tag.toLowerCase().replace(/\s+/g, '-') } : tag
      )
    : [];

  const html = md.render(body);
  const publishedDate = data.published || data.date || new Date().toISOString();
  const postSlug = data.slug || slug;
  const customPath = data.customPath || `/blog/${postSlug}`;
  
  return {
    id: slug,
    slug: postSlug,
    title: data.title || 'Untitled',
    html,
    excerpt: data.excerpt || body.substring(0, 160).replace(/[#*`_]/g, ''),
    date: publishedDate, // For formatting
    published_at: publishedDate, // For dateTime attribute
    published: publishedDate,
    updated: data.updated || data.date || new Date().toISOString(),
    feature_image: data.featuredImage || null, // Rename from featuredImage
    feature_image_alt: data.featuredImageAlt || null,
    featured: data.featured || false,
    author: data.author || null,
    tags,
    readingTime: calculateReadingTime(html),
    customPath,
    // SEO fields
    seo: {
      title: data.seo?.title || data.title || 'Untitled',
      description: data.seo?.description || data.excerpt || body.substring(0, 155),
      keywords: data.seo?.keywords || data.tags || [],
      ogImage: data.seo?.ogImage || data.featuredImage || null,
      ogType: data.seo?.ogType || 'article',
      canonical: data.seo?.canonical || null,
    },
  };
}

function readAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const posts = files.map((f) => {
    const slug = f.replace('.md', '');
    const content = fs.readFileSync(path.join(BLOG_DIR, f), 'utf-8');
    return parseMarkdownPost(content, slug);
  });
  return posts.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
}

function readAllAuthors() {
  const authorsFile = path.join(BLOG_DIR, '..', 'authors.json');
  if (!fs.existsSync(authorsFile)) return [];
  const authorsData = JSON.parse(fs.readFileSync(authorsFile, 'utf-8'));
  return Object.entries(authorsData).map(([id, data]) => ({
    id,
    ...data,
    slug: id,
  }));
}

function readAllTags(posts) {
  const tagMap = new Map();
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, tag);
      }
    });
  });
  return Array.from(tagMap.values());
}

function buildBlogData() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Parse all posts
  const posts = readAllPosts();
  const authors = readAllAuthors();
  const tags = readAllTags(posts);

  // Enrich posts with full author data
  const enrichedPosts = posts.map((post) => {
    const authorData = post.author ? authors.find((a) => a.slug === post.author || a.id === post.author) || null : null;
    return {
      ...post,
      author: authorData,
      authors: authorData ? [authorData] : [],
    };
  });

  // Write JSON files
  fs.writeFileSync(path.join(OUTPUT_DIR, 'posts.json'), JSON.stringify(enrichedPosts, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'authors.json'), JSON.stringify(authors, null, 2));
  fs.writeFileSync(path.join(OUTPUT_DIR, 'tags.json'), JSON.stringify(tags, null, 2));

  console.log(`✅ Blog data compiled:`);
  console.log(`   - ${posts.length} posts`);
  console.log(`   - ${authors.length} authors`);
  console.log(`   - ${tags.length} tags`);
  console.log(`   📁 Output: ${OUTPUT_DIR}`);
}

buildBlogData();
