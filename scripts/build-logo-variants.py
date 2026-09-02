from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "brand" / "logo-phoenix.png"
VARIANTS = {
    "logo-mono-dark.png": (32, 34, 31),
    "logo-mono-light.png": (242, 239, 233),
}


source = Image.open(SOURCE).convert("RGBA")
alpha_bbox = source.getchannel("A").getbbox()
if alpha_bbox is None:
    raise ValueError("The approved logo contains no visible artwork.")

padding = round(max(alpha_bbox[2] - alpha_bbox[0], alpha_bbox[3] - alpha_bbox[1]) * 0.035)
crop_box = (
    max(0, alpha_bbox[0] - padding),
    max(0, alpha_bbox[1] - padding),
    min(source.width, alpha_bbox[2] + padding),
    min(source.height, alpha_bbox[3] + padding),
)
source = source.crop(crop_box)
source.save(SOURCE.with_name("logo-web-color.png"), "PNG", optimize=True)
alpha = source.getchannel("A")

for filename, color in VARIANTS.items():
    variant = Image.new("RGBA", source.size, (*color, 0))
    variant.putalpha(alpha)
    variant.save(SOURCE.with_name(filename), "PNG", optimize=True)
