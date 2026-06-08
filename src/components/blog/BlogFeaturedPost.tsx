"use client";

import Link from "next/link";
import type { MarkdownPost } from "@memoli/utils/markdown-client";
import BlogMeta from "@memoli/components/blog/BlogMeta";

interface BlogFeaturedPostProps {
  post: MarkdownPost;
}

export default function BlogFeaturedPost({
  post,
}: BlogFeaturedPostProps) {
  const href = post.customPath || `/blog/${post.slug}`;
  
  return (
    <Link href={href}>
      <div className="grid grid-cols-1 gap-6 cursor-pointer hover:opacity-80 transition-opacity [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1024px)]:gap-12 items-center">
        {/* Image */}
        {post.feature_image && (
          <div
            className="w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={post.feature_image}
              alt={post.feature_image_alt ?? post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col gap-3">
          {/* Pill */}
          <div className="self-start">
            <span
              className="inline-block"
              style={{
                background: "#E2EBFE",
                color: "#3C7CF7",
                borderRadius: 30,
                padding: "4px 12px",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Recent Article
            </span>
          </div>

          <h2
            className="m-0 leading-tight hover:underline"
            style={{
              color: "#3C7CF7",
              fontSize: 36,
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            {post.title}
          </h2>

          {post.excerpt && (
            <p
              className="m-0 line-clamp-4"
              style={{
                color: "#152B56",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              {post.excerpt}
            </p>
          )}

          <BlogMeta date={post.date} readingTime={post.readingTime} />
        </div>
      </div>
    </Link>
  );
}
