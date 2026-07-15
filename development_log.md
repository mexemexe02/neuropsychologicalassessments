# Development log

## 2026-07-13 — Initial premium website preview

### Client request

Sebastian requested a simple, professional, easy-to-navigate website for a new
neuropsychological assessment and psychotherapy practice. The website should
serve individuals ages 4–90 and include assessments, psychotherapy, clinician
profiles, educational resources, contact details, and free 15-minute
consultation booking.

The client referenced Abilities Rehabilitation and Rooted In Counselling for
structure only. He also said he likes the clarity and finish of Apple websites.
No rehabilitation content should appear.

### Decisions

- Build a fully custom site; do not use Wix, WordPress, or Squarespace.
- Use Next.js App Router with static export for portable Coolify hosting.
- Create an original warm, clinical, Apple-inspired visual system.
- Use the client’s email as the source of truth; do not copy reference content.
- Keep booking platform-neutral while Sebastian considers Jane App versus a
  simpler booking system.
- Build a non-transmitting preview form and mark the future integration point.
- Do not invent a clinic address, testimonials, credentials, or service claims.
- Use clinician monograms until approved professional photographs are supplied.
- Treat a simple content editor as optional future work, not part of v1.

### Implementation

- Added global header, mobile menu, footer, wordmark, and restrained reveal motion.
- Added Home, Assessments, Psychotherapy, Clinicians, Resources, Contact, Privacy,
  and 404 experiences.
- Added detailed service content based on the client’s email.
- Added a polished consultation preview with validation and a success state.
- Added responsive layouts, keyboard focus styles, reduced-motion support, SEO
  metadata, Open Graph artwork, sitemap, and robots metadata.
- Added deployment and client-decision notes to README.

### Temporary items

- Monogram clinician portraits must be replaced with approved headshots.
- Booking must be connected after the client selects Jane App or Schedulo.
- Privacy copy requires client and qualified compliance review.
- Location and service area are still unknown and were intentionally omitted.

### Verification

- ESLint passed.
- Next.js production build and TypeScript checks passed.
- All public routes exported successfully to `out/`.
- Playwright tested every route at desktop and mobile widths.
- Mobile navigation, consultation preview, 404 page, console errors, and
  horizontal overflow were covered: 19 passed, 1 intentionally skipped.
- Representative Home, Clinicians, and Contact screenshots were visually
  reviewed at desktop and mobile sizes, then removed from the repository.

## 2026-07-13 — Consultation calendar upgrade

### Decision

The first preview used a simple contact form. Humberto requested a more complete
free-consultation experience and pointed to Schedulo as reusable prior work.
Rather than copying Schedulo’s tenant, authentication, and API dependencies, the
site now reuses its proven 1:1 sequence: service, meeting method, date, time,
contact details, and confirmation.

### Changes

- Replaced the basic form with a three-step, platform-neutral booking calendar.
- Added service and phone/video selections, five upcoming weekdays, time slots,
  contact details, booking summary, back controls, and confirmation state.
- Added a clear adapter comment for a future Jane App or Schedulo connection.
- Changed the consultation hero from dark to light to eliminate low-contrast
  dark-background concerns.
- Added dedicated phone, tablet, and desktop booking styles.
- Extended Playwright coverage through the complete booking flow on desktop,
  tablet, and mobile.

### Verification

- Consultation page screenshots were reviewed at desktop and mobile widths.
- Text, controls, booking cards, and the hero use light surfaces with dark text.
- Lint, static production build, and 28 responsive browser tests passed
  (2 device-specific checks were intentionally skipped).

## 2026-07-14 — Brand = domain name

### Decision

Sebastian never named “Dr. Sauriol Associates” in his email. That label was
inferred from the contact address. Humberto chose to brand the site as
**Neuropsychological Assessments** to match
`www.neuropsychologicalassessments.com`.

