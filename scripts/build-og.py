from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BACKGROUND = ROOT / "public" / "brand" / "archive" / "campfire-gopro.jpg"
LOGO = ROOT / "public" / "brand" / "logo-mono-light.png"
OUTPUT = ROOT / "public" / "og.png"


def cover(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    target_ratio = size[0] / size[1]
    source_ratio = image.width / image.height
    if source_ratio > target_ratio:
        crop_width = round(image.height * target_ratio)
        left = (image.width - crop_width) // 2
        image = image.crop((left, 0, left + crop_width, image.height))
    else:
        crop_height = round(image.width / target_ratio)
        top = (image.height - crop_height) // 2
        image = image.crop((0, top, image.width, top + crop_height))
    return image.resize(size, Image.Resampling.LANCZOS)


canvas = cover(Image.open(BACKGROUND).convert("RGB"), (1200, 630)).convert("RGBA")

overlay = Image.new("RGBA", canvas.size)
overlay_pixels = overlay.load()
for x in range(760):
    alpha = round(248 + (18 - 248) * (x / 759))
    for y in range(630):
        overlay_pixels[x, y] = (31, 30, 26, alpha)
canvas = Image.alpha_composite(canvas, overlay)

logo = Image.open(LOGO).convert("RGBA")
logo.thumbnail((460, 390), Image.Resampling.LANCZOS)
canvas.alpha_composite(logo, (58, 38))

draw = ImageDraw.Draw(canvas)
tag_font = ImageFont.truetype(r"C:\Windows\Fonts\georgiab.ttf", 31)
detail_font = ImageFont.truetype(r"C:\Windows\Fonts\arialbd.ttf", 17)
draw.line((70, 464, 500, 464), fill="#E06A27", width=4)
draw.text((67, 491), "Adventure. Community. Character.", font=tag_font, fill="#F4E8D8")
draw.text((70, 554), "ROOTED IN TEXAS", font=detail_font, fill="#E06A27")

canvas.convert("RGB").save(OUTPUT, "PNG", optimize=True)
