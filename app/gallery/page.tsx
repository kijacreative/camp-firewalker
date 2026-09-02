import Link from "next/link";
import PathChooser from "../PathChooser";
import GalleryWall from "./GalleryWall";
import { MerchBasketButton } from "../CartProvider";

const films = [
  {
    src: "/brand/media/album-video-01.mp4",
    captions: "/brand/media/album-video-01.vtt",
    poster: "/brand/media/video-01-poster.jpg",
    number: "01",
    title: "Everyone has a role",
    text: "The day includes the work of caring for the place and carrying a share of the responsibility.",
  },
  {
    src: "/brand/media/album-video-02.mp4",
    captions: "/brand/media/album-video-02.vtt",
    poster: "/brand/media/video-02-poster.jpg",
    number: "02",
    title: "Find your own water",
    text: "Exploration gets personal when young people choose a spot, test an idea, and stay with it.",
  },
  {
    src: "/brand/media/album-video-03.mp4",
    captions: "/brand/media/album-video-03.vtt",
    poster: "/brand/media/video-03-poster.jpg",
    number: "03",
    title: "Make the cast",
    text: "A simple skill becomes a small act of confidence when the next move is entirely in their hands.",
  },
];

export default function GalleryPage() {
  return (
    <main className="site-shell gallery-page">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Camp Firewalker home"><img src="/brand/logo-mono-light.png" alt="" /></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link className="active-tab" href="/gallery">Gallery</Link>
          <Link href="/merch">Merch</Link>
          <Link href="/#volunteer">Volunteer</Link>
          <Link href="/#sponsor">Sponsor</Link>
          <Link className="brand-tab" href="/brand">Brand Guidelines</Link>
        </div>
        <div className="nav-actions">
          <MerchBasketButton />
          <PathChooser homePrefix="/" />
        </div>
      </nav>

      <header className="gallery-hero">
        <p className="eyebrow">The experience, up close</p>
        <h1>See the whole day.</h1>
        <p>Big moments, quiet focus, shared work, and the pride of learning something new. Watch the films, then select any photograph to open the full-screen story.</p>
      </header>

      <section className="film-section" aria-labelledby="film-section-title">
        <div className="film-section-head">
          <div>
            <p className="eyebrow">In motion</p>
            <h2 id="film-section-title">The experience is in the doing.</h2>
          </div>
          <p>Short, unpolished moments from a real day outside. Press play to hear and see the outing as it happened.</p>
        </div>
        <div className="film-grid">
          {films.map((film) => (
            <article className="film" key={film.src}>
              <video controls playsInline preload="metadata" poster={film.poster}>
                <source src={film.src} type="video/mp4" />
                <track kind="captions" src={film.captions} srcLang="en" label="English" default />
              </video>
              <div>
                <span>{film.number} / Field film</span>
                <h3>{film.title}</h3>
                <p>{film.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <GalleryWall />

      <section className="gallery-closer">
        <p className="eyebrow">Help create the next story</p>
        <h2>Every photograph begins with someone saying yes.</h2>
        <div className="hero-actions">
          <Link className="button primary" href="/#volunteer">Volunteer</Link>
          <Link className="button secondary light" href="/#sponsor">Sponsor an adventure</Link>
        </div>
      </section>
    </main>
  );
}
