import type { Metadata } from "next";
import Link from "next/link";
import { MerchBasketButton } from "../CartProvider";
import InterestForm from "../InterestForm";
import PathChooser from "../PathChooser";
import FloatingNav from "../FloatingNav";

export const metadata: Metadata = {
  title: "Volunteer | Camp Firewalker",
  description: "Bring your time and practical support to a Camp Firewalker outdoor adventure.",
};

export default function VolunteerPage() {
  return (
    <main className="site-shell action-page">
      <FloatingNav>
        <Link className="brand" href="/" aria-label="Camp Firewalker home"><img src="/brand/logo-mono-light.png" alt="" /></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/merch">Merch</Link>
          <Link className="active-tab" href="/volunteer">Volunteer</Link>
          <Link href="/donate">Give</Link>
          <Link className="brand-tab" href="/brand">Brand Guidelines</Link>
        </div>
        <div className="nav-actions"><PathChooser homePrefix="/" /><MerchBasketButton /></div>
      </FloatingNav>

      <header className="action-hero volunteer-action-hero">
        <div>
          <p className="eyebrow">Bring your time</p>
          <h1>Show up for an adventure.</h1>
        </div>
        <p>You do not have to be an expert outdoorsman. Camp Firewalker needs steady people willing to serve, carry a share, and help create a meaningful day outside.</p>
      </header>

      <section className="action-content">
        <div className="action-details">
          <p className="eyebrow">What happens next</p>
          <h2>A simple path into the work.</h2>
          <ol>
            <li><span>01</span><div><strong>Tell us where you fit</strong><p>Share your availability, comfort outdoors, and the kind of help you can offer.</p></div></li>
            <li><span>02</span><div><strong>Meet the team</strong><p>Camp Firewalker will connect with you before placing you on an outing or support team.</p></div></li>
            <li><span>03</span><div><strong>Join an experienced lead</strong><p>Your first adventure begins alongside people who know the plan, setting, and expectations.</p></div></li>
          </ol>
          <p className="partnership-boundary"><strong>A clear partnership:</strong> Forerunner provides the young people and their ongoing mentorship. Camp Firewalker coordinates the outdoor experience and its volunteer team.</p>
        </div>
        <div className="action-form-wrap">
          <p className="eyebrow">Volunteer interest</p>
          <h2>Start the conversation.</h2>
          <InterestForm mode="volunteer" />
        </div>
      </section>
    </main>
  );
}
