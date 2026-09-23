import type { Metadata } from "next";
import Link from "next/link";
import FloatingActions from "../FloatingActions";
import InterestForm from "../InterestForm";
import FloatingNav from "../FloatingNav";

export const metadata: Metadata = {
  title: "Give | Camp Firewalker",
  description: "Support the practical costs behind Camp Firewalker outdoor adventures.",
};

export default function DonatePage() {
  return (
    <main className="site-shell action-page">
      <FloatingNav>
        <Link className="brand" href="/" aria-label="Camp Firewalker home"><img src="/brand/logo-mono-light.png" alt="" /></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/merch">Merch</Link>
          <Link className="brand-tab" href="/brand">Brand Guidelines</Link>
        </div>
        <FloatingActions />
      </FloatingNav>

      <header className="action-hero giving-action-hero">
        <div>
          <p className="eyebrow">Put resources behind the day</p>
          <h1>Make the next adventure possible.</h1>
        </div>
        <p>Every contribution helps cover the practical pieces that turn a plan into a real experience: gear, meals, transportation, venue access, and preparation.</p>
      </header>

      <section className="support-paths" aria-label="Ways to give">
        <article><span>01</span><h2>Fund an outing</h2><p>Support the food, gear, travel, and access behind one complete day outside.</p></article>
        <article><span>02</span><h2>Give in kind</h2><p>Offer useful equipment, meals, a venue, transportation, or professional services.</p></article>
        <article><span>03</span><h2>Underwrite a season</h2><p>Help build a consistent rhythm of experiences across the year.</p></article>
      </section>

      <section className="action-content giving-content">
        <div className="action-details">
          <p className="eyebrow">Direct support</p>
          <h2>Start with the kind of impact you want to make.</h2>
          <p>Camp Firewalker will confirm the most useful next step, answer questions, and provide the appropriate payment or delivery details directly.</p>
          <blockquote>“Our boys ask weekly about the next camping trip.”<footer>Will Dowell, Executive Director<br />Behind Every Door</footer></blockquote>
        </div>
        <div className="action-form-wrap" id="donate-interest">
          <p className="eyebrow">Contribution interest</p>
          <h2>Tell us how you would like to help.</h2>
          <InterestForm mode="support" />
        </div>
      </section>
    </main>
  );
}
