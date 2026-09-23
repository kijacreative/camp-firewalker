import type { Metadata } from "next";
import Link from "next/link";
import FirewalkerStoryGame from "./FirewalkerStoryGame";

export const metadata: Metadata = {
  title: "The First Crossing | Camp Firewalker",
  description:
    "A playable Camp Firewalker interactive story about courage, trust, focus, and a day outside together.",
};

export default function StoryPage() {
  return (
    <main className="story-page">
      <nav className="story-topbar" aria-label="Story navigation">
        <Link href="/" aria-label="Back to Camp Firewalker home">
          <img src="/brand/logo-mono-light.png" alt="" />
        </Link>
        <div>
          <Link href="/gallery">Gallery</Link>
          <Link href="/volunteer#volunteer-interest">Volunteer</Link>
          <Link href="/donate#donate-interest">Give</Link>
        </div>
      </nav>

      <FirewalkerStoryGame />
    </main>
  );
}
