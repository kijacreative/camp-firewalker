import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FloatingActions from "../FloatingActions";
import FloatingNav from "../FloatingNav";

export const metadata: Metadata = {
  title: "In Memory of Mark Wood & Matt Van Eaton | Camp Firewalker",
  description: "The lives, friendship, and love of the outdoors that inspired Camp Firewalker.",
};

export default function MemorialPage() {
  return (
    <main className="site-shell memorial-page">
      <FloatingNav>
        <Link className="brand" href="/" aria-label="Camp Firewalker home">
          <Image src="/brand/logo-mono-light.png" alt="" width={92} height={66} priority />
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link className="active-tab" href="/memorial">Memorial</Link>
          <Link href="/merch">Merch</Link>
          <Link className="brand-tab" href="/brand">Brand Guidelines</Link>
        </div>
        <FloatingActions />
      </FloatingNav>

      <header className="memorial-hero">
        <div className="memorial-hero-copy">
          <p className="eyebrow">The lives behind Camp Firewalker</p>
          <h1>Mark Wood &amp; Matthew &quot;Firewalker&quot; Van Eaton</h1>
          <p>Two close friends, a shared love of the outdoors, and a promise carried forward in every adventure.</p>
          <a className="memorial-hero-link" href="#their-stories">
            Meet the men behind the mission <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
      </header>

      <section className="memorial-origin" id="their-stories" aria-labelledby="memorial-origin-title">
        <div>
          <p className="eyebrow">Their spirit, still at work</p>
          <h2 id="memorial-origin-title">Adventure carried forward.</h2>
        </div>
        <p>
          Camp Firewalker was founded in the spirit of two avid outdoorsmen and close friends, Mark Wood and Matt Van Eaton. Both had an extraordinary love for life outside and wanted that joy to reach more people. Their example became a mission: open the adventure, responsibility, and belonging of the outdoors to young people who might not otherwise have the opportunity.
        </p>
      </section>

      <section className="memorial-profile memorial-profile-mark" aria-labelledby="mark-wood-title">
        <figure>
          <Image
            src="/brand/memorial/mark-wood.webp"
            alt="Mark Wood standing beside a lake with two outdoor companions"
            width={342}
            height={405}
            sizes="(max-width: 920px) 82vw, 420px"
          />
          <figcaption>Mark Wood, outdoors with friends.</figcaption>
        </figure>
        <div className="memorial-profile-copy">
          <p className="memorial-profile-number">01 / A life of service</p>
          <h2 id="mark-wood-title">Mark E. Wood</h2>
          <p>
            Mark was a lifelong Scout. As a young man, he belonged to Troop 70 and attended the 1964 Jamboree. Later, as a father, he served as Scoutmaster for Troop 68 at HPUMC, where his sons and many of their friends became Eagle Scouts. After his sons graduated, he continued serving with Troop 470 in West Dallas.
          </p>
          <p>
            A member of the Order of the Arrow and a recipient of the Silver Beaver, Mark taught many young people how to camp, fish, hike, and hunt. More than those skills, he offered mentorship, steadiness, and a strong example of how to move through the world.
          </p>
          <p>
            Away from Scouting, Mark loved working his ranches and raising cattle. He spent most weekends ranching, hunting, or fishing. He never met a stranger and poured his life into his family and friends.
          </p>
          <dl className="memorial-details">
            <div><dt>Scouting</dt><dd>Troops 70, 68, and 470</dd></div>
            <div><dt>Recognition</dt><dd>Order of the Arrow / Silver Beaver</dd></div>
            <div><dt>At heart</dt><dd>Mentor, rancher, outdoorsman</dd></div>
          </dl>
        </div>
      </section>

      <section className="memorial-profile memorial-profile-matt" aria-labelledby="matt-van-eaton-title">
        <div className="memorial-profile-copy">
          <p className="memorial-profile-number">02 / A life of adventure</p>
          <h2 id="matt-van-eaton-title">Matthew &quot;Firewalker&quot; Van Eaton</h2>
          <p>
            Matt brought an intense appreciation for living life to the fullest. He never shied away from a new challenge or adventure and was an outdoorsman, craftsman, and close friend to many.
          </p>
          <p>
            After graduating from high school in Dallas, Matt moved to the mountains of Gunnison, Colorado, where he attended Western State University. Colorado gave him room for the pursuits he loved: camping, hiking, fishing, hunting, snowboarding, rafting, and whatever came next.
          </p>
          <p>
            Matt often spoke with friends about how fortunate they were to grow up with the means and resources to enjoy the outdoors. He believed those experiences should be shared with young people who did not have the same opportunities. Camp Firewalker grew from that conviction.
          </p>
          <dl className="memorial-details">
            <div><dt>Home</dt><dd>Dallas, Texas</dd></div>
            <div><dt>Next horizon</dt><dd>Gunnison, Colorado</dd></div>
            <div><dt>At heart</dt><dd>Adventurer, craftsman, friend</dd></div>
          </dl>
        </div>
        <figure>
          <Image
            src="/brand/memorial/matt-van-eaton.webp"
            alt="Matt Van Eaton smiling during an outdoor trip"
            width={301}
            height={404}
            sizes="(max-width: 920px) 82vw, 420px"
          />
          <figcaption>Matthew &quot;Firewalker&quot; Van Eaton.</figcaption>
        </figure>
      </section>

      <section className="memorial-quote" aria-label="A reflection on carrying a friend's life forward">
        <blockquote>
          <p>
            &ldquo;On the death of a friend, we should consider that the fates through confidence have devolved on us the task of a double living, that we have henceforth to fulfill the promise of our friend&apos;s life also, in our own, to the world.&rdquo;
          </p>
          <footer>Henry David Thoreau</footer>
        </blockquote>
      </section>

      <section className="memorial-carry-forward" aria-labelledby="carry-forward-title">
        <p className="eyebrow">Keep the promise moving</p>
        <h2 id="carry-forward-title">Their names belong to every next adventure.</h2>
        <p>
          Give your time or help put the next young person on the trail. Each new experience keeps Mark and Matt&apos;s generosity, courage, and joy in motion.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/volunteer#volunteer-interest">Volunteer</Link>
          <Link className="button secondary light" href="/donate#donate-interest">Give or sponsor</Link>
        </div>
      </section>

      <footer className="site-footer memorial-footer">
        <p>Camp Firewalker carries forward the love of the outdoors shared by Mark Wood and Matt Van Eaton.</p>
        <div>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <a href="mailto:firewalkertx@gmail.com">Contact</a>
        </div>
      </footer>
    </main>
  );
}
