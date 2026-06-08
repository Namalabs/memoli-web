"use client";

import React, { useState, useEffect } from "react";
import { usePosts } from "@memoli/hooks/useMarkdownPosts";
import BlogFeaturedPost from "@memoli/components/blog/BlogFeaturedPost";
import BlogListRow from "@memoli/components/blog/BlogListRow";
import BlogDivider from "@memoli/components/blog/BlogDivider";
import BlogPagination from "@memoli/components/blog/BlogPagination";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === "undefined") return 1;
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page") ?? "1", 10);
    return isNaN(page) || page < 1 ? 1 : page;
  });

  useEffect(() => {
    const handlePop = () => {
      const params = new URLSearchParams(window.location.search);
      const page = parseInt(params.get("page") ?? "1", 10);
      setCurrentPage(isNaN(page) || page < 1 ? 1 : page);
    };
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page") ?? "1", 10);
    const next = isNaN(page) || page < 1 ? 1 : page;
    setCurrentPage((prev) => (prev !== next ? next : prev));
  }, []);

  const {
    posts,
    loading: listLoading,
    error: listError,
    totalPages,
  } = usePosts(currentPage);
  const featured = currentPage === 1 ? (posts[0] ?? null) : null;
  const rest = currentPage === 1 ? posts.slice(1) : posts;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const url = new URL(window.location.href);
    url.searchParams.set("page", String(page));
    window.history.pushState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const spinner = (
    <div className="flex justify-center items-center min-h-[300px]">
      <div
        className="w-9 h-9 rounded-full animate-spin"
        style={{ border: "3px solid #E2EBFE", borderTopColor: "#3C7CF7" }}
      />
    </div>
  );

  if (listLoading) return spinner;

  if (listError) {
    return (
      <div className="text-center py-16 px-4" style={{ color: "#999898" }}>
        <p>Failed to load posts.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-10 pt-8 pb-16">
      {featured && (
        <React.Fragment>
          <BlogFeaturedPost
            post={featured}
          />

          <div className="my-10 flex justify-center">
            <BlogDivider />
          </div>
        </React.Fragment>
      )}

      <div>
        {rest.map((post) => (
          <BlogListRow
            key={post.id}
            post={post}
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