Sebastian’s follow-up email liked the preview, chose Option 2 (self-manage
later + Humberto for bugs/support), asked for price and timeline, and said
photos/logo/address/leaflets are coming.

### Changes

- Renamed site brand, logo wordmark, titles, OG image, footer, and README.
- Kept contact email as provided (`drsauriolassociates@…`).
- Tightened home copy to his brief: ages 4–90, assessment process items,
  listed concern areas, free 15-minute consultation.
- Assessments page now lists his exact process items (interviews, testing,
  record reviews, questionnaires, recommendations, reports).
- Psychotherapy hero notes adult focus; resources copy less “placeholder”.

## 2026-07-14 — Fix dark-hero nav contrast

### Problem

Psychotherapy page uses a dark teal hero, but nav stayed dark ink text.
`next.config` has `trailingSlash: true`, so pathname is `/psychotherapy/` and
the `on-dark` check (`=== "/psychotherapy"`) never matched.

### Fix

- Normalize pathname before comparing dark-hero routes.
- Set nav link color explicitly on `.on-dark` for reliable contrast.

## 2026-07-14 — Site bug audit

### Fixed

- **404 dark hero nav** — 404 hero switched to light so dark-ink nav stays
  readable (same contrast class of bug as psychotherapy).
- **Mobile menu + scrolled** — ivory frosted bar + white text contrast bug;
  menu-open now clears the frosted background; menu z-index corrected.
- **Booking dates** — stopped using `toISOString()` (UTC day shift); use local
  calendar date + noon cursor for DST safety.
- **Sitemap** — URLs now include trailing slashes to match `trailingSlash: true`.
- Start-again button now has `type="button"`.

## 2026-07-14 — Live preview + setup popups

### Goal

Give Sebastian a public demo link, and surface clear popups wherever a feature
still needs live setup (so unfinished pieces never look “broken”).

### Changes

- Demo notice modal (call/email + continue browsing).
- Booking submit opens “Online booking isn’t connected yet”.
- Resource cards open “Resource guides aren’t published yet”.
- Clinician portrait placeholders open photo-forthcoming notice.
- GitHub Pages workflow (`GITHUB_PAGES=1` basePath).
- Deploy target: `https://mexemexe02.github.io/neuropsychologicalassessments/`

### Deploy notes

- GitHub Pages is fine for this **static export** preview (no Node server needed).
- First Actions run failed on `npm ci` lock sync; switched to `npm install`.
- Second run built OK but deploy blocked until `master` was allowed on the
  `github-pages` environment (default only had `main`).
- Coolify (or custom domain on Pages) comes later for production / booking API.

## 2026-07-15 — Sebastian content package rewrite

### Source

- `sebastian-content-brief.md`
- `client-content/sebastian-content-doc.odt`
- Headshot: `public/images/sebastian-jose-headshot.jpg`

### Changes

- Brand → **Centre for Neuropsychological Assessments, Psychotherapy and Counselling**
- Beige background + French beige accents/buttons
- Nav: Home | Assessments | Clinicians | Psychotherapy | Education | Resources
- Header CTA only for Free 15-Minute Consultation
- Replaced numerical ages with children / adolescents / adults / older adults
- Rewrote Home, Assessments, Psychotherapy, Resources from his copy
- New Education page (topic placeholders; programs later)
- Clinicians: Sebastian photo live; Dr. Sauriol monogram until hers arrives
- Footer + address: 34 County Road, Tiny, Ontario L0L 2J0
- Booking → Option A consult request form (no calendar)

### Known / not bugs (demo limits)

- Booking is preview-only (no send/store) — intentional until Jane/backend.
- Privacy page is marked as client-review draft.
- Clinician photos / logo / address still placeholders awaiting Sebastian.
- No live address, fees, or registration numbers yet.

## 2026-07-15 — Mobile layout audit + fixes

### Summary
Audited phone layout after the content rewrite; fixed horizontal overflow and a
dev-only hydration failure that made the hamburger/menu look dead.

