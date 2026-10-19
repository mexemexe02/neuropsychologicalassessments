export type RankingAudience = "agent" | "developer" | "owner" | "weekly";

export type RankingItem = {
  id: string;
  audience: RankingAudience;
  title: string;
  detail: string;
};

/**
 * Split leftover ranking work by who can do it.
 * Weekly items never finish. The public owner page shows owner + weekly only.
 */
export const GOOGLE_RANKING_CHECKLIST: RankingItem[] = [
  {
    id: "agent-faq-tiny-schema",
    audience: "agent",
    title: "Write failing tests for FAQ, Tiny landing, and schema",
    detail:
      "Already in the repo: crawlable /faq, /neuropsychology-in-tiny, MedicalClinic JSON-LD, sitemap, and internal links.",
  },
  {
    id: "dev-deploy",
    audience: "developer",
    title: "Deploy so Google can fetch the new URLs",
    detail:
      "Push master so GitHub Pages serves /faq/ and /neuropsychology-in-tiny/ at https://neuropsychologicalassessments.com.",
  },
  {
    id: "dev-gsc-inspect",
    audience: "developer",
    title: "Search Console URL inspection",
    detail:
      "Inspect https://neuropsychologicalassessments.com/faq/ and https://neuropsychologicalassessments.com/neuropsychology-in-tiny/. Request indexing if they are unknown. Do not resubmit the sitemap if it is already live unless it was never submitted.",
  },
  {
    id: "dev-gsc-ai",
    audience: "developer",
    title: "Search Console generative AI include + report",
    detail:
      "Confirm the property is included in Search generative AI features (toggle if shown). Open the Generative AI performance report (worldwide as of 2026-08-31) and note impressions on /faq/ and assessment URLs. Do not add llms.txt or AEO files — Google ignores them for Search.",
  },
  {
    id: "dev-bing-apple",
    audience: "developer",
    title: "Claim Bing Places and Apple Business (same NAP)",
    detail:
      "Bing Places (helps Bing + often Copilot local) and Apple Business for Apple Maps. Exact NAP: Center for Neuropsychology and Psychotherapy, 34 County Rd 6 South, Tiny, Ontario L0L 2J0, 705-321-8146. Also submit the sitemap in Bing Webmaster Tools.",
  },
  {
    id: "dev-directories",
    audience: "developer",
    title: "Submit directory listings with the exact NAP",
    detail:
      "Psychology Today, Ontario Psychological Association Find a Psychologist, College of Psychologists and Behaviour Analysts of Ontario public register, CRPO public register, Yellow Pages Canada, and Canada411. Copy: Center for Neuropsychology and Psychotherapy, 34 County Rd 6 South, Tiny, Ontario L0L 2J0, 705-321-8146. Paste pack: marketing/nap-paste-pack-2026-10.md.",
  },
  {
    id: "dev-form-wire",
    audience: "developer",
    title: "Wire consultation form to practice email",
    detail:
      "Site is static export — needs a form provider (e.g. Formspree/Web3Forms) or Coolify serverless. Destination: drsauriolassociates@neuropsychologicalassessments.com. Until then, phone and email still work. Do not invent clinical form fields without Monday approval.",
  },
  {
    id: "owner-gbp-create",
    audience: "owner",
    title: "Create or claim the Google Business Profile",
    detail:
      "Use the same name, street, city, postal code, phone, website, and hours as this site. No profile matching this practice was found in public search.",
  },
  {
    id: "owner-gbp-categories",
    audience: "owner",
    title: "Set Google Business categories",
    detail:
      "Primary: Neuropsychologist if Google offers it, otherwise Psychologist. Add Psychotherapist and Mental health service if available. Do not pick categories the practice does not actually provide.",
  },
  {
    id: "owner-nap-hours",
    audience: "owner",
    title: "Match NAP and hours to the website",
    detail:
      "Name: Center for Neuropsychology and Psychotherapy. Address: 34 County Rd 6 South, Tiny, Ontario L0L 2J0. Phone: 705-321-8146. Hours: Monday through Saturday, 8:00 a.m. to 6:00 p.m.",
  },
  {
    id: "owner-maps-qa",
    audience: "owner",
    title: "Answer Google Maps Q&A with the FAQ wording",
    detail:
      "Use the same answers as /faq for office location, hours, in-person vs virtual, referral, and how to book.",
  },
  {
    id: "owner-review-policy",
    audience: "owner",
    title: "Do not ask clients for Google reviews",
    detail:
      "CRPO and CPBAO treat online reviews as testimonials. Do not ask clients to review, do not link to the review page, and do not post a review of your own listing. Clients may leave reviews on their own.",
  },
  {
    id: "owner-review-reply",
    audience: "owner",
    title: "Decide a uniform Google review reply policy",
    detail:
      "Safest: do not reply. If you reply, use the same short thanks on every 4–5 star review and never include health details. Move complaints offline to 705-321-8146.",
  },
  {
    id: "owner-confirm-street",
    audience: "owner",
    title: "Confirm the exact street name and unit",
    detail:
      "Done 2026-08-14: 34 County Rd 6 South, Tiny, Ontario L0L 2J0 (postal confirmed; Google street kept).",
  },
  {
    id: "weekly-photo-post",
    audience: "weekly",
    title: "Add one Google Business photo or post each week",
    detail:
      "A real photo of the office exterior, waiting area, or a clinician (with consent) is more useful than stock images.",
  },
  {
    id: "weekly-reviews",
    audience: "weekly",
    title: "Monitor unprompted Google reviews only",
    detail:
      "Check for new reviews clients left on their own. Do not solicit. Apply your uniform reply policy (or no replies) the same week.",
  },
];

export function ownerVisibleChecklist() {
  return GOOGLE_RANKING_CHECKLIST.filter(
    (item) => item.audience === "owner" || item.audience === "weekly",
  );
}
