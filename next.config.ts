import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export to the `out` directory
  output: "export",
  images: {
    unoptimized: true, // disables server-side image optimization
  },
  
  // Set basePath for GitHub Pages deployment
  // When deployed to GitHub Pages at freeforcharity.github.io/FreeForCharity-web/,
  // all assets need to be prefixed with the repository name.
  // The custom domain (freeforcharity.org) uses a CNAME and doesn't need the basePath.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  
  // Ensure images work with the basePath
  // This is required for proper asset resolution in GitHub Pages
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
