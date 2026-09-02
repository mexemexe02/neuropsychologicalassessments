# Google reviews — stop before asking (compliance note)

Date: 2026-09-02
For: Humberto (then Sebastian and Dr. Sauriol)
Replaces: the planned “review-ask script + reply templates” item.

## Bottom line

Do **not** hand the clinicians a review-ask script. Both are regulated health
professionals in Ontario, and both regulators treat online reviews as
testimonials. Asking clients for Google reviews, linking to the review page, or
picking which reviews get highlighted is professional misconduct territory.

Reviews that clients post **on their own** are allowed. The practice just cannot
request, steer, or advertise them.

## What the rules actually say

**Sebastian Jose — RP (Qualifying), CRPO**

- CRPO Professional Practice Standard 6.2 Advertising, s. 6.2.2:
  “Registrants do not request or solicit testimonials or use them in their
  advertising.” A *review* is defined as a type of testimonial (“five star
  rating”, statements, rankings).
- Same standard: clients may review a registrant on third-party sites
  “provided registrants do not request them to do so, and provided registrants
  do not influence which reviews or endorsements are published.”
- CRPO advisory: linking your advertising (website, social) directly to a
  third-party review page “could be considered inappropriately using a
  testimonial.”
- Sources: <https://crpo.ca/practice-standards/business-practices/advertising/>
  and <https://crpo.ca/resource-articles/advertising-testimonials-endorsements-and-community-voting-awards/>

**Dr. Sylvie Sauriol — Psychologist, CPBAO**

- Standards of Professional Conduct (2024) s. 6.3(e): “Testimonials may not be
  used to promote a registrant’s practice.”
- s. 6.3(f): no direct solicitation of individuals requiring service, via any
  medium.
- s. 6.5: “Registrants may not respond publicly to on-line reviews if the
  review would allow the identification of a current or past service
  recipient. Even if no identification is possible, the registrant must
  consider the possibility of harm.”
- Sources: <https://cpbao.ca/members/professional-practice/standards-of-professional-conduct/>
  and O. Reg. 195/23 (Professional Misconduct) under the Psychology and
  Applied Behaviour Analysis Act, 2021.

## What to do instead (all allowed)

1. **No asking.** No spoken ask, no card, no email footer, no QR code, no
   “leave us a review” link anywhere — not on the site, not in the Google
   post, not in the email signature.
2. **One uniform reply policy, or none.** Safest: never reply to any review.
   If they prefer to reply, use the exact same words on every 4–5 star review
   (e.g. “Thank you.”) and never confirm anyone is a client. For 1–3 star
   reviews: one neutral line that moves it offline, e.g. “We take feedback
   seriously. Please contact the practice directly at 705-321-8146.” Never
   discuss what happened.
3. **Self-reviews.** Sebastian said on 2026-08-14 that he “put one” review
   himself. A review of your own business violates Google’s review policy and
   reads as a testimonial. Recommend he delete it from his Google account
   (Google Maps → Your contributions → Reviews).
4. **Do not display ratings on the site.** Keep `aggregateRating` out of the
   JSON-LD (already the case). Do not embed a Google reviews widget.
5. **Owner checklist page.** `/owner/google-ranking/` still says “Ask for a
   Google review at every happy visit.” That page is noindex, but the advice
   is wrong for these two clinicians. Ask Humberto to approve rewording it
   before the next deploy (test `tests/e2e/ranking.spec.ts` asserts that
   heading, so the test moves with it).

## Compliant ways to build “prominence” (what Google actually rewards)

These replace review volume as the growth lever:

- **Professional registers and directories with the locked NAP** — CPBAO public
  register, CRPO public register, Psychology Today, OPA Find-a-Psychologist,
  Canada411, YellowPages, Bing Places, Apple Business Connect. Consistent NAP
  and a live website link on each. See `drafts/citation-audit-2026-09-02.md`.
- **Referral relationships** (business-to-business, not client solicitation):
  family physicians, paediatricians, neurologists, personal-injury lawyers,
  school boards and resource teachers, rehab providers around Midland,
  Penetanguishene, Wasaga Beach and Barrie. A one-page referral sheet with the
  NAP, services, languages, and the 15-minute consultation is allowed.
- **Google Business Profile completeness** — categories, services, hours,
  real photos of the office, a factual post now and then. No review prompts.
- **Education content on the site** — the existing Education / TBI pages are
  the right kind of “helpful content.” Add only when there is something real
  to say; never a page-a-day.
- **Local mentions** — sponsorships, community talks, a listing on the Tiny
  Township or Simcoe County community-services pages if they accept health
  providers. Real mentions, not paid links.

## Language for Humberto when telling Sebastian

> Quick heads-up before we ask anyone for Google reviews: CRPO and the
> psychologists’ College both treat online reviews as testimonials, so
> registrants can’t request them or link to them. People can still leave
> reviews on their own — we just can’t ask. I’m redirecting that effort to
> directories, the professional registers, and referral partners instead,
> which Google also counts. One more thing: if you posted a review of the
> practice yourself, it’s safest to remove it.
