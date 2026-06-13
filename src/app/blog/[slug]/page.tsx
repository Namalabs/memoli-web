"use client";

import { useState, useEffect, use } from "react";
import { usePost } from "@memoli/hooks/useMarkdownPosts";
import BlogPost from "@memoli/components/blog/BlogPost";
import Link from "next/link";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { post, loading, error } = usePost(slug);

  // Set meta tags for SEO when post loads
  useEffect(() => {
    if (post) {
      // Update title
      document.title = `${post.title} | Memoli Blog`;

      // Update meta description
      let metaDescription = document.querySelector(
        'meta[name="description"]'
      ) as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement("meta") as HTMLMetaElement;
        metaDescription.name = "description";
        document.head.appendChild(metaDescription);
      }
      metaDescription.content =
        post.seo?.description || post.excerpt || "";

      // Update og:title
      let ogTitle = document.querySelector(
        'meta[property="og:title"]'
      ) as HTMLMetaElement;
      if (!ogTitle) {
        ogTitle = document.createElement("meta") as HTMLMetaElement;
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = post.title;

      // Update og:description
      let ogDesc = document.querySelector(
        'meta[property="og:description"]'
      ) as HTMLMetaElement;
      if (!ogDesc) {
        ogDesc = document.createElement("meta") as HTMLMetaElement;
        ogDesc.setAttribute("property", "og:description");
        document.head.appendChild(ogDesc);
      }
      ogDesc.content = post.seo?.description || post.excerpt || "";

      // Update og:image
      if (post.feature_image) {
        let ogImage = document.querySelector(
          'meta[property="og:image"]'
        ) as HTMLMetaElement;
        if (!ogImage) {
          ogImage = document.createElement("meta") as HTMLMetaElement;
          ogImage.setAttribute("property", "og:image");
          document.head.appendChild(ogImage);
        }
        ogImage.content =
          post.seo?.ogImage || post.feature_image;
      }

      // Update canonical - use custom path if available
      let canonical = document.querySelector(
        'link[rel="canonical"]'
      ) as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement("link") as HTMLLinkElement;
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      const customPath = post.customPath || `/blog/${post.slug}`;
      canonical.href = post.seo?.canonical || `https://memoli.app${customPath}`;
    }
  }, [post]);

  const spinner = (
    <div className="flex justify-center items-center min-h-[300px]">
      <div
        className="w-9 h-9 rounded-full animate-spin"
        style={{ border: "3px solid #E2EBFE", borderTopColor: "#3C7CF7" }}
      />
    </div>
  );

  if (loading) return spinner;

  if (error || !post) {
    return (
      <div className="text-center py-16 px-4" style={{ color: "#999898" }}>
        <Link
          href="/blog"
          className="block mx-auto mb-4 bg-transparent border-none cursor-pointer text-sm"
          style={{ color: "#3C7CF7" }}
        >
          ← Back to Blog
        </Link>
        <p>Failed to load post.</p>
      </div>
    );
  }

  // Generate JSON-LD structured data for search engines
  const customPath = post.customPath || `/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seo?.description || post.excerpt || "",
    "image": post.feature_image || "https://memoli.app/image/brand/memoli_full.webp",
    "datePublished": post.published_at || post.date,
    "dateModified": post.published_at || post.date,
    "author": post.author ? {
      "@type": "Person",
      "name": post.author.name,
    } : undefined,
    "publisher": {
      "@type": "Organization",
      "name": "Memoli",
      "logo": {
        "@type": "ImageObject",
        "url": "https://memoli.app/image/brand/memoli_full.webp",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://memoli.app${customPath}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost
        post={post}
        onBack={() => {
          window.location.href = "/blog";
        }}
        onAuthorClick={(authorSlug) => {
          window.location.href = `/blog?author=${authorSlug}`;
        }}
      />
    </>
  );
}
