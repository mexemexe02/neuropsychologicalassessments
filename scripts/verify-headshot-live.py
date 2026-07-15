import re
import urllib.request

page = "https://mexemexe02.github.io/neuropsychologicalassessments/clinicians/"
html = urllib.request.urlopen(page).read().decode("utf-8", "replace")
match = re.search(r'src="([^"]*sebastian[^"]*)"', html)
print("page", page)
print("src", match.group(1) if match else None)
if not match:
    raise SystemExit(1)
src = match.group(1)
url = "https://mexemexe02.github.io" + src if src.startswith("/") else src
print("url", url)
with urllib.request.urlopen(url) as response:
    print(
        "img",
        response.status,
        response.headers.get("Content-Type"),
        response.headers.get("Content-Length"),
    )
    if response.status != 200:
        raise SystemExit(1)
print("PASS")
