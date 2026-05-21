import type { Metadata } from "next";

const SITE_URL = "https://memoli.app";
const OG_IMAGE = "https://memoli.app/image/brand/memoli_full.webp";

export const metadata: Metadata = {
  title: "End User License Agreement (EULA)",
  description:
    "Terms of use for the Memoli mobile application: license, data, connectivity, updates, and contact information.",
  openGraph: {
    title: "End User License Agreement (EULA) | Memoli",
    description: "Terms governing the license to install, copy, or use the Memoli app.",
    url: `${SITE_URL}/eula`,
    siteName: "Memoli",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Memoli" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "End User License Agreement (EULA) | Memoli",
    description: "Terms governing the license to install, copy, or use the Memoli app.",
  },
  alternates: {
    canonical: `${SITE_URL}/eula`,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}