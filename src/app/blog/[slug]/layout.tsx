import { getAllPostsServer } from "@memoli/utils/markdown-server";

// This must be a server component
export async function generateStaticParams() {
  const posts = await getAllPostsServer();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
