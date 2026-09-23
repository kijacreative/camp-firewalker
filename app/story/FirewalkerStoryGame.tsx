"use client";

import { ArrowRight, Compass, Flame, RotateCcw, ShieldCheck, Users } from "lucide-react";
import { useMemo, useState } from "react";

type StatKey = "courage" | "trust" | "focus";

type Choice = {
  label: string;
  text: string;
  next: string;
  impact: Partial<Record<StatKey, number>>;
};

type StoryNode = {
  id: string;
  beat: string;
  title: string;
  image: string;
  alt: string;
  text: string;
  choices: Choice[];
};

const startingStats: Record<StatKey, number> = {
  courage: 1,
  trust: 1,
  focus: 1,
};

const storyNodes: Record<string, StoryNode> = {
  start: {
    id: "start",
    beat: "Dawn / Pack Line",
    title: "The bus door opens before the sun clears the trees.",
    image: "/brand/campout/pack-ready.jpg",
    alt: "Camp Firewalker gear packed and ready before an outing",
    text: "You are the first one out, which means everyone sees you deciding what kind of day this will be. The leaders are unloading coolers, rods, and tents. A younger camper keeps looking at his shoes.",
    choices: [
      {
        label: "Grab the heaviest tote",
        text: "Set the pace with quiet effort.",
        next: "gear",
        impact: { courage: 1, focus: 1 },
      },
      {
        label: "Walk beside the new kid",
        text: "Make sure nobody starts alone.",
        next: "welcome",
        impact: { trust: 2 },
      },
    ],
  },
  gear: {
    id: "gear",
    beat: "Morning / Camp Kitchen",
    title: "The work is heavier than it looked.",
    image: "/brand/campout/camp-kitchen.jpg",
    alt: "Volunteers preparing the camp kitchen outdoors",
    text: "The tote digs into your hands. You could drop it beside the kitchen and be done, or you could ask where it belongs and learn the system that keeps the whole group moving.",
    choices: [
      {
        label: "Ask for the system",
        text: "Learn how the day is held together.",
        next: "creek",
        impact: { focus: 2, trust: 1 },
      },
      {
        label: "Make a second trip",
        text: "Keep moving before anyone asks.",
        next: "trail",
        impact: { courage: 1, focus: 1 },
      },
    ],
  },
  welcome: {
    id: "welcome",
    beat: "Morning / First Names",
    title: "He says he has never slept outside.",
    image: "/brand/campout/trail-team.jpg",
    alt: "Camp Firewalker group walking a trail together",
    text: "You want to say something impressive, but the honest thing comes first. You tell him you are not sure how the day will go either, but you can figure it out together.",
    choices: [
      {
        label: "Pair up for the first task",
        text: "Turn nerves into a shared job.",
        next: "creek",
        impact: { trust: 1, focus: 1 },
      },
      {
        label: "Invite him into the group",
        text: "Make the circle wider.",
        next: "trail",
        impact: { trust: 2 },
      },
    ],
  },
  trail: {
    id: "trail",
    beat: "Midday / Trail Heat",
    title: "The trail gets quiet when it gets steep.",
    image: "/brand/campout/trail-leader.jpg",
    alt: "A trail leader guiding campers through the outdoors",
    text: "Your legs are burning. One part of you wants to race ahead. Another part notices the group has stretched thin, and the leader keeps glancing back.",
    choices: [
      {
        label: "Hold the middle",
        text: "Keep the group connected.",
        next: "water",
        impact: { trust: 1, focus: 1 },
      },
      {
        label: "Push to the overlook",
        text: "Prove what you can carry.",
        next: "water",
        impact: { courage: 2 },
      },
    ],
  },
  creek: {
    id: "creek",
    beat: "Midday / Creek Edge",
    title: "The crossing is colder than anybody expected.",
    image: "/brand/campout/creek-crossing.jpg",
    alt: "Camp Firewalker participants crossing a creek together",
    text: "The creek is not dangerous, but it asks for attention. The first step matters. So does what everyone sees before they make theirs.",
    choices: [
      {
        label: "Go first and narrate each step",
        text: "Make courage visible and useful.",
        next: "water",
        impact: { courage: 1, focus: 1 },
      },
      {
        label: "Let someone else lead while you spot",
        text: "Practice trust from the bank.",
        next: "water",
        impact: { trust: 2 },
      },
    ],
  },
  water: {
    id: "water",
    beat: "Afternoon / First Cast",
    title: "The line tangles right when everyone is watching.",
    image: "/brand/campout/first-catch.jpg",
    alt: "A young person holding a first catch on a Camp Firewalker outing",
    text: "You feel heat rise in your face. The easy move is to joke it away. The harder one is to slow down, breathe, and let someone show you the knot.",
    choices: [
      {
        label: "Ask for help",
        text: "Let instruction land.",
        next: "fire",
        impact: { trust: 1, focus: 2 },
      },
      {
        label: "Try again in silence",
        text: "Stay with the problem.",
        next: "fire",
        impact: { courage: 1, focus: 1 },
      },
    ],
  },
  fire: {
    id: "fire",
    beat: "Night / Fire Circle",
    title: "The fire makes everybody honest.",
    image: "/brand/campout/campfire-circle.jpg",
    alt: "Camp Firewalker participants gathered around a campfire",
    text: "The leader asks what you are taking home from the day. There is no perfect answer. There is only the answer you are brave enough to say out loud.",
    choices: [
      {
        label: "Name what was hard",
        text: "Tell the truth without dressing it up.",
        next: "ending",
        impact: { courage: 1, trust: 1 },
      },
      {
        label: "Thank someone by name",
        text: "Give the day back to the group.",
        next: "ending",
        impact: { trust: 1, focus: 1 },
      },
    ],
  },
};

