"""Check live Pages HTML for key strings and image HTTP status."""

from pathlib import Path
import os
import re
import urllib.request

TEMP = Path(os.environ["TEMP"])
BASE = "https://mexemexe02.github.io/neuropsychologicalassessments"

pages = {
    "HOME": TEMP / "npa-home.html",
    "CLIN": TEMP / "npa-clin.html",
    "PSYCH": TEMP / "npa-psych.html",
}

for name, path in pages.items():
    if not path.exists():
        print("MISSING local cache", name)
        continue
    t = path.read_text(encoding="utf-8", errors="ignore")
    print(f"\n=== {name} ({len(t)} bytes) ===")
    needles = [
        "lang-toggle",
        "English",
        "Fran",
        "logo-brain-tree",
        "Centre for Neuropsychology",
        "Free 15",
        "34 County",
    ]
    if name == "HOME":
        needles += ["sexual abuse", "Learn About Psychotherapy", "men-sexual-abuse"]
    if name == "CLIN":
        needles += ["sauriol", "sebastian", "English and French"]
    if name == "PSYCH":
        needles += ["men-sexual-abuse", "Specialized treatment"]
    for n in needles:
        print(("HIT" if n.lower() in t.lower() else "MISS"), n)

# Image refs from home+clin
combined = "".join(p.read_text(encoding="utf-8", errors="ignore") for p in pages.values() if p.exists())
refs = set(re.findall(r'(?:src|href)="([^"]+\.(?:png|jpg|jpeg|webp|svg))"', combined))
refs |= set("/" + m if not m.startswith("/") else m for m in re.findall(r'(_next/static/media/[^"\s]+\.(?:png|jpg|jpeg|webp))', combined))
print(f"\n=== IMAGE HTTP ({len(refs)} refs) ===")
for u in sorted(refs):
    full = u if u.startswith("http") else BASE + (u if u.startswith("/") else "/" + u)
    try:
        with urllib.request.urlopen(full) as r:
            print(r.status, full[-90:])
    except Exception as e:
        print("ERR", full[-90:], type(e).__name__)
