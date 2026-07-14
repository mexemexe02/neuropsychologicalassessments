import type { NextConfig } from "next";

// GitHub Pages project sites live under /neuropsychologicalassessments/.
// Local/Coolify (and custom domain) keep an empty basePath.
const repoBase = "/neuropsychologicalassessments";
const useGhPagesBase = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  // Static output keeps the site portable for Coolify or any CDN.
  output: "export",
  trailingSlash: true,
  basePath: useGhPagesBase ? repoBase : "",
  assetPrefix: useGhPagesBase ? repoBase : undefined,
  images: {
    unoptimized: true,
  },
  // Prevent a home-directory lockfile from being mistaken for a monorepo root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
