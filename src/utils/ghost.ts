// src/utils/ghost.ts

const API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL ?? "http://localhost:3001";
const API_KEY = process.env.NEXT_PUBLIC_GHOST_API_KEY ?? "";
const BASE = `${API_URL}/ghost/api/content`;

export interface GhostTag {
  id: string;
  name: string;
  slug: string;
}

export interface GhostAuthor {
  id: string;
  name: string;
  slug: string;
  profile_image: string | null;
}

export interface GhostPost {
  id: string;
  slug: string;
  title: string;
  html: string;
  excerpt: string | null;
  feature_image: string | null;
  feature_image_alt: string | null;
  published_at: string;
  reading_time: number;
  tags: GhostTag[];
  authors: GhostAuthor[];
}

interface GhostPostsResponse {
  posts: GhostPost[];
  meta: {
    pagination: {
      page: number;
      pages: number;
      limit: number;
      total: number;
    };
  };
}

const defaultParams = new URLSearchParams({
  key: API_KEY,
  include: "tags,authors",
  formats: "html",
  limit: "all",
});

export async function fetchPosts(page: number = 1, limit: number = 5): Promise<{ posts: GhostPost[], totalPages: number }> {
  const params = new URLSearchParams({
    key: API_KEY,
    include: "tags,authors",
    formats: "html",
    limit: String(limit),
    page: String(page),
  });

  const res = await fetch(`${BASE}/posts/?${params}`);
  if (!res.ok) throw new Error(`Ghost API error: ${res.status}`);
  const data: GhostPostsResponse = await res.json();
  return { posts: data.posts, totalPages: data.meta.pagination.pages };
}

export async function fetchPostBySlug(slug: string): Promise<GhostPost> {
  const params = new URLSearchParams(defaultParams);
  const res = await fetch(`${BASE}/posts/slug/${slug}/?${params}`);
  if (!res.ok) throw new Error(`Ghost API error: ${res.status}`);
  const data = await res.json();
  return data.posts[0];
}