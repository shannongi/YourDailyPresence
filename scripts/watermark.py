#!/usr/bin/env python3
"""
Bakes a semi-transparent watermark (the site's lotus mark + URL) directly
into a photo's pixels, so the mark survives screenshots/downloads/reuse —
unlike a CSS overlay, which only exists on the live page and leaves the
original file clean at its source URL.

Usage:
    python3 scripts/watermark.py input.jpg assets/photography/output.jpg
    python3 scripts/watermark.py input.jpg output.jpg --opacity 0.5 --scale 0.09

Run once per photo before adding it to data.js / the admin Images field.
"""

import argparse
import os
from PIL import Image, ImageDraw, ImageFont, ImageOps

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO_PATH = os.path.join(REPO_ROOT, "assets", "watermark-mark.png")
FONT_CANDIDATES = [
    os.path.join(REPO_ROOT, ".claude", "skills", "ui-styling", "canvas-fonts", "WorkSans-Regular.ttf"),
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]


def find_font(size):
    for path in FONT_CANDIDATES:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def add_watermark(input_path, output_path, opacity=0.55, scale=0.10, margin_ratio=0.035,
                   label="yourdailypresence.com", max_dimension=1600):
    # exif_transpose bakes in the camera's rotation flag — without this,
    # portrait phone photos (stored as landscape pixels + an EXIF "rotate"
    # tag) come out sideways, since Pillow doesn't apply that tag on its own.
    base = ImageOps.exif_transpose(Image.open(input_path)).convert("RGBA")

    if max_dimension and max(base.size) > max_dimension:
        ratio = max_dimension / max(base.size)
        new_size = (round(base.width * ratio), round(base.height * ratio))
        base = base.resize(new_size, Image.LANCZOS)

    w, h = base.size
    overlay = Image.new("RGBA", base.size, (0, 0, 0, 0))

    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_w = max(28, int(min(w, h) * scale))
    logo_h = int(logo_w * logo.height / logo.width)
    logo = logo.resize((logo_w, logo_h), Image.LANCZOS)

    margin = int(min(w, h) * margin_ratio)
    logo_x = w - logo_w - margin
    logo_y = h - logo_h - margin

    # Measure the text first so the backing plaque can size to fit both
    # the logo and the label before either gets drawn.
    font_size = max(11, int(logo_w * 0.24))
    font = find_font(font_size) if label else None
    text_w = text_h = 0
    if label:
        measure = ImageDraw.Draw(overlay)
        bbox = measure.textbbox((0, 0), label, font=font)
        text_w, text_h = bbox[2] - bbox[0], bbox[3] - bbox[1]

    # A gradient-filled mark can all but disappear against a bright, busy
    # photo (frost, snow, sky) no matter how opaque it is — there's just
    # not enough tonal contrast to grab onto. A dark plaque behind the
    # whole cluster guarantees legibility regardless of what's in the shot.
    pad = max(6, int(logo_w * 0.12))
    plaque_w = max(logo_w, text_w) + pad * 2
    plaque_h = logo_h + (text_h + 8 if label else 0) + pad * 2
    plaque_x = w - margin - plaque_w
    plaque_y = h - margin - plaque_h
    draw = ImageDraw.Draw(overlay)
    draw.rounded_rectangle(
        [plaque_x, plaque_y, plaque_x + plaque_w, plaque_y + plaque_h],
        radius=max(4, pad // 2),
        fill=(15, 10, 6, int(120 * opacity + 40)),
    )

    logo_x = w - margin - pad - logo_w
    logo_y = plaque_y + pad + (text_h + 8 if label else 0)
    logo_alpha = logo.split()[3].point(lambda px: int(px * min(1.0, opacity + 0.25)))
    logo.putalpha(logo_alpha)
    overlay.paste(logo, (logo_x, logo_y), logo)

    if label:
        text_x = w - margin - pad - text_w
        text_y = plaque_y + pad
        draw.text((text_x, text_y), label, font=font, fill=(255, 255, 255, int(235 * opacity + 20)))

    result = Image.alpha_composite(base, overlay)

    ext = os.path.splitext(output_path)[1].lower()
    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    if ext in (".jpg", ".jpeg"):
        result.convert("RGB").save(output_path, quality=85, optimize=True)
    else:
        result.save(output_path, optimize=True)
    return output_path


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("input", help="Source photo path")
    parser.add_argument("output", help="Watermarked output path")
    parser.add_argument("--opacity", type=float, default=0.55, help="Watermark opacity, 0-1 (default 0.55)")
    parser.add_argument("--scale", type=float, default=0.10, help="Logo size as a fraction of the image's shorter side (default 0.10)")
    parser.add_argument("--max-dimension", type=int, default=1600, help="Downscale so the longer edge is at most this many px, 0 to disable (default 1600 — plenty for web use, keeps files small)")
    parser.add_argument("--no-label", action="store_true", help="Stamp only the lotus mark, skip the site URL text")
    args = parser.parse_args()

    out = add_watermark(
        args.input, args.output,
        opacity=args.opacity, scale=args.scale, max_dimension=args.max_dimension,
        label=None if args.no_label else "yourdailypresence.com",
    )
    print(f"Watermarked → {out}")
