import type { Metadata } from "next";

const SITE_URL = "https://memoli.app";
const OG_IMAGE = "https://memoli.app/image/brand/memoli_full.webp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Memoli's mission to reduce food waste through smart scanning, shelf-life tracking, and family sync. Meet the team and our vision for sustainability.",
  openGraph: {
    title: "About | Memoli - Smart Scanning for Sustainability",
    description:
      "Learn about Memoli's mission, team, and vision for sustainable household inventory management.",
    url: `${SITE_URL}/about`,
    siteName: "Memoli",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Memoli" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Memoli",
    description:
      "Learn about Memoli's mission, team, and vision for sustainable household inventory management.",
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