const statLabels: Record<StatKey, string> = {
  courage: "Courage",
  trust: "Trust",
  focus: "Focus",
};

const statIcons: Record<StatKey, React.ReactNode> = {
  courage: <Flame aria-hidden="true" />,
  trust: <Users aria-hidden="true" />,
  focus: <Compass aria-hidden="true" />,
};

function getEnding(stats: Record<StatKey, number>) {
  if (stats.trust >= stats.courage && stats.trust >= stats.focus) {
    return {
      title: "You became the one who made the circle wider.",
      text: "The memory that follows you home is not the cold creek or the long climb. It is the moment someone else relaxed because you stayed close.",
      badge: "Bridge Builder",
      image: "/brand/campout/night-team.jpg",
      alt: "Camp Firewalker group together at night",
    };
  }

  if (stats.focus >= stats.courage) {
    return {
      title: "You learned how steady work changes the whole day.",
      text: "You did not have to be loud to lead. You paid attention, learned the rhythm, and left the group better prepared for the next mile.",
      badge: "Trail Steward",
      image: "/brand/campout/shared-table.jpg",
      alt: "Camp Firewalker participants sharing a table outdoors",
    };
  }

  return {
    title: "You found the part of courage that can be practiced.",
    text: "The day asked you to step first, try again, and speak honestly. None of it made fear disappear. It made you bigger than the fear.",
    badge: "Firewalker",
    image: "/brand/campout/campfire-group.jpg",
    alt: "Camp Firewalker group gathered around a campfire",
  };
}

export default function FirewalkerStoryGame() {
  const [currentId, setCurrentId] = useState("start");
  const [stats, setStats] = useState(startingStats);
  const [history, setHistory] = useState<string[]>([]);
  const ending = useMemo(() => getEnding(stats), [stats]);
  const node = storyNodes[currentId];
  const isEnding = currentId === "ending";

  const choose = (choice: Choice) => {
    setHistory((current) => [...current, choice.label]);
    setStats((current) => ({
      courage: current.courage + (choice.impact.courage ?? 0),
      trust: current.trust + (choice.impact.trust ?? 0),
      focus: current.focus + (choice.impact.focus ?? 0),
    }));
    setCurrentId(choice.next);
  };

  const restart = () => {
    setCurrentId("start");
    setStats(startingStats);
    setHistory([]);
  };

  const activeImage = isEnding ? ending.image : node.image;
  const activeAlt = isEnding ? ending.alt : node.alt;

  return (
    <section className="story-game" aria-labelledby="story-game-title">
      <div className="story-game-stage">
        <img src={activeImage} alt={activeAlt} />
        <div className="story-game-shade" />
        <div className="story-game-copy">
          <span>{isEnding ? "Dawn after / What you carry" : node.beat}</span>
          <h1 id="story-game-title">{isEnding ? ending.title : node.title}</h1>
          <p>{isEnding ? ending.text : node.text}</p>
        </div>
      </div>

      <aside className="story-game-panel" aria-label="Interactive story controls">
        <div className="story-game-panel-head">
          <span>Chapter One</span>
          <strong>The First Crossing</strong>
        </div>

        <div className="story-stats" aria-label="Story traits">
          {(Object.keys(stats) as StatKey[]).map((key) => (
            <div className="story-stat" key={key}>
              <div>
                {statIcons[key]}
                <span>{statLabels[key]}</span>
              </div>
              <meter min={0} max={8} value={Math.min(stats[key], 8)}>
                {stats[key]}
              </meter>
            </div>
          ))}
        </div>

        {isEnding ? (
          <div className="story-ending-card">
            <ShieldCheck aria-hidden="true" />
            <span>{ending.badge}</span>
            <p>Your choices: {history.join(" / ")}</p>
            <button type="button" onClick={restart}>
              <RotateCcw aria-hidden="true" />
              Begin again
            </button>
          </div>
        ) : (
          <div className="story-choices">
            {node.choices.map((choice) => (
              <button type="button" onClick={() => choose(choice)} key={choice.label}>
                <span>{choice.label}</span>
                <small>{choice.text}</small>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </aside>
    </section>
  );
}
