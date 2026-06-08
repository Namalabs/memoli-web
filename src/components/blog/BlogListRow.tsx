"use client";

import Link from "next/link";
import type { MarkdownPost } from "@memoli/utils/markdown-client";
import BlogMeta from "@memoli/components/blog/BlogMeta";

interface BlogListRowProps {
  post: MarkdownPost;
}

export default function BlogListRow({
  post,
}: BlogListRowProps) {
  const href = post.customPath || `/blog/${post.slug}`;
  
  return (
    <Link href={href}>
      <div className="grid grid-cols-1 gap-6 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1024px)]:gap-12 items-center py-8 border-b border-black/[0.06] cursor-pointer hover:opacity-80 transition-opacity">
        {/* Text — always left on desktop */}
        <div className="flex flex-col gap-3 order-2 [@media(min-width:1024px)]:order-1">
          <h3
            className="m-0 hover:underline"
            style={{
              color: "#3C7CF7",
              fontSize: 24,
              fontWeight: 700,
              lineHeight: "100%",
            }}
          >
            {post.title}
          </h3>

          {post.excerpt && (
            <p
              className="m-0 line-clamp-5"
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

        {/* Image — top on mobile, right on desktop */}
        {post.feature_image && (
          <div
            className="overflow-hidden rounded-2xl order-1 [@media(min-width:1024px)]:order-2"
            style={{ aspectRatio: "4/3", maxWidth: "100%", width: "100%", maxHeight: 300 }}
          >
            <img
              src={post.feature_image}
              alt={post.feature_image_alt ?? post.title}
              className="w-full h-full object-cover object-center block"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </Link>
  );
}

