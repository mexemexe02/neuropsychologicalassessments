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

# Tight box: icon only — right edge stops before CETSM letter stems.
BOX = (1020, 680, 1495, 1285)

im = Image.open(SRC).convert("RGB").crop(BOX)
rgba = im.convert("RGBA")
pixels = np.array(rgba)
near_white = (
    (pixels[:, :, 0] > 245)
    & (pixels[:, :, 1] > 245)
    & (pixels[:, :, 2] > 245)
)
pixels[near_white, 3] = 0

# Drop near-black letter remnants that are not orange brand ink.
dark = (
    (pixels[:, :, 0] < 90)
    & (pixels[:, :, 1] < 70)
    & (pixels[:, :, 2] < 60)
    & (pixels[:, :, 3] > 0)
)
orange = (
    (pixels[:, :, 0] > 140)
    & (pixels[:, :, 0] > pixels[:, :, 2] + 30)
    & (pixels[:, :, 3] > 0)
)
# Keep dark only where it sits inside/near orange (tree trunk cutouts are white, not black).
# Letter stems are dark on white — clear them.
pixels[dark, 3] = 0

out = Image.fromarray(pixels)
alpha = pixels[:, :, 3]
ys, xs = np.where(alpha > 0)
pad = 8
x0, y0 = max(0, int(xs.min()) - pad), max(0, int(ys.min()) - pad)
x1 = min(out.width, int(xs.max()) + pad + 1)
y1 = min(out.height, int(ys.max()) + pad + 1)
trimmed = out.crop((x0, y0, x1, y1))

# Trim right columns that lack orange (stray letter stems).
arr = np.array(trimmed)
orange = (
    (arr[:, :, 0] > 140)
    & (arr[:, :, 0] > arr[:, :, 2] + 30)
    & (arr[:, :, 3] > 10)
)
col_counts = orange.sum(axis=0)
right = len(col_counts) - 1
while right > 0 and col_counts[right] < 8:
    right -= 1
right = min(trimmed.width, right + 4)
clean = trimmed.crop((0, 0, right, trimmed.height))

for path in OUTS:
    path.parent.mkdir(parents=True, exist_ok=True)
    clean.save(path)
    print("wrote", path, clean.size)
