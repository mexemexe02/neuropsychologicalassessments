from pathlib import Path
import re
import urllib.request

html = Path("out/clinicians/index.html").read_text(encoding="utf-8")
src = re.search(r'src="([^"]*sebastian[^"]*)"', html).group(1)
print("built_src", src)
assert src.startswith("/neuropsychologicalassessments/_next/static/media/")
local = src.replace("/neuropsychologicalassessments", "", 1)
req = urllib.request.urlopen("http://127.0.0.1:4173" + local)
print("local_status", req.status, "bytes", req.headers.get("Content-Length"), "type", req.headers.get("Content-Type"))
assert req.status == 200
print("PASS")
