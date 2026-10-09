import type { StaticImageData } from "next/image";
// Local optimized thumbnails — no YouTube request until the visitor clicks play.
import sebastianIntroThumb from "@/assets/videos/sebastian-intro-thumbnail.jpg";
import sylvieExplainerEnThumb from "@/assets/videos/sylvie-neuropsych-explainer-en-thumbnail.jpg";
import sylvieExplainerFrThumb from "@/assets/videos/sylvie-explainer-fr-thumbnail.jpg";

/**
 * Practice YouTube videos shown on home and /clinicians.
 * Thumbnails are self-hosted; playback uses youtube-nocookie click-to-load.
 */
export type PracticeVideo = {
  id: string;
  youtubeId: string;
  title: string;
  /** Short line under the title — factual, no clinical claims. */
  summary: string;
  durationLabel: string;
  /** ISO 8601 duration for VideoObject schema. */
  durationIso: string;
  languageLabel: string;
  /** BCP 47 language tag for schema. */
  inLanguage: string;
  orientation: "portrait" | "landscape";
  thumbnail: StaticImageData;
  /** Public path twin for JSON-LD thumbnailUrl (matches schema headshot pattern). */
  thumbnailPublicPath: string;
  /** Approximate publish day from the YouTube channel (Oct 9, 2026). */
  uploadDate: string;
  watchUrl: string;
  embedUrl: string;
};

const CHANNEL = "https://www.youtube.com/@neuropsychologicalassessments";

function youtubeUrls(youtubeId: string) {
  return {
    watchUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeId}`,
  };
}

export const practiceVideos = {
  sebastianIntro: {
    id: "sebastian-intro",
    youtubeId: "8I0WJxkRonM",
    title: "Meet Sebastian Jose",
    summary: "A short introduction from our registered psychotherapist (qualifying).",
    durationLabel: "1:48",
    durationIso: "PT1M48S",
    languageLabel: "English",
    inLanguage: "en",
    orientation: "portrait",
    thumbnail: sebastianIntroThumb,
    thumbnailPublicPath: "/images/videos/sebastian-intro-thumbnail.jpg",
    uploadDate: "2026-10-09",
    ...youtubeUrls("8I0WJxkRonM"),
  },
  sylvieExplainerEn: {
    id: "sylvie-explainer-en",
    youtubeId: "L81_djnQobw",
    title: "What Is a Neuropsychological Assessment?",
    summary: "Dr. Sylvie Sauriol explains what a neuropsychological assessment involves.",
    durationLabel: "2:29",
    durationIso: "PT2M29S",
    languageLabel: "English",
    inLanguage: "en",
    orientation: "landscape",
    thumbnail: sylvieExplainerEnThumb,
    thumbnailPublicPath: "/images/videos/sylvie-neuropsych-explainer-en-thumbnail.jpg",
    uploadDate: "2026-10-09",
    ...youtubeUrls("L81_djnQobw"),
  },
  sylvieExplainerFr: {
    id: "sylvie-explainer-fr",
    youtubeId: "GtEOl1izsMU",
    title: "Qu'est-ce qu'une évaluation neuropsychologique ?",
    summary: "Dre Sylvie Sauriol explique en quoi consiste une évaluation neuropsychologique.",
    durationLabel: "3:11",
    durationIso: "PT3M11S",
    languageLabel: "En français",
    inLanguage: "fr",
    orientation: "landscape",
    thumbnail: sylvieExplainerFrThumb,
    thumbnailPublicPath: "/images/videos/sylvie-explainer-fr-thumbnail.jpg",
    uploadDate: "2026-10-09",
    ...youtubeUrls("GtEOl1izsMU"),
  },
} as const satisfies Record<string, PracticeVideo>;

/** Home-page order: intro first, then both explainers. */
export const homeVideos: readonly PracticeVideo[] = [
  practiceVideos.sebastianIntro,
  practiceVideos.sylvieExplainerEn,
  practiceVideos.sylvieExplainerFr,
];

export const sylvieVideos: readonly PracticeVideo[] = [
  practiceVideos.sylvieExplainerEn,
  practiceVideos.sylvieExplainerFr,
];

export const sebastianVideos: readonly PracticeVideo[] = [
  practiceVideos.sebastianIntro,
];

export const youtubeChannelUrl = CHANNEL;
