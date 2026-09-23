"use client";

import { ArrowUpRight, BadgeCheck, Compass, UsersRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const pillars = [
  {
    name: "Adventure",
    number: "01",
    headline: "The unfamiliar becomes something they can handle.",
    text: "A creek crossing, a new trail, or a first night outside asks for a brave first step. Patient guidance gives each young person room to try for himself.",
    moment: "Try a new outdoor challenge",
    outcome: "I can do hard things",
    image: "/brand/campout/creek-explore.jpg",
    alt: "Young people and adult leaders navigating a creek during a Camp Firewalker campout",
    icon: Compass,
  },
  {
    name: "Community",
    number: "02",
    headline: "No one reaches the end of the day alone.",
    text: "The group cooks, walks, solves problems, and packs out together. Shared effort turns a collection of people into a team with a story of its own.",
    moment: "Contribute to the whole group",
    outcome: "I belong and I matter here",
    image: "/brand/campout/night-team.jpg",
    alt: "Camp Firewalker participants and adult leaders celebrating together after dark",
    icon: UsersRound,
  },
  {
    name: "Character",
    number: "03",
    headline: "Confidence is earned one responsibility at a time.",
    text: "Carrying a pack, staying with a task, and helping the next person creates evidence a young person can take home: he is capable and others can count on him.",
    moment: "Carry real responsibility",
    outcome: "Others can count on me",
    image: "/brand/campout/pack-ready.jpg",
    alt: "A young Camp Firewalker participant carrying his backpack beside a creek",
    icon: BadgeCheck,
  },
];

export default function BrandMarkExperience() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];

  return (
    <section className="brand-mark-experience" aria-labelledby="brand-mark-title">
      <div className="brand-mark-heading">
        <p className="eyebrow">More than three words</p>
        <h2 id="brand-mark-title">The experience makes the values real.</h2>
        <p>Every campout is designed to turn an outdoor moment into something a young person can carry home.</p>
      </div>

      <div className="brand-pillar-tabs" role="tablist" aria-label="Camp Firewalker brand pillars">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              type="button"
              role="tab"
              id={`pillar-tab-${index}`}
              aria-controls="pillar-story"
              aria-selected={active === index}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
              key={item.name}
            >
              <span className="pillar-tab-icon"><Icon aria-hidden="true" /></span>
              <span className="pillar-tab-copy"><small>{item.number}</small><strong>{item.name}</strong><span>{item.moment}</span></span>
              <span className="pillar-tab-arrow" aria-hidden="true">&#8594;</span>
            </button>
          );
        })}
      </div>

      <article
        className="brand-pillar-story"
        id="pillar-story"
        role="tabpanel"
        aria-labelledby={`pillar-tab-${active}`}
        key={pillar.name}
      >
        <img className="brand-pillar-photo" src={pillar.image} alt={pillar.alt} />
        <div className="brand-pillar-shade" aria-hidden="true" />
        <img className="brand-pillar-logo" src="/brand/logo-mono-light.png" alt="" />
        <div className="brand-pillar-story-copy">
          <span className="brand-pillar-current">{pillar.number} / {pillar.name}</span>
          <h3>{pillar.headline}</h3>
          <p>{pillar.text}</p>
          <dl className="brand-pillar-outcomes">
            <div><dt>At camp</dt><dd>{pillar.moment}</dd></div>
            <div><dt>Carried home</dt><dd>{pillar.outcome}</dd></div>
          </dl>
          <Link href="/gallery">See the campout stories <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </article>
    </section>
  );
}
