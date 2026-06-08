// src/components/blog/BlogCard.tsx
"use client";

import type { MarkdownPost } from "@memoli/utils/markdown-client";

interface BlogCardProps {
  post: MarkdownPost;
  onClick: () => void;
}

export default function BlogCard({ post, onClick }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article
      className="cursor-pointer rounded-xl overflow-hidden border border-black/[0.08] bg-white flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {post.feature_image && (
        <div className="aspect-video overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={post.feature_image}
            alt={post.feature_image_alt ?? post.title}
            loading="lazy"
          />
        </div>
      )}

      <div className="p-5 flex flex-col gap-2 flex-1">
        {post.tags?.[0] && (
          <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-blue-600">
            {post.tags[0].name}
          </span>
        )}

        <h2 className="text-base font-bold leading-snug m-0 text-gray-900">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 m-0 flex-1">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          {post.authors?.[0] && (
            <div className="flex items-center gap-2">
              <span className="text-[0.8rem] text-gray-600 font-medium">
                {post.authors[0].name}
              </span>
            </div>
          )}
          <time
            className="text-[0.78rem] text-gray-400"
            dateTime={post.published_at}
          >
            {formattedDate}
          </time>
        </div>
      </div>
    </article>
  );
}