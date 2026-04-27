"use client";

interface BlogMetaProps {
  date: string;
  readingTime: number;
}

export default function BlogMeta({ date, readingTime }: BlogMetaProps) {
  const formatted = new Date(date).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <p
      className="flex items-center gap-2"
      style={{ color: "#999898", fontSize: 10, lineHeight: "20px", fontWeight: 500 }}
    >
      <span>{formatted}</span>
      <span>·</span>
      <span>{readingTime} min read</span>
    </p>
  );
}