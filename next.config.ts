import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Output mode for CSR only - disables SSR and dynamic routes
  output: "export",
};

export default nextConfig;
