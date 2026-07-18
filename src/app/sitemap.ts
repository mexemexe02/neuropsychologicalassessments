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
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => {
    // Match next.config trailingSlash: true so sitemap URLs match live paths.
    const path = route === "" ? "/" : `${route}/`;
    return {
      url: `${site.domain}${path}`,
      lastModified: new Date(),
      changeFrequency: index === 0 ? "monthly" : "yearly",
      priority: index === 0 ? 1 : route === "/contact" ? 0.9 : 0.7,
    };
  });
}
