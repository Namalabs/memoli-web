import type { Metadata } from "next";

const SITE_URL = "https://memoli.app";
const OG_IMAGE = "https://memoli.app/image/brand/memoli_full.webp";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Memoli collects, uses, and protects your information when you use the Memoli mobile application and related services.",
  openGraph: {
    title: "Privacy Policy | Memoli",
    description:
      "Privacy practices for the Memoli app: data collection, third parties, retention, and your rights.",
    url: `${SITE_URL}/privacy`,
    siteName: "Memoli",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Memoli" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Memoli",
    description: "Privacy practices for the Memoli app and related services.",
  },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
