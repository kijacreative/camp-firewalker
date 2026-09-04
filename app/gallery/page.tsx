import Link from "next/link";
import PathChooser from "../PathChooser";
import GalleryWall from "./GalleryWall";
import { MerchBasketButton } from "../CartProvider";
import GalleryArchive from "./GalleryArchive";
import FloatingNav from "../FloatingNav";

export default function GalleryPage() {
  return (
    <main className="site-shell gallery-page">
      <FloatingNav>
        <Link className="brand" href="/" aria-label="Camp Firewalker home"><img src="/brand/logo-mono-light.png" alt="" /></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link className="active-tab" href="/gallery">Gallery</Link>
          <Link href="/merch">Merch</Link>
          <Link href="/volunteer">Volunteer</Link>
          <Link href="/#sponsor">Sponsor</Link>
          <Link href="/donate">Give</Link>
          <Link className="brand-tab" href="/brand">Brand Guidelines</Link>
        </div>
        <div className="nav-actions">
          <PathChooser homePrefix="/" />
          <MerchBasketButton />
        </div>
      </FloatingNav>

      <header className="gallery-hero">
        <p className="eyebrow">The experience, up close</p>
        <h1>See the whole day.</h1>
        <p>Campfires, trails, fishing, range days, shared meals, and the pride of learning something new. Select any photograph to open the full-screen story.</p>
      </header>

      <GalleryWall />

      <GalleryArchive />

      <section className="gallery-closer">
        <p className="eyebrow">Help create the next story</p>
        <h2>Every photograph begins with someone saying yes.</h2>
        <div className="hero-actions">
          <Link className="button primary" href="/volunteer">Volunteer</Link>
          <Link className="button secondary light" href="/#sponsor">Sponsor an adventure</Link>
        </div>
      </section>
    </main>
  );
}
