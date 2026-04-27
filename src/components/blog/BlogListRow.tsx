"use client";

import { GhostPost } from "@memoli/utils/ghost";
import BlogMeta from "@memoli/components/blog/BlogMeta";

interface BlogListRowProps {
  post: GhostPost;
  onClick: () => void;
  onAuthorClick?: () => void;
}

export default function BlogListRow({ post, onClick, onAuthorClick }: BlogListRowProps) {
  return (
    <div className="grid grid-cols-1 gap-6 [@media(min-width:1024px)]:grid-cols-2 [@media(min-width:1024px)]:gap-12 items-center py-8 border-b border-black/[0.06]">
      {/* Text — always left on desktop */}
      <div className="flex flex-col gap-3 order-2 [@media(min-width:1024px)]:order-1">
        <h3
          className="m-0 cursor-pointer hover:underline"
          style={{ color: "#3C7CF7", fontSize: 22, fontWeight: 700, lineHeight: "100%" }}
          onClick={onClick}
        >
          {post.title}
        </h3>

        {post.excerpt && (
          <p
            className="m-0 line-clamp-5"
            style={{ color: "#152B56", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}
          >
            {post.excerpt}
          </p>
        )}

        <BlogMeta date={post.published_at} readingTime={post.reading_time} />
      </div>

      {/* Image — top on mobile, right on desktop */}
      {post.feature_image && (
        <div
          className="w-full overflow-hidden rounded-2xl cursor-pointer order-1 [@media(min-width:1024px)]:order-2"
          style={{ aspectRatio: "4/3" }}
          onClick={onClick}
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
  );
}