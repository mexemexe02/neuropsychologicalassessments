import type { NextConfig } from "next";

// GitHub Pages project sites live under /neuropsychologicalassessments/
// (V1) or /neuropsychologicalassessments/v2/ (V2 preview).
// Local/Coolify (and custom domain) keep an empty basePath.
const pagesBase =
  process.env.PAGES_BASE_PATH ||
  (process.env.GITHUB_PAGES === "1" ? "/neuropsychologicalassessments" : "");

const nextConfig: NextConfig = {
  // Static output keeps the site portable for Coolify or any CDN.
  output: "export",
  trailingSlash: true,
  basePath: pagesBase || undefined,
  assetPrefix: pagesBase || undefined,
  images: {
    unoptimized: true,
  },
  // Playwright and local tools hit 127.0.0.1; without this, Next 16 blocks
  // dev/HMR resources and client hydration can fail in automated checks.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Prevent a home-directory lockfile from being mistaken for a monorepo root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
