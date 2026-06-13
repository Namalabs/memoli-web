"use client";

import type { Author } from "@memoli/utils/markdown-client";

interface AuthorCardProps {
  author: Author;
  date: string;
  onAuthorClick?: () => void;
}

export default function AuthorCard({ author, date, onAuthorClick }: AuthorCardProps) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: document.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-2 w-full [@media(min-width:1024px)]:w-[200px] [@media(min-width:1024px)]:sticky [@media(min-width:1024px)]:top-8"
      style={{
        background: "#ECF2FE",
        border: "1px solid #C3D6FD",
        borderRadius: 32,
        padding: 16,
      }}
    >
      {/* Avatar */}
      <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#D9D9D9", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 24, color: "#666" }}>👤</span>
      </div>

      <p
        className="m-0 text-center"
        style={{ color: "#152B56", fontSize: 14, fontWeight: 700 }}
      >
        {author.name}
      </p>

      <p
        className="m-0 text-center"
        style={{ color: "#999898", fontSize: 10, fontWeight: 500 }}
      >
        {formatted}
      </p>

      <button
        onClick={handleShare}
        className="w-full py-2 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-90"
        style={{ background: "#3C7CF7", fontSize: 12, fontWeight: 500 }}
      >
        Share Article
      </button>

      {onAuthorClick && (
        <button
          onClick={onAuthorClick}
          className="text-xs underline"
          style={{ color: "#3C7CF7", fontSize: 10 }}
        >
          View all by {author.name}
        </button>
      )}
    </div>
  );
}