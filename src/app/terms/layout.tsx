import type { Metadata } from "next";

const SITE_URL = "https://memoli.app";
const OG_IMAGE = "https://memoli.app/image/brand/memoli_full.webp";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of use for the Memoli mobile application: license, data, connectivity, updates, and contact information.",
  openGraph: {
    title: "Terms of Service | Memoli",
    description: "Terms governing your use of the Memoli app and related services.",
    url: `${SITE_URL}/terms`,
    siteName: "Memoli",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Memoli" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Memoli",
    description: "Terms governing your use of the Memoli app.",
  },
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
