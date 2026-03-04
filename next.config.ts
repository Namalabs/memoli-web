import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Output mode for CSR only - disables SSR and dynamic routes
  output: "export",
  // Flatten the output structure for easier nginx serving
  distDir: "out",
  // Optimize images for static export
  images: {
    unoptimized: true,
  },
  // Remove trailing slashes for cleaner URLs
  trailingSlash: false,
  // Generate static pages with proper extensions
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};

export default nextConfig;
