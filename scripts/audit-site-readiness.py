"""Audit site against Sebastian emails + content brief (Jul 2026)."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def ok(label: str, cond: bool) -> bool:
    print(("PASS" if cond else "FAIL"), "-", label)
    return cond


def main() -> int:
    fails = 0
    site = read("src/lib/site.ts")
    logo = read("src/components/logo.tsx")
    clin = read("src/app/clinicians/page.tsx")
    header = read("src/components/site-header.tsx")
    psych = read("src/app/psychotherapy/page.tsx")
    home = read("src/app/page.tsx")
    form = read("src/components/consultation-form.tsx")
    i18n = read("src/lib/i18n.tsx")
    content = read("src/lib/content.ts")
    footer = read("src/components/site-footer.tsx")
    notices = read("src/lib/demo-notices.ts")
    resources = read("src/app/resources/page.tsx")
    education = read("src/app/education/page.tsx")
    contact = read("src/app/contact/page.tsx")

    checks = [
        (
            "Brand = Centre for Neuropsychology and Psychotherapy",
            "Centre for Neuropsychology and Psychotherapy" in site,
        ),
        ("Address 34 County Road Tiny", "34 County Road" in site and "Tiny" in site),
        ("Phone present", "705-321-8146" in site),
        (
            "Nav ids in order",
            [x for x in ("home", "assessments", "clinicians", "psychotherapy", "education", "resources") if f'id: "{x}"' in site]
            == ["home", "assessments", "clinicians", "psychotherapy", "education", "resources"],
        ),
        ("Logo uses brain-tree asset", "logo-brain-tree" in logo and "TEMP wordmark" not in logo),
        ("Brain-tree PNG exists", (ROOT / "src/assets/logo-brain-tree.png").exists()),
        ("Full CETSM logo archived in public", (ROOT / "public/images/logo-cetsm.jpg").exists()),
        ("Sauriol headshot wired", "dr-sylvie-sauriol-headshot" in clin),
        ("No Sauriol PortraitPlaceholder", "PortraitPlaceholder" not in clin),
        ("Sauriol EN/FR services note", "English and French" in clin and "anglais et en français" in clin),
        ("Sebastian headshot wired", "sebastian-jose-headshot" in clin),
        ("LanguageToggle in header", "LanguageToggle" in header),
        ("i18n en+fr dictionaries", 'en:' in i18n and 'fr:' in i18n),
        ("Header CTA uses consultation string", "consultationCta" in header),
        ("Consultation not a nav id", 'id: "consultation"' not in site),
        ("Men sexual abuse section id", 'id="men-sexual-abuse"' in psych),
        (
            "Men sexual abuse title exact",
            "Psychotherapy and counselling for men with a history of sexual abuse" in content,
        ),
        ("Home mentions sexual abuse counselling", "sexual abuse" in home.lower()),
        ("Form success honest", "Request not sent yet" in form),
        ("Option A / preview booking notice", "aren't sent yet" in notices),
        ("Footer uses address fields", "addressLine1" in footer),
        ("Education page present", bool(education)),
        ("Resources page present", bool(resources)),
        ("Contact page present", bool(contact)),
        ("Home tagline", "Thoughtful care. Clear next steps." in home or "Thoughtful care" in site),
    ]

    print("=== REQUIRED (Sebastian confirmed) ===")
    for label, cond in checks:
        if not ok(label, cond):
            fails += 1

    print("\n=== INTENTIONAL GAPS (waiting on client / launch) ===")
    intentional = [
        (
            "Education article bodies still placeholders",
            "educationArticlePlaceholders" in content or "forthcoming" in education.lower() or "title" in education.lower(),
        ),
        (
            "Resource org URLs not fully linked yet",
            "Only reputable" in resources or "aren't published" in notices,
        ),
        (
            "Booking does not transmit (Option A preview)",
            "Request not sent yet" in form,
        ),
        (
            "Portraits demo notice text still in demo-notices (may be stale)",
            "Professional photos aren’t uploaded yet" in notices,
        ),
    ]
    for label, cond in intentional:
        print(("YES" if cond else "NO "), "-", label)

    # Stale notice risk
    print("\n=== STALE / CLEANUP RISKS ===")
    if "Professional photos aren’t uploaded yet" in notices:
        print("WARN - demoNotices.portraits still says photos aren't uploaded (both headshots now live)")
    if "PortraitPlaceholder" in clin:
        print("WARN - clinicians still import PortraitPlaceholder")
    else:
        print("PASS - clinicians page no longer uses PortraitPlaceholder")

    # Nav labels from site.ts
    import re

    labels = re.findall(r'label: "([^"]+)"', site)
    print("\nnav labels:", labels)

    return fails


if __name__ == "__main__":
    raise SystemExit(main())
