import type { Metadata } from "next";
import Link from "next/link";
import { MerchBasketButton } from "../CartProvider";
import PathChooser from "../PathChooser";
import MerchStore from "./MerchStore";
import FloatingNav from "../FloatingNav";

export const metadata: Metadata = {
  title: "Merch | Camp Firewalker",
  description: "Camp Firewalker apparel and field gear that helps support the next outdoor adventure.",
};

export default function MerchPage() {
  return (
    <main className="site-shell merch-page">
      <FloatingNav>
        <Link className="brand" href="/" aria-label="Camp Firewalker home"><img src="/brand/logo-mono-light.png" alt="" /></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link className="active-tab" href="/merch">Merch</Link>
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

      <header className="merch-intro">
        <div>
          <p className="eyebrow">Carry the mission</p>
          <h1>Field-tested spirit. Everyday gear.</h1>
        </div>
        <div className="merch-intro-copy">
          <p>Wear Camp Firewalker into the community and help put the next outdoor experience within reach.</p>
          <span>All five pieces now have a selected production blank and decoration specification.</span>
        </div>
      </header>

      <MerchStore />

      <section className="merch-impact">
        <img src="/brand/campout/first-catch.jpg" alt="Smiling Camp Firewalker participants showing their catch" />
        <div>
          <p className="eyebrow">More than the gear</p>
          <h2>What you wear helps create what comes next.</h2>
          <p>Merchandise support helps Camp Firewalker cover the practical pieces behind a day outside: food, equipment, transportation, access, and the planning that holds it all together.</p>
          <Link href="/#sponsor">See other ways to help <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <footer className="site-footer">
        <p>Questions about sizing, availability, or group orders? <a href="mailto:firewalkertx@gmail.com?subject=Camp%20Firewalker%20merch">Email Camp Firewalker</a>.</p>
        <Link href="/brand">Brand guidelines</Link>
      </footer>
    </main>
  );
}
