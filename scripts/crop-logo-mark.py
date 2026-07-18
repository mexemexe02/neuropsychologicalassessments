"""Crop the brain-tree mark from the full CETSM logo (icon only, no text)."""

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "logo-cetsm.jpg"
OUTS = [
    ROOT / "src" / "assets" / "logo-brain-tree.png",
    ROOT / "public" / "images" / "logo-brain-tree.png",
]

# Measured on the July 2026 full logo: icon left of CETSM wordmark, above swatches.
BOX = (1020, 680, 1540, 1285)

im = Image.open(SRC).convert("RGB").crop(BOX)
rgba = im.convert("RGBA")
pixels = np.array(rgba)
near_white = (
    (pixels[:, :, 0] > 245)
    & (pixels[:, :, 1] > 245)
    & (pixels[:, :, 2] > 245)
)
pixels[near_white, 3] = 0
out = Image.fromarray(pixels)

alpha = pixels[:, :, 3]
ys, xs = np.where(alpha > 0)
pad = 12
x0, y0 = max(0, int(xs.min()) - pad), max(0, int(ys.min()) - pad)
x1 = min(out.width, int(xs.max()) + pad + 1)
y1 = min(out.height, int(ys.max()) + pad + 1)
trimmed = out.crop((x0, y0, x1, y1))

for path in OUTS:
    path.parent.mkdir(parents=True, exist_ok=True)
    trimmed.save(path)
    print("wrote", path, trimmed.size)
