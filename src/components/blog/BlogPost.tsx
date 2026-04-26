"use client";

import { GhostPost } from "@memoli/utils/ghost";
import AuthorCard from "@memoli/components/blog/AuthorCard";

interface BlogPostProps {
  post: GhostPost;
  onBack: () => void;
  onAuthorClick?: (slug: string) => void;
}

export default function BlogPost({ post, onBack, onAuthorClick }: BlogPostProps) {
  return (
    <div className="max-w-[900px] mx-auto px-4 pt-8 pb-24 [@media(min-width:1024px)]:px-8">
      <button
        onClick={onBack}
        className="mb-6 text-sm flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
        style={{ color: "#999898" }}
      >
        ← Back
      </button>

      {/* Title */}
      <h1
        className="m-0 mb-4"
        style={{ color: "#3C7CF7", fontSize: 36, fontWeight: 700, lineHeight: "100%" }}
      >
        {post.title}
      </h1>

      {/* Excerpt */}
      {post.excerpt && (
        <p
          className="m-0 mb-8"
          style={{ color: "#152B56", fontSize: 14, fontWeight: 500, lineHeight: "20px" }}
        >
          {post.excerpt}
        </p>
      )}

      {/* Hero image */}
      {post.feature_image && (
        <div className="w-full overflow-hidden rounded-2xl mb-8" style={{ aspectRatio: "16/7" }}>
          <img
            src={post.feature_image}
            alt={post.feature_image_alt ?? post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Two-col: author card left, content right */}
      <div className="flex flex-col gap-8 [@media(min-width:1024px)]:flex-row [@media(min-width:1024px)]:gap-12 [@media(min-width:1024px)]:items-start">
        {post.authors?.[0] && (
          <AuthorCard
            author={post.authors[0]}
            date={post.published_at}
            onAuthorClick={
              onAuthorClick
                ? () => onAuthorClick(post.authors[0].slug)
                : undefined
            }
          />
        )}

        <div className="flex-1 ghost-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}