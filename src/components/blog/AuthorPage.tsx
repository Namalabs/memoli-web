"use client";

import { useMemo, useState } from "react";
import { usePosts } from "@memoli/hooks/useGhostPosts";
import BlogDivider from "@memoli/components/blog/BlogDivider";
import BlogListRow from "@memoli/components/blog/BlogListRow";
import BlogPagination from "@memoli/components/blog/BlogPagination";

interface AuthorPageProps {
  authorSlug: string;
  onBack: () => void;
  onPostClick: (slug: string) => void;
}

const POSTS_PER_PAGE = 3;

export default function AuthorPage({ authorSlug, onBack, onPostClick }: AuthorPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const { posts, loading, error } = usePosts();

  const authorPosts = useMemo(
    () => posts.filter((p) => p.authors?.some((a) => a.slug === authorSlug)),
    [posts, authorSlug]
  );

  const author = authorPosts[0]?.authors?.find((a) => a.slug === authorSlug);
  const totalPages = Math.ceil(authorPosts.length / POSTS_PER_PAGE);
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return authorPosts.slice(start, start + POSTS_PER_PAGE);
  }, [authorPosts, currentPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div
          className="w-9 h-9 rounded-full animate-spin"
          style={{ border: "3px solid #E2EBFE", borderTopColor: "#3C7CF7" }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16" style={{ color: "#999898" }}>
        <p>Failed to load posts.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 pt-8 pb-16 [@media(min-width:1024px)]:px-8">
      <button
        onClick={onBack}
        className="mb-8 bg-transparent border-none cursor-pointer text-sm"
        style={{ color: "#999898" }}
      >
        ← Back
      </button>

      {/* Author header */}
      <div className="flex flex-col items-center gap-3 mb-10 [@media(min-width:1024px)]:items-start">
        {author?.profile_image ? (
          <img
            src={author.profile_image}
            alt={author.name}
            style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#D9D9D9" }} />
        )}
        <h1
          className="m-0"
          style={{ color: "#152B56", fontSize: 36, fontWeight: 700, lineHeight: "100%" }}
        >
          {author?.name ?? "Author"}
        </h1>
        <p className="m-0" style={{ color: "#999898", fontSize: 14, fontWeight: 500 }}>
          Author
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <BlogDivider />
      </div>

      {/* Posts */}
      {paginated.map((post) => (
        <BlogListRow
          key={post.id}
          post={post}
          onClick={() => onPostClick(post.slug)}
        />
      ))}

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}