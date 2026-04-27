"use client";

import { useState, useMemo } from "react";
import { usePosts, usePost } from "@memoli/hooks/useGhostPosts";
import BlogFeaturedPost from "@memoli/components/blog/BlogFeaturedPost";
import BlogListRow from "@memoli/components/blog/BlogListRow";
import BlogPost from "@memoli/components/blog/BlogPost";
import BlogDivider from "@memoli/components/blog/BlogDivider";
import BlogPagination from "@memoli/components/blog/BlogPagination";
import AuthorPage from "@memoli/components/blog/AuthorPage";

const POSTS_PER_PAGE = 3;

export default function BlogPage() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [authorSlug, setAuthorSlug] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { posts, loading: listLoading, error: listError } = usePosts();
  const { post, loading: postLoading, error: postError } = usePost(selectedSlug);

  const featured = posts[0] ?? null;
  const rest = posts.slice(1);

  const totalPages = Math.ceil(rest.length / POSTS_PER_PAGE);
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return rest.slice(start, start + POSTS_PER_PAGE);
  }, [rest, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading
  const spinner = (
    <div className="flex justify-center items-center min-h-[300px]">
      <div
        className="w-9 h-9 rounded-full animate-spin"
        style={{
          border: "3px solid #E2EBFE",
          borderTopColor: "#3C7CF7",
        }}
      />
    </div>
  );

  if (listLoading) return spinner;

  if (listError) {
    return (
      <div className="text-center py-16 px-4" style={{ color: "#999898" }}>
        <p>Failed to load posts. Is Ghost running on localhost:3001?</p>
      </div>
    );
  }

  // Author page
  if (authorSlug) {
    return (
      <AuthorPage
        authorSlug={authorSlug}
        onBack={() => setAuthorSlug(null)}
        onPostClick={(slug) => {
          setAuthorSlug(null);
          setSelectedSlug(slug);
        }}
      />
    );
  }

  // Single post
  if (selectedSlug) {
    if (postLoading) return spinner;
    if (postError || !post) {
      return (
        <div className="text-center py-16 px-4" style={{ color: "#999898" }}>
          <button
            className="block mx-auto mb-4 bg-transparent border-none cursor-pointer text-sm"
            style={{ color: "#3C7CF7" }}
            onClick={() => setSelectedSlug(null)}
          >
            ← Back
          </button>
          <p>Failed to load post.</p>
        </div>
      );
    }
    return (
      <BlogPost
        post={post}
        onBack={() => setSelectedSlug(null)}
        onAuthorClick={(slug) => {
          setSelectedSlug(null);
          setAuthorSlug(slug);
        }}
      />
    );
  }

  // Blog list
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 pt-8 pb-16">
      {/* Featured */}
      {featured && (
        <BlogFeaturedPost
          post={featured}
          onClick={() => setSelectedSlug(featured.slug)}
        />
      )}

      {/* Divider */}
      <div className="my-10 flex justify-center">
        <BlogDivider />
      </div>

      {/* Post list */}
      <div>
        {paginated.map((post) => (
          <BlogListRow
            key={post.id}
            post={post}
            onClick={() => setSelectedSlug(post.slug)}
            onAuthorClick={() => setAuthorSlug(post.authors?.[0]?.slug ?? null)}
          />
        ))}
      </div>

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}