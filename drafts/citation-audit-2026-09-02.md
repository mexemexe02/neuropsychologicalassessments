# Citation audit — 2026-09-02

Read-only audit. No accounts created, no forms submitted, no listings edited, no repo files changed. Methods: Exa web search/fetch, WebSearch/WebFetch (DuckDuckGo HTML, Bing, Canada411, YellowPages, Yelp), and Firecrawl (JS-rendered Google Maps, Bing, Bing Maps, CPBAO register page).

## Summary

- **Google Business Profile is live and fully matches the locked NAP** (name, 34 County Rd 6 S, L0L 2J0, 705-321-8146, website, Mon–Sat 8–6 / Sun closed, owner Post dated Aug 14 2026). Only **one** Maps listing appeared in every Maps query, including a search for the old name; no service-area duplicate was visible from the public side. 0 reviews.
- **Biggest mismatch: Sebastian's Psychology Today profile.** Phone **(705) 996-5298**, primary location **Mississauga, ON L5H**, "Available online only". It does list "Center for Neuropsychology and Psychotherapy — Tiny, ON L0L" as a second practice and has a "My website" link (destination not verifiable from fetched text). 1 endorsement, "Verified".
- **Dr. Sauriol has almost no third-party footprint under the practice name.** No Psychology Today, OPA "Find a Psychologist", YellowPages, Canada411, Yelp, Bing Places or Apple Maps result found. She **is still listed as a staff neuropsychologist on Rockwood Psychotherapy & Consulting's site** (Midland, 705-433-4733) — a potential confusion signal, not a NAP error for the practice itself.
- **Old name "Centre for Neuropsychological Assessments" appears nowhere online.** The only name collision is a **New Jersey practice with the identical name** (Center for Neuropsychology and Psychotherapy, LLC — neuropsychandtherapy.com, Closter/Wyckoff/Mahwah NJ), which dominates web search for the exact name.
- **Regulator registers (CPBAO, CRPO) could not be read programmatically** (Cloudflare / interactive-only search). Must be checked manually; URLs below.
- **Top 5 fixes (priority):** (1) Sebastian updates Psychology Today phone → 705-321-8146 and makes Tiny the primary location (or at least confirms the "My website" link points to neuropsychologicalassessments.com); (2) verify CPBAO and CRPO register practice-site entries show 34 County Rd 6 South / 705-321-8146; (3) ask Dr. Sauriol whether Rockwood should keep listing her, or add a link to her own practice; (4) create a Bing Places listing (only a Markham clinic shows for the name today); (5) add a YellowPages/Canada411 free listing so the practice appears in "Psychologists in Tiny ON" results (currently 0 for "Neuropsychology" in Tiny).

## Findings table

| Source | Found? | URL | Name shown | Address shown | Phone shown | Website shown | Matches locked NAP? | Notes |
|---|---|---|---|---|---|---|---|---|
| Google Maps / GBP | Yes | https://www.google.com/maps/place/Center+for+Neuropsychology+and+Psychotherapy/data=!4m7!3m6!1s0x4d2ad7c176fbb379:0x6e4fd0ff21c5f50d!8m2!3d44.7045102!4d-79.9700577!16s%2Fg%2F11zh36t5d4 | Center for Neuropsychology and Psychotherapy | 34 County Rd 6 S, Tiny, ON L0L 2J0 | +1 705-321-8146 | neuropsychologicalassessments.com | **Yes** | Category Psychologist; hours Mon–Sat 8 am–6 pm, Sun closed; Aug 14 2026 owner post → /contact/; owner photo + Street View; "On-site services"; 0 reviews; only one listing found in 4 Maps queries |
| Google web search | Blocked | google.com/search returned CAPTCHA to fetcher | — | — | — | — | n/a | DuckDuckGo shows the live site as #1 for exact name; NJ namesake #2 |
| Bing web / Bing Places | No (practice) | https://www.bing.com/search?q=%22Center+for+Neuropsychology+and+Psychotherapy%22+Tiny+ON | Local pack shows *Centre for Neuropsychology and Emotional Wellness* (Markham, 905-686-8110) | 3 Centre St, Markham | — | cnew.ca | **No listing** | neuropsychologicalassessments.com appears as organic result #2 only; no Bing Places entity for the practice |
| Bing Maps | No | https://www.bing.com/maps?q=Center+for+Neuropsychology+and+Psychotherapy+Tiny+Ontario | — | (map centred on Markham) | — | — | Not found | Rendered page showed no matching pin |
| Apple Maps | No | — | — | — | — | — | Not found | Only Tiny township place page surfaced; no web-indexed business card |
| Psychology Today — Sebastian Jose | Yes | https://www.psychologytoday.com/ca/therapists/sebastian-jose-mississauga-on/1678004 | Sebastian Jose, RP(Q) | **Mississauga, ON L5H** (primary, "online only"); 2nd: Center for Neuropsychology and Psychotherapy, Tiny, ON L0L | **(705) 996-5298** | "My website" link present (target not verifiable) | **No** — phone and primary city mismatch | Verified; CRPO reg. shown as 7577; $100/session; "Available online only"; postal shown only as L0L |
| Psychology Today — Sylvie Sauriol | No | — | — | — | — | — | Not found | Searched name + site: filter; no profile |
| CPBAO public register — Sauriol | Not readable | https://members.cpbao.ca/public_register/new | — | — | — | — | Unverified | Search form is POST/Cloudflare-gated; manual check required. Her name appears in CPBAO HeadLines Apr 2021 as newly registered "Psychologist – Autonomous Practice" |
| CRPO public register — Sebastian Jose | Not readable | https://my.crpo.ca/publicregister | — | — | — | — | Unverified | Register app timed out for fetcher; manual check required (reg. no. 7577 per PT) |
| OPA Find a Psychologist | No | https://www.psych.on.ca/Public/Find-a-Psychologist | — | — | — | — | Not found | Exa hit psyID=4157 was a false positive (Toronto Brain Health) |
| Canada411 | No | https://www.canada411.ca/search/?stype=si&what=Neuropsychology+Psychotherapy&where=Tiny+ON | — | — | Reverse lookup: 705-321-8146 = TELUS Mobility cell, Barrie, unlisted | — | Not found | No business listing under name or phone |
| YellowPages.ca | No | https://www.yellowpages.ca/search/si/1/Psychologists/Tiny+ON | — | — | — | — | Not found | "Neuropsychology" in Tiny = 0 results; "Sauriol" in ON = 3 unrelated; Parnell Psychology is the only Tiny psychologist listed |
| Yelp.ca | No | https://www.yelp.ca/search?find_desc=Center+for+Neuropsychology+and+Psychotherapy&find_loc=Tiny%2C+ON | — | — | — | — | Not found | Empty result page |
| Facebook / Instagram | No | — | — | — | — | — | Not found | No page found for practice or clinicians via search (not logged in) |
| LinkedIn | Partial | https://www.linkedin.com/in/sylvie-sauriol-5576b7168 | Sylvie Sauriol — "Clinique neuropsychologie, Centre d'évaluation et d'expertise en neuropsychologie" | Greater Calgary area | — | — | **No** (stale) | Likely her profile (neuropsychology) but location/employer outdated. Company page for the exact name belongs to the **NJ** practice. No LinkedIn found for Sebastian as psychotherapist |
| Rockwood Psychotherapy & Consulting (third-party staff page) | Yes | http://rockwoodpsyc.com/about.html | "Dr. Sylvie Sauriol, DpS, C Psych — Neuropsychologist" | 518 Dominion Ave, Midland L4R 1P8 | 705-433-4733 (Rockwood's) | rockwoodpsyc.com | n/a (different business) | Google Maps lists Rockwood at 705-245-5426. Confusion risk for "Sauriol neuropsychologist" searches |
| Corporations Canada mirror (federalcorporation.ca / opengovca) | Yes | https://federalcorporation.ca/corporation/16202861 | Illimitée Caritas Psychological Services Inc. (director Sebastian Jose) | 967 Wright Drive, Midland ON L4R 0E4 | — | — | n/a (separate corp) | Inc. 2024-07-11; not a practice citation, but a second address tied to Sebastian |
| Sunshine List mirrors | Yes | https://www.sunshineliststats.com/ontario/employers/waypoint-centre-for-mental-health-care/dr-sylvie-sauriol/ | Dr. Sylvie Sauriol — Research Psychologist, Waypoint (2020–22); Sebastian Jose — Clinical Multifaith Chaplain, Waypoint (2025) | — | — | — | n/a | Public salary data only; no NAP |
| GitHub (public repo) | Yes | https://github.com/mexemexe02/neuropsychologicalassessments | README lists clinicians + 705-321-8146 | — | 705-321-8146 | — | Yes | Indexed by DuckDuckGo; harmless but note the repo is public |
| 411.ca, Cylex, ProfileCanada, Hotfrog, OpenCorporates, Theravive, TherapyTribe, Lumino Health | No | — | — | — | — | — | Not found | No hits for practice name, old name, either clinician, phone or domain |

## Google Maps / Place ID details

