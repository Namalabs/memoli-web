import type { MarkdownPost } from './markdown-client';
import fs from 'fs';
import path from 'path';

/**
 * Server-only markdown utilities (NOT marked with 'use client')
 * Used for static generation at build time
 */

const DATA_DIR = path.join(process.cwd(), 'public', 'blog-data');

async function readBlogData<T>(filename: string): Promise<T> {
  const filepath = path.join(DATA_DIR, filename);
  
  if (!fs.existsSync(filepath)) {
    console.warn(`Warning: Blog data file not found: ${filepath}`);
    return [] as T;
  }
  
  const data = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(data) as T;
}

export async function getAllPostsServer(): Promise<MarkdownPost[]> {
  return readBlogData<MarkdownPost[]>('posts.json');
}

export async function getPostBySlugServer(slug: string): Promise<MarkdownPost | null> {
  const posts = await getAllPostsServer();
  return posts.find((p) => p.slug === slug) || null;
}
