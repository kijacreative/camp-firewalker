"use client";

import { useEffect, useRef, useState } from "react";
import { galleryMoments as moments } from "./galleryMoments";

export default function ExperienceStories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  const goTo = (index: number) => {
    const next = (index + moments.length) % moments.length;
    const slide = trackRef.current?.children[next] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActive(next);
  };

  useEffect(() => {
    if (open === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowLeft") setOpen((current) => current === null ? null : (current - 1 + moments.length) % moments.length);
      if (event.key === "ArrowRight") setOpen((current) => current === null ? null : (current + 1) % moments.length);
    };
    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    const slides = Array.from(track.children) as HTMLElement[];
    const closest = slides.reduce((best, slide, index) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActive(closest.index);
  };

  return (
    <div className="journey-gallery">
      <div className="journey-toolbar">
        <div><strong>{String(active + 1).padStart(2, "0")}</strong><span>/ {String(moments.length).padStart(2, "0")}</span></div>
        <p>Scroll the day</p>
        <div className="journey-arrows">
          <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous photo">‹</button>
          <button type="button" onClick={() => goTo(active + 1)} aria-label="Next photo">›</button>
        </div>
      </div>

      <div className="journey-track" ref={trackRef} onScroll={updateActive}>
        {moments.map((moment, index) => (
          <button className="journey-slide" type="button" onClick={() => setOpen(index)} key={moment.image} aria-label={`Open photo: ${moment.title}`}>
            <img src={moment.image} alt={moment.alt} loading="lazy" />
            <span className="journey-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="journey-caption"><small>{moment.label}</small><strong>{moment.title}</strong><span>{moment.text}</span></span>
          </button>
        ))}
      </div>

      <div className="journey-progress" aria-label="Gallery progress">
        {moments.map((moment, index) => <button type="button" className={index === active ? "active" : ""} onClick={() => goTo(index)} aria-label={`Go to ${moment.title}`} key={moment.title} />)}
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={moments[open].title}>
          <button className="lightbox-close" type="button" onClick={() => setOpen(null)} aria-label="Close gallery">×</button>
          <button className="lightbox-arrow previous" type="button" onClick={() => setOpen((open - 1 + moments.length) % moments.length)} aria-label="Previous photo">‹</button>
          <img src={moments[open].image} alt={moments[open].alt} />
          <div className="lightbox-caption"><span>{moments[open].label}</span><strong>{moments[open].title}</strong></div>
          <button className="lightbox-arrow next" type="button" onClick={() => setOpen((open + 1) % moments.length)} aria-label="Next photo">›</button>
        </div>
      )}
    </div>
  );
}
