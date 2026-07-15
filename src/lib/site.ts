// Brand and contact — from Sebastian’s July 15, 2026 content package.

// GitHub Pages project site lives under /neuropsychologicalassessments/.
// next/image + static export does not always prefix public/ URLs, so use this
// for any absolute asset path in <Image> / <img>.
const pagesBase =
  process.env.GITHUB_PAGES === "1" ? "/neuropsychologicalassessments" : "";

export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${pagesBase}${normalized}`;
}

// Public URL for metadata/OG. Preview builds use GitHub Pages so share cards
// resolve under the demo host instead of the future custom domain.
export const siteOrigin =
  process.env.GITHUB_PAGES === "1"
    ? "https://mexemexe02.github.io/neuropsychologicalassessments"
    : "https://www.neuropsychologicalassessments.com";

export const site = {
  name: "Centre for Neuropsychological Assessments, Psychotherapy and Counselling",
  shortName: "Centre for Neuropsychological Assessments",
  tagline:
    "Thoughtful care. Clear next steps.",
  description:
    "Neuropsychological assessments for children through older adulthood and evidence-based psychotherapy for adults.",
  domain: siteOrigin,
  phone: "705-321-8146",
  phoneHref: "tel:+17053218146",
  email: "drsauriolassociates@neuropsychologicalassessments.com",
  addressLine1: "34 County Road",
  addressLine2: "Tiny, Ontario L0L 2J0",
  serviceNote:
    "In Person and Virtual Services are Available (In person for Testing and Assessments. Virtual Services for Therapy)",
} as const;

// Home is listed in nav per Sebastian’s brief; logo also links home.
export const navItems = [
  { label: "Home", href: "/" },
  { label: "Assessments", href: "/assessments" },
  { label: "Clinicians", href: "/clinicians" },
  { label: "Psychotherapy", href: "/psychotherapy" },
  { label: "Education", href: "/education" },
  { label: "Resources", href: "/resources" },
] as const;
