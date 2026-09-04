import sharp from "sharp";

const photo = "public/brand/campout/forerunner-campout-hero.jpg";
const logo = "public/brand/logo-mono-light.png";
const output = "public/og.png";

const base = await sharp(photo)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 90 })
  .toBuffer();

const mark = await sharp(logo)
  .resize({ height: 330, fit: "inside", withoutEnlargement: true })
  .png()
  .toBuffer();

const overlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" x2="1">
        <stop offset="0" stop-color="#172a22" stop-opacity="0.98"/>
        <stop offset="0.48" stop-color="#172a22" stop-opacity="0.76"/>
        <stop offset="0.76" stop-color="#172a22" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <rect x="64" y="500" width="88" height="5" fill="#c8662f"/>
    <text x="64" y="548" fill="#ffffff" font-family="Arial, sans-serif" font-size="27" font-weight="700">REAL DAYS OUTSIDE. LASTING CONFIDENCE.</text>
  </svg>
`);

await sharp(base)
  .composite([
    { input: overlay, left: 0, top: 0 },
    { input: mark, left: 70, top: 62 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`Built ${output} from verified gallery photography.`);
