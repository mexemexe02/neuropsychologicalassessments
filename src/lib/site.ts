// Brand and contact — from Sebastian’s July 15, 2026 content package.

// GitHub Pages project site lives under /neuropsychologicalassessments/.
// next/image + static export does not always prefix public/ URLs, so use
// assetPath for absolute assets.
const pagesBase =
  process.env.PAGES_BASE_PATH ||
  (process.env.GITHUB_PAGES === "1" ? "/neuropsychologicalassessments" : "");

export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${pagesBase}${normalized}`;
}

// Public URL for metadata/OG. Project-path builds use github.io; production
// custom domain uses the apex (www CNAME redirects there in DNS).
export const siteOrigin = pagesBase
  ? `https://mexemexe02.github.io${pagesBase}`
  : "https://neuropsychologicalassessments.com";

export const site = {
  // Public brand — confirmed with Sebastian (Jul 2026): shorter header name.
  // Domain stays neuropsychologicalassessments.com for search visibility.
  name: "Centre for Neuropsychology and Psychotherapy",
  shortName: "Centre for Neuropsychology and Psychotherapy",
  // Longer descriptor for footer / SEO context (not the header lockup).
  longDescriptor:
    "Neuropsychological assessments for children through older adulthood and evidence-based psychotherapy for adults.",
  tagline: "Thoughtful care. Clear next steps.",
  description:
    "Neuropsychological assessments for children through older adulthood and evidence-based psychotherapy for adults.",
  domain: siteOrigin,
  phone: "705-321-8146",
  phoneHref: "tel:+17053218146",
  email: "drsauriolassociates@neuropsychologicalassessments.com",
  addressLine1: "34 County Road",
  addressLine2: "Tiny, Ontario L0L 2J0",
  // Hours from Sebastian’s Jul 19 “Important changes” email.
  hours: "Monday through Saturday: 8:00 a.m. to 6:00 p.m.",
  serviceNote:
    "In Person and Virtual Services are Available (In person for Testing and Assessments. Virtual Services for Therapy)",
  // Neuropsych assessment fees stay off-site; contact after consultation.
  assessmentFeesNote:
    "Please contact the practice for information about assessment fees and related services.",
} as const;

/** Home “Explore our services” buttons — TPWG-style quick links (Sebastian Jul 19). */
export const homeServiceLinks = [
  { id: "assessments", label: "Assessments", href: "/assessments" },
  { id: "psychotherapy", label: "Psychotherapy", href: "/psychotherapy" },
  { id: "clinicians", label: "Clinicians", href: "/clinicians" },
  { id: "education", label: "Education", href: "/education" },
  { id: "resources", label: "Resources", href: "/resources" },
] as const;

export type NavChild = {
  id: string;
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  /** Optional flyout — Sebastian asked for selectable tabs under these parents. */
  children?: readonly NavChild[];
};

// Home is listed in nav per Sebastian’s brief; logo also links home.
// Labels are English defaults; LanguageProvider overlays French chrome labels.
export const navItems: readonly NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  {
    id: "assessments",
    label: "Assessments",
    href: "/assessments",
    children: [
      { id: "assessments-overview", label: "Overview", href: "/assessments" },
      {
        id: "assessments-tbi",
        label: "Traumatic Brain Injury",
        href: "/assessments/traumatic-brain-injury",
      },
      {
        id: "assessments-medico",
        label: "Medico-Legal Assessments",
        href: "/assessments/medico-legal",
      },
    ],
  },
  { id: "clinicians", label: "Clinicians", href: "/clinicians" },
  {
    id: "psychotherapy",
    label: "Psychotherapy",
    href: "/psychotherapy",
    children: [
      {
        id: "psychotherapy-overview",
        label: "Overview",
        href: "/psychotherapy",
      },
      {
        id: "psychotherapy-men",
        label: "Men & sexual abuse",
        href: "/psychotherapy/#men-sexual-abuse",
      },
      {
        id: "psychotherapy-addiction",
        label: "Addiction and Self-Esteem",
        href: "/psychotherapy/addiction-and-self-esteem",
      },
    ],
  },
  {
    id: "education",
    label: "Education",
    href: "/education",
    children: [
      { id: "education-overview", label: "Overview", href: "/education" },
      {
        id: "education-tbi",
        label: "Traumatic Brain Injury",
        href: "/education/traumatic-brain-injury",
      },
    ],
  },
  { id: "resources", label: "Resources", href: "/resources" },
] as const;
