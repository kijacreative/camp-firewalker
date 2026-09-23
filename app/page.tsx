import Link from "next/link";
import ExperienceStories from "./ExperienceStories";
import FloatingNav from "./FloatingNav";
import FloatingActions from "./FloatingActions";
import BrandMarkExperience from "./BrandMarkExperience";

const adventures = [
  "Camping weekends",
  "Trail days",
  "Fishing and creek days",
  "Outdoor skill-building",
];

const involvementPaths = [
  {
    number: "01",
    audience: "For volunteers",
    title: "You do not have to be an expert. You have to show up.",
    text: "Tell us when you are available, have a quick conversation with the team, and join an experienced lead on an upcoming outing.",
    href: "/volunteer#volunteer-interest",
    label: "Start volunteer interest",
  },
  {
    number: "02",
    audience: "For sponsors and donors",
    title: "Fund a season. Change a life. Start the conversation.",
    text: "Tell the team what kind of support you are considering so they can connect it to the next real need.",
    href: "/donate#donate-interest",
    label: "Start giving interest",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <FloatingNav>
        <a className="brand" href="#top" aria-label="Camp Firewalker home">
          <img src="/brand/logo-mono-light.png" alt="" />
        </a>
        <div className="nav-links">
          <a href="#experience">Experiences</a>
          <Link href="/story">Story Game</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/merch">Merch</Link>
          <Link className="brand-tab" href="/brand">Brand Guidelines</Link>
        </div>
        <FloatingActions />
      </FloatingNav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Outdoor adventure for young men across Texas</p>
          <h1>Walk through. Rise up. Leave a mark.</h1>
          <p className="lead">
            Camp Firewalker creates real outdoor experiences where young people try something new, contribute to a team, and come home knowing they can do hard things.
          </p>
          <div className="hero-front-doors" aria-label="Ways to get involved">
            <Link href="/volunteer#volunteer-interest">
              <span>Volunteer</span>
              <strong>Start the volunteer form.</strong>
              <i aria-hidden="true">&#8594;</i>
            </Link>
            <Link href="/donate#donate-interest">
              <span>Sponsor</span>
              <strong>Start the giving conversation.</strong>
              <i aria-hidden="true">&#8594;</i>
            </Link>
          </div>
          <div className="hero-meta" aria-label="Program highlights">
            <div><span>Since</span><strong>2015 in Dallas, Texas</strong></div>
            <div><span>Built by</span><strong>Volunteers, donors, and local partners</strong></div>
          </div>
        </div>
      </section>

      <section className="intro band">
        <div>
          <p className="eyebrow">Dallas, Texas / Since 2015</p>
          <h2>We make the outdoors a proving ground for courage, trust, and growth.</h2>
        </div>
        <p>
          Camp Firewalker is a volunteer-driven, donor-supported nonprofit creating outdoor adventures for young people who may not otherwise have access to them. Each outing uses new experiences to build teamwork, confidence, self-reliance, and positive relationships.
        </p>
      </section>

      <BrandMarkExperience />

      <section className="involvement-rail" id="choose-your-path" aria-labelledby="get-involved-title">
        <div className="involvement-intro">
          <p className="eyebrow">Make it easy to say yes</p>
          <h2 id="get-involved-title">Two clear ways to move the mission forward.</h2>
          <p>Every adventure begins with someone deciding to give their time or put resources behind the day.</p>
        </div>
        <div className="involvement-options">
          {involvementPaths.map((path) => (
            <article key={path.number}>
              <span>{path.number} / {path.audience}</span>
              <h3>{path.title}</h3>
              <p>{path.text}</p>
              <a href={path.href}>{path.label} <span aria-hidden="true">→</span></a>
            </article>
          ))}
          <p className="involvement-aside">Have gear, meals, a venue, or an introduction to offer? <a href="mailto:firewalkertx@gmail.com?subject=I%20can%20help%20Camp%20Firewalker">Start a conversation</a>.</p>
        </div>
      </section>

      <section className="field-notes" id="experience" aria-labelledby="field-notes-title">
        <div className="field-notes-head">
          <div>
            <p className="eyebrow">Their experience</p>
            <h2 id="field-notes-title">Step into the day.</h2>
          </div>
          <div className="field-notes-actions">
            <p>Move through a real Camp Firewalker outing, from shared responsibility to the quiet focus of learning something new. Select any image to see it full screen.</p>
            <Link href="/gallery">Open the full gallery <span aria-hidden="true">&#8594;</span></Link>
          </div>
        </div>
        <ExperienceStories />
      </section>

      <section className="story-game-teaser" aria-labelledby="story-teaser-title">
        <div>
          <p className="eyebrow">Interactive story</p>
          <h2 id="story-teaser-title">Play through the first crossing.</h2>
          <p>
            Step into a Camp Firewalker outing as a choice-driven story. Every decision shifts courage, trust, and focus before the night fire asks what you are taking home.
          </p>
          <Link className="button primary" href="/story">
            Start the story
          </Link>
        </div>
        <img src="/brand/campout/creek-crossing.jpg" alt="Camp Firewalker participants crossing a creek together" />
      </section>

      <section className="day-rhythm" aria-labelledby="day-rhythm-title">
        <div className="day-rhythm-heading">
          <p className="eyebrow">What the day holds</p>
          <h2 id="day-rhythm-title">Growth happens in the doing.</h2>
          <p>The adventure is not a backdrop. It gives every young person a real role, a real challenge, and a real reason to count on the people beside him.</p>
        </div>
        <div className="day-rhythm-steps">
          <article><span>01</span><h3>Arrive together</h3><p>Meet the team, understand the plan, and step into a place that feels different from everyday life.</p></article>
          <article><span>02</span><h3>Learn by trying</h3><p>Pick up a new skill with patient guidance, then practice until the next move begins to feel natural.</p></article>
          <article><span>03</span><h3>Carry a share</h3><p>Help with the gear, the work, and the people around you. Everyone contributes to the day.</p></article>
          <article><span>04</span><h3>Take it home</h3><p>Leave with earned confidence, a shared story, and proof that unfamiliar things can become possible.</p></article>
        </div>
      </section>

      <section className="split">
        <div className="panel dark">
          <p className="eyebrow">Built with purpose</p>
          <h2>Every outing asks something real of everyone involved.</h2>
          <p>
            The outdoors creates honest moments. Young men learn to carry their share, solve problems together, try unfamiliar things, and discover that they are capable of more than they expected.
          </p>
        </div>
        <div className="partner-grid">
          <article>
            <span>Challenge</span>
            <h3>Useful skills</h3>
            <p>Camp craft, outdoor problem-solving, physical effort, and practical responsibility build earned confidence.</p>
          </article>
          <article>
            <span>Community</span>
            <h3>Shared accomplishment</h3>
            <p>Working through a demanding day together creates trust, belonging, and memories that bring people closer.</p>
          </article>
        </div>
      </section>

      <section className="partnership" aria-labelledby="partnership-title">
        <div className="partnership-heading">
          <p className="eyebrow">Built together</p>
          <h2 id="partnership-title">One experience. Distinct roles.</h2>
          <p>Camp Firewalker and Forerunner work side by side so each outing is connected to relationships that continue beyond a single day.</p>
        </div>
        <div className="partnership-roles">
          <article>
            <span>Camp Firewalker</span>
            <h3>Creates the adventure</h3>
            <p>Plans and leads the outdoor experience, brings together volunteers, and provides the gear, setting, and shared challenge.</p>
          </article>
          <div className="partnership-mark" aria-hidden="true"><span>+</span></div>
          <article>
            <span>Forerunner</span>
            <h3>Provides the mentorship</h3>
            <p>Brings the young people and provides the trusted relationships and ongoing mentorship surrounding each adventure.</p>
          </article>
        </div>
      </section>

      <section className="legacy-story" id="story">
        <div>
          <p className="eyebrow">Why Firewalker</p>
          <h2>Adventure carried forward.</h2>
          <p>Camp Firewalker was founded in 2015 in the spirit of two close friends and avid outdoorsmen, Mark E. Wood and Matthew “Firewalker” Van Eaton.</p>
          <p>Mark spent years teaching young people to camp, fish, hike, and hunt. Matt believed deeply that the outdoor experiences he loved should be shared with young people who might not otherwise have the opportunity. Their example continues in every outing.</p>
          <Link className="memorial-story-link" href="/memorial">Read Mark and Matt&apos;s stories <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <blockquote>
          <p>“Our boys ask weekly about the next camping trip.”</p>
          <footer>Will Dowell, Executive Director<br />Behind Every Door</footer>
        </blockquote>
      </section>

      <section className="adventure-band">
        <div>
          <p className="eyebrow">The experience</p>
          <h2>Simple, physical, memorable days outside.</h2>
        </div>
        <ul>
          {adventures.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="texas-story">
        <div>
          <p className="eyebrow">Rooted in Texas</p>
          <h2>Wide skies, open water, and room to grow.</h2>
          <p>
            Camp Firewalker adventures are shaped by the landscape we call home: lakes, creeks, trails, campfires, and long days outside together.
          </p>
        </div>
        <img src="/brand/campout/creek-friends.jpg" alt="Camp Firewalker participants exploring a Texas creek together" />
      </section>

      <section className="final-cta">
        <p className="eyebrow">The next adventure starts here</p>
        <h2>There is a clear way for you to help make it happen.</h2>
        <p>
          Bring your time to the trail or put your resources behind the next season. Either way, your yes becomes an experience a young man can carry forward.
        </p>
        <div className="hero-actions">
          <Link className="button primary" href="/volunteer#volunteer-interest">
            Volunteer
          </Link>
          <Link className="button secondary light" href="/donate#donate-interest">
            Give or sponsor
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <p>Camp Firewalker partners with Forerunner, which provides the youth relationships and mentorship surrounding each adventure. General inquiries: <a href="mailto:firewalkertx@gmail.com">firewalkertx@gmail.com</a></p>
        <Link href="/brand">Brand guidelines</Link>
      </footer>
    </main>
  );
}
