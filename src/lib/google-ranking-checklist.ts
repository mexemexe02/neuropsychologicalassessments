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
    title: "Search Console AI-features opt-in",
    detail:
      "If Search Console shows a toggle for generative AI features, opt this property in. Measure later in the Generative AI performance report.",
  },
  {
    id: "dev-directories",
    audience: "developer",
    title: "Submit directory listings with the exact NAP",
    detail:
      "Psychology Today, Ontario Psychological Association Find a Psychologist, College of Psychologists and Behaviour Analysts of Ontario public register, CRPO public register, Yellow Pages Canada, and Canada411. Copy: Center for Neuropsychology and Psychotherapy, 34 County Road, Tiny, Ontario L0L 2J0, 705-321-8146.",
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
      "Name: Center for Neuropsychology and Psychotherapy. Address: 34 County Road, Tiny, Ontario L0L 2J0. Phone: 705-321-8146. Hours: Monday through Saturday, 8:00 a.m. to 6:00 p.m.",
  },
  {
    id: "owner-maps-qa",
    audience: "owner",
    title: "Answer Google Maps Q&A with the FAQ wording",
    detail:
      "Use the same answers as /faq for office location, hours, in-person vs virtual, referral, and how to book.",
  },
  {
    id: "owner-review-ask",
    audience: "owner",
    title: "Ask for a Google review at every happy visit",
    detail:
      "A spoken or printed request is enough. Do not offer discounts, gifts, or other incentives for reviews.",
  },
  {
    id: "owner-review-reply",
    audience: "owner",
    title: "Reply to Google reviews",
    detail:
      "Thank people who write reviews. Keep replies factual. Do not include private health details.",
  },
  {
    id: "owner-confirm-street",
    audience: "owner",
    title: "Confirm the exact street name and unit",
    detail:
      "The site uses 34 County Road as provided. If the legal street is County Road 6, 25, or another numbered road, or if there is a unit, send the exact line so the website and Google match.",
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
    title: "Ask for a Google review after happy visits",
    detail:
      "Keep asking at completed visits. Reply to any new reviews the same week. This item does not finish.",
  },
];

export function ownerVisibleChecklist() {
  return GOOGLE_RANKING_CHECKLIST.filter(
    (item) => item.audience === "owner" || item.audience === "weekly",
  );
}
