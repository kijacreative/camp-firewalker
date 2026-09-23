import Link from "next/link";
import FloatingActions from "../FloatingActions";
import GalleryWall from "./GalleryWall";
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
          <Link className="brand-tab" href="/brand">Brand Guidelines</Link>
        </div>
        <FloatingActions />
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
          <Link className="button primary" href="/volunteer#volunteer-interest">Volunteer</Link>
          <Link className="button secondary light" href="/donate#donate-interest">Give or sponsor</Link>
        </div>
      </section>
    </main>
  );
}
