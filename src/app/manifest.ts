import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Web app manifest. Gives Android/Chrome a proper name and icon when the
 * site is bookmarked or added to a home screen. No visual change on the
 * site itself. Icons come from `node scripts/make-og-image.mjs`.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Neuropsychology & Psychotherapy",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "en-CA",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