- Listing name: **Center for Neuropsychology and Psychotherapy** (category Psychologist)
- Hex feature ID: `0x4d2ad7c176fbb379:0x6e4fd0ff21c5f50d`
- **CID (decimal): 7948801661534074125** → https://maps.google.com/?cid=7948801661534074125
- Knowledge Graph ID: `/g/11zh36t5d4`
- Coordinates: 44.7045102, -79.9700577; Plus code P23H+RX Tiny
- Canonical share URL: https://www.google.com/maps/place/Center+for+Neuropsychology+and+Psychotherapy/@44.7045102,-79.9700577,17z/data=!3m1!4b1!4m6!3m5!1s0x4d2ad7c176fbb379:0x6e4fd0ff21c5f50d!8m2!3d44.7045102!4d-79.9700577!16s%2Fg%2F11zh36t5d4
- Places API `place_id` (ChIJ… string): **not found** in any public result; a `search.google.com/local/writereview?placeid=` link was not surfaced. Humberto can copy it from the GBP dashboard "Ask for reviews" button.
- Duplicates: searches for the exact name, the old name, and "Sylvie Sauriol psychologist Ontario" each returned only this one listing. A service-area duplicate was **not visible** publicly; the earlier merge report can be considered resolved unless the GBP dashboard still shows it.

## Suggested owner actions

1. **Sebastian — Psychology Today:** log in at https://member.psychologytoday.com/ and change phone to 705-321-8146, set Tiny (L0L 2J0) as primary location, and confirm the website link is https://neuropsychologicalassessments.com/. Public profile: https://www.psychologytoday.com/ca/therapists/sebastian-jose-mississauga-on/1678004
2. **Sebastian — CRPO register:** search yourself at https://my.crpo.ca/publicregister and confirm the practice site reads "Center for Neuropsychology and Psychotherapy, 34 County Rd 6 South, Tiny ON L0L 2J0, 705-321-8146". Update via the registrant portal within 30 days of any change (CRPO rule).
3. **Dr. Sauriol — CPBAO register:** search at https://members.cpbao.ca/public_register/new (last name Sauriol) and confirm the business address/phone match the locked NAP; update via the member portal if not.
4. **Dr. Sauriol — Rockwood listing:** decide with Rockwood (http://rockwoodpsyc.com/about.html) whether the staff bio should stay; if it stays, ask them to add a link to neuropsychologicalassessments.com.
5. **Humberto — Bing Places:** create/claim the listing at https://www.bingplaces.com/ (can import from the Google Business Profile) so the Markham "Centre for Neuropsychology and Emotional Wellness" stops occupying the Bing local pack for the practice name.
6. **Humberto — YellowPages / Canada411 free listing:** https://www.yellowpages.ca/ ("Add your business") so the practice shows under "Psychologists in Tiny ON" (currently only Parnell Psychology).
7. ~~GBP review link for a review-ask script~~ — **dropped.** Both clinicians are barred from soliciting reviews (see `drafts/reviews-and-testimonials-compliance-2026-09-02.md`). Use https://maps.google.com/?cid=7948801661534074125 only as the Maps/directions link (now also `hasMap` in the site's MedicalClinic schema).
8. **Optional — LinkedIn:** Dr. Sauriol's profile (https://www.linkedin.com/in/sylvie-sauriol-5576b7168) shows a Calgary-area location and a Quebec clinic name; updating it to the practice would remove a stale citation.

## Follow-through (Humberto, 2026-09-02)

- Added verified Maps link as `hasMap` on the MedicalClinic schema and
  Sebastian's Psychology Today URL as `sameAs` on his Person node. Geo
  coordinates still left out of schema on purpose (earlier decision: owner
  confirms the pin first; the GBP pin at 44.7045102, -79.9700577 can be used
  once Sebastian says it is on the right building).
- Everything in "Suggested owner actions" needs a login Humberto or the
  clinicians hold — nothing here was submitted automatically.

## Sources checked but nothing found

- Psychology Today (Sylvie Sauriol), OPA Find a Psychologist, Canada411 (name + reverse phone), YellowPages.ca (name, "Neuropsychology" in Tiny, "Sauriol" in ON), Yelp.ca, Bing Places, Bing Maps, Apple Maps
- Facebook, Instagram (no page for practice or clinicians; not logged in)
- 411.ca, Cylex, ProfileCanada, Hotfrog, OpenCorporates, Theravive, TherapyTribe, Lumino Health / Sun Life
- Any page using the old name "Centre for Neuropsychological Assessments" or the spelling "Centre" for this practice (none exist)
- Any page showing a different postal code or street for the practice (none; only Sebastian's PT profile shows a different city and phone)