### Findings
- Long brand name / grids / booking panel overflowed on narrow phones → CSS
  min-width + word-break + booking width fixes in responsive/navigation/booking.
- Contact + privacy long email links still painted past the viewport edge →
  wrap with `minmax(0,1fr)` + `overflow-wrap: anywhere`.
- Local Playwright against `127.0.0.1` showed a “dead” menu/form because Next 16
  blocked cross-origin HMR (`allowedDevOrigins`); not a production bug.
- Stale `next dev` instances on port 3001 made diagnosis noisy.

### Fixes
- `next.config.ts` — `allowedDevOrigins: ["127.0.0.1", "localhost"]`
- Contact/privacy email wrapping in `forms.css`
- Prior mobile CSS already in place (header brand, grids, booking, h1/h2, menu)

### Verification
- iPhone 13 overflow sweep: all 8 routes `overflow: false`, no offenders
- Mobile Playwright: 11/11 passed (menu, form preview, overflow, 404)

### Still pending (content, not layout)
- Logo, Dr. Sauriol photo, live booking backend, Privacy legal review
- Deploy of these mobile fixes to GitHub Pages when Humberto asks to push

## 2026-07-15 — Sebastian headshot 404 on GitHub Pages

### Cause
File was deployed and reachable at
`/neuropsychologicalassessments/images/sebastian-jose-headshot.jpg`, but
`<Image src="/images/...">` resolved to the repo-root URL (missing basePath).
Coolify not required — static Pages is still fine.

### Fix
- First attempt: `assetPath()` — still not enough until deploy
- Final: static-import `@/assets/sebastian-jose-headshot.jpg` with `fill`
  so Pages basePath/assetPrefix apply automatically
- Deployed commit `a24388a`; live img returns 200 JPEG under
  `/neuropsychologicalassessments/_next/static/media/...`

## 2026-07-15 — Copy fidelity audit vs Sebastian ODT

### Source of truth
`client-content/sebastian-content-doc.odt` (extracted txt for diffs) + brief.

### Gaps found
- Assessments hero omitted the purpose paragraph from the intro block (only
  appeared lower / easy to miss); neurodivergence + life-stage sections were
  abbreviated; invented marketing H2s; missing site-wide educational note.
- Psychotherapy: invented concern-card copy; truncated confidentiality;
  missing full concern list + hero buttons.
- Education/Resources: truncated topic texts; paraphrased prep lists; invented
  CTAs / section blurbs.
- Clinicians: invented collaborative H2; missing third collab paragraph;
  focus list drifted; EN/FR added outside ODT.

### Fix
Restored Sebastian’s wording page-by-page. Layout/chrome only; no invented
clinical marketing lines.

## 2026-07-15 — Pricing email draft for Sebastian

### Summary
Drafted status + pricing email ($750 build + $45/mo care). Not sent — awaiting Humberto approval.

### Email / files check
- No Gmail inbox access from this agent session
- Downloads: no new logo or Dr Sauriol photo since July 15 AM package

### Draft
- `drafts/email-sebastian-pricing-and-status.md`

## 2026-07-15 — Phone logo / name 3×

### Summary
Header brand was still too small on phone. Stacked logo + name so a true
~3× (mark 7.35rem, strong 2.76rem, small 1.56rem) fits without horizontal overflow.

### Files Changed
- `src/styles/responsive.css` — stacked phone brand lockup + hero/menu top padding

## 2026-07-15 — Force real phone layout on S24 desktop-mode

### Summary
S24 was showing full desktop width (not shrunk mobile). Most phone CSS only
used max-width 640/960; Android “Desktop site” reports ~980px so grids stayed
desktop. Extended 640/960 breakpoints with coarse-pointer + max-width 1200px.

### Files Changed
- `src/styles/responsive.css`
- `src/styles/booking-responsive.css`
