import Link from "next/link";
import { MerchBasketButton } from "../CartProvider";

const colors = [
  { name: "Campfire Orange", hex: "#C1561D", className: "swatch-orange" },
  { name: "Charcoal", hex: "#24231F", className: "swatch-charcoal" },
  { name: "Texas Olive", hex: "#5B5735", className: "swatch-olive" },
  { name: "Trail Camel", hex: "#C49766", className: "swatch-camel" },
  { name: "Canvas Cream", hex: "#E5D4C0", className: "swatch-cream" },
  { name: "Water Gray", hex: "#CBD5DB", className: "swatch-lake" },
];

const voiceTraits = [
  ["Grounded", "Use plain language and concrete details about the experience."],
  ["Inviting", "Make it easy for volunteers and sponsors to see where they fit."],
  ["Steady", "Sound capable and trustworthy without exaggeration or bravado."],
  ["Respectful", "Protect the dignity of every young person and partner in the story."],
];

export default function BrandGuidelines() {
  return (
    <main className="guidelines">
      <nav className="nav" aria-label="Brand guidelines navigation">
        <Link className="brand" href="/" aria-label="Camp Firewalker website">
          <img src="/brand/logo-mono-light.png" alt="" />
        </Link>
        <div className="nav-links">
          <a href="#logo">Logo</a>
          <a href="#color">Color</a>
          <a href="#type">Type</a>
          <a href="#voice">Voice</a>
        </div>
        <div className="nav-actions">
          <MerchBasketButton />
          <Link className="nav-cta" href="/">View website</Link>
        </div>
      </nav>

      <header className="guide-hero">
        <div>
          <p className="eyebrow">Brand guidelines</p>
          <h1>One clear identity, built for the work.</h1>
          <p className="lead">
            These standards keep Camp Firewalker recognizable, Texas-rooted, and clear about its role alongside Forerunner.
          </p>
        </div>
        <div className="guide-version" aria-label="Guideline version">
          <span>Version 1.0</span>
          <strong>Adventure.<br />Community.<br />Character.</strong>
        </div>
      </header>

      <section className="guide-foundation">
        <div>
          <p className="eyebrow">Brand foundation</p>
          <h2>Challenge outside. Growth that lasts.</h2>
        </div>
        <div className="foundation-copy">
          <p>
            Camp Firewalker creates rugged, memorable outdoor experiences for boys connected through Forerunner. The brand should feel practical, warm, resilient, and close to the land.
          </p>
          <p className="boundary-note">
            <strong>Partnership boundary:</strong> Forerunner brings the youth and mentors. Camp Firewalker plans and supports the outdoor adventure experience.
          </p>
        </div>
      </section>

      <section className="guide-section" id="logo">
        <div className="guide-heading">
          <p className="eyebrow">01 / Logo</p>
          <h2>Lead with one color.</h2>
          <p>Use the monochrome logo for most applications. Reserve the full-color master for brand presentations and occasional feature moments.</p>
        </div>
        <div className="logo-stage">
          <img src="/brand/logo-mono-light.png" alt="Monochrome Camp Firewalker phoenix and wordmark" />
        </div>
        <div className="logo-variants">
          <article className="logo-variant logo-variant-light">
            <span>Primary / light</span>
            <img src="/brand/logo-mono-light.png" alt="Light monochrome Camp Firewalker logo" />
          </article>
          <article className="logo-variant logo-variant-dark">
            <span>Primary / dark</span>
            <img src="/brand/logo-mono-dark.png" alt="Dark monochrome Camp Firewalker logo" />
          </article>
          <article className="logo-variant logo-variant-color">
            <span>Full-color master</span>
            <img src="/brand/logo-web-color.png" alt="Full-color Camp Firewalker logo" />
          </article>
        </div>
        <div className="rule-grid">
          <article className="rule good">
            <span>Do</span>
            <h3>Protect the mark</h3>
            <p>Keep its proportions and clear space. Use light on dark or dark on light for the strongest contrast.</p>
          </article>
          <article className="rule bad">
            <span>Do not</span>
            <h3>Redraw or decorate it</h3>
            <p>Do not stretch, crop, rebuild, add mountains, apply effects, or combine it with new symbols.</p>
          </article>
        </div>
        <div className="asset-links" aria-label="Brand asset downloads">
          <a className="button primary" href="/brand/logo-mono-dark.png" download>Download dark logo</a>
          <a className="button secondary" href="/brand/logo-mono-light.png" download>Download light logo</a>
          <a className="button secondary" href="/brand/logo-web-color.png" download>Download full-color logo</a>
          <a className="button secondary" href="/og.png" download>Download social card</a>
        </div>
      </section>

      <section className="guide-section color-section" id="color">
        <div className="guide-heading">
          <p className="eyebrow">02 / Color</p>
          <h2>Firelight, earth, water, and canvas.</h2>
          <p>Charcoal and cream carry most layouts. Orange signals action. Olive, camel, and water gray provide restrained support.</p>
        </div>
        <div className="swatches">
          {colors.map((color) => (
            <article className="swatch" key={color.hex}>
              <div className={color.className} aria-hidden="true" />
              <strong>{color.name}</strong>
              <span>{color.hex}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section" id="type">
        <div className="guide-heading">
          <p className="eyebrow">03 / Typography</p>
          <h2>Strong headlines. Straightforward reading.</h2>
        </div>
        <div className="type-specimens">
          <article className="display-type">
            <span>Zilla Slab / 700</span>
            <p>Built around the fire.</p>
          </article>
          <article className="body-type">
            <span>Hanken Grotesk / 400 + 700</span>
            <p>Use Hanken Grotesk for body copy, navigation, labels, and calls to action. Keep sentences direct and spacing generous.</p>
          </article>
        </div>
      </section>

      <section className="guide-photo">
        <img src="/brand/archive/campfire-dsc.jpg" alt="A young Camp Firewalker participant fishing beside a Texas pond" />
        <div>
          <p className="eyebrow">04 / Photography</p>
          <h2>Show Texas as it is.</h2>
          <p>Favor lakes, creeks, prairie, live oak, mesquite, campfires, useful gear, and real moments of shared effort.</p>
          <p><strong>Avoid:</strong> mountains, alpine lakes, pine-forest stock scenes, staged hero poses, heavy filters, or imagery that exploits young people.</p>
        </div>
      </section>

      <section className="guide-section voice-section" id="voice">
        <div className="guide-heading">
          <p className="eyebrow">05 / Voice</p>
          <h2>Speak with warmth and backbone.</h2>
        </div>
        <div className="voice-grid">
          {voiceTraits.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="language-grid">
          <article>
            <span>Approved language</span>
            <p>“Camp Firewalker creates outdoor adventure experiences for boys connected through Forerunner.”</p>
            <p>“Forerunner brings the youth and mentors. Camp Firewalker brings the adventure.”</p>
          </article>
          <article>
            <span>Avoid</span>
            <p>“Camp Firewalker’s mentorship program”</p>
            <p>“Our mentees” or language suggesting Camp Firewalker recruits or mentors the boys.</p>
          </article>
        </div>
      </section>

      <footer className="guide-footer">
        <img src="/brand/logo-mono-light.png" alt="Camp Firewalker" />
        <p>Use these standards across the website, sponsor materials, volunteer communications, apparel, signage, and social media.</p>
        <Link className="button secondary light" href="/">Return to website</Link>
      </footer>
    </main>
  );
}
