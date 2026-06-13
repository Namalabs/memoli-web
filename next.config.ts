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
  // Enable trailing slashes for proper static file serving
  // This creates index.html in subdirectories instead of flat .html files
  trailingSlash: true,
  // Generate static pages with proper extensions
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};

export default nextConfig;
