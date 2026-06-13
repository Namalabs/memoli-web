'use client';

import type { ReactNode } from 'react';

/**
 * Client-side markdown utilities for CSR + static export
 * Loads precompiled JSON blog data generated at build time
 */

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface SEO {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export interface MarkdownPost {
  id: string;
  slug: string;
  title: string;
  html: string;
  excerpt: string;
  date: string;
  published_at: string;
  feature_image: string | null;
  feature_image_alt: string | null;
  author: Author | null;
  authors?: Author[]; // For backwards compat
  tags: Tag[];
  readingTime: number;
  seo?: SEO;
  customPath?: string; // Custom URL path (e.g., /blog/my-custom-url)
  featured?: boolean; // Featured post flag
}

export interface PaginationResult {
  posts: MarkdownPost[];
  totalPages: number;
  total: number;
}

// Cache for precompiled JSON data
let postsCache: MarkdownPost[] | null = null;
let authorsCache: Author[] | null = null;
let tagsCache: Tag[] | null = null;

async function fetchBlogData<T>(filename: string): Promise<T> {
  const response = await fetch(`/blog-data/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to load blog data: ${filename}`);
  }
  return response.json();
}

export async function readAllPosts(): Promise<MarkdownPost[]> {
  if (postsCache) return postsCache;
  postsCache = await fetchBlogData<MarkdownPost[]>('posts.json');
  return postsCache;
}

export async function readAllAuthors(): Promise<Author[]> {
  if (authorsCache) return authorsCache;
  authorsCache = await fetchBlogData<Author[]>('authors.json');
  return authorsCache;
}

export async function readAllTags(): Promise<Tag[]> {
  if (tagsCache) return tagsCache;
  tagsCache = await fetchBlogData<Tag[]>('tags.json');
  return tagsCache;
}

export async function readPostBySlug(slug: string): Promise<MarkdownPost> {
  const posts = await readAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

export async function getPaginatedPosts(page: number = 1, limit: number | 'all' = 5): Promise<PaginationResult> {
  const allPosts = await readAllPosts();
  const actualLimit = limit === 'all' ? allPosts.length : limit;
  const totalPages = Math.ceil(allPosts.length / actualLimit);
  const start = (page - 1) * actualLimit;
  return {
    posts: allPosts.slice(start, start + actualLimit),
    totalPages,
    total: allPosts.length,
  };
}

export async function getPostsByTag(tagSlug: string, page: number = 1, limit: number = 5): Promise<PaginationResult> {
  const allPosts = await readAllPosts();
  const filtered = allPosts.filter((post) => post.tags.some((tag) => tag.slug === tagSlug));
  const totalPages = Math.ceil(filtered.length / limit);
  const start = (page - 1) * limit;
  return {
    posts: filtered.slice(start, start + limit),
    totalPages,
    total: filtered.length,
  };
}

export async function getPostsByAuthor(authorSlug: string, page: number = 1, limit: number = 5): Promise<PaginationResult> {
  const allPosts = await readAllPosts();
  const filtered = allPosts.filter((post) => post.author?.slug === authorSlug);
  const totalPages = Math.ceil(filtered.length / limit);
  const start = (page - 1) * limit;
  return {
    posts: filtered.slice(start, start + limit),
    totalPages,
    total: filtered.length,
  };
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  const authors = await readAllAuthors();
  const author = authors.find((a) => a.slug === slug);
  if (!author) throw new Error(`Author not found: ${slug}`);
  return author;
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  const tags = await readAllTags();
  const tag = tags.find((t) => t.slug === slug);
  if (!tag) throw new Error(`Tag not found: ${slug}`);
  return tag;
}

export function renderHTML(html: string): ReactNode {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
