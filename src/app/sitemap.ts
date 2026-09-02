import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/assessments",
  "/assessments/traumatic-brain-injury",
  "/assessments/medico-legal",
  "/clinicians",
  "/psychotherapy",
  "/psychotherapy/addiction-and-self-esteem",
  "/education",
  "/education/traumatic-brain-injury",
  "/resources",
  "/contact",
  "/faq",
  "/neuropsychology-in-tiny",
  "/privacy",
];

// Shared content files: a change here (NAP, hours, copy) changes every page.
const sharedFiles = ["src/lib/site.ts", "src/lib/content.ts", "src/lib/faq.ts"];

/**
 * Last commit date for the files behind a route.
 * Google ignores `lastmod` when it is the same "now" on every build, so we
 * read the real git date instead. Falls back to undefined (no lastmod) when
 * git or history is unavailable — CI uses fetch-depth: 0 for this reason.
 */
function lastModifiedFor(route: string): Date | undefined {
  const pageFile = `src/app${route}/page.tsx`;
  const files = [pageFile, ...sharedFiles].map((f) => JSON.stringify(f));
  try {
    const iso = execSync(`git log -1 --format=%cI -- ${files.join(" ")}`, {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => {
    // Match next.config trailingSlash: true so sitemap URLs match live paths.
    const path = route === "" ? "/" : `${route}/`;
    return {
      url: `${site.domain}${path}`,
      lastModified: lastModifiedFor(route),
      changeFrequency: index === 0 ? "monthly" : "yearly",
      priority:
        index === 0
          ? 1
          : route === "/contact" ||
              route === "/faq" ||
              route === "/neuropsychology-in-tiny"
            ? 0.9
            : 0.7,
    };
  });
}
