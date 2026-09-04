"use client";

import { useEffect, useState } from "react";
import { galleryMoments } from "../galleryMoments";

export default function GalleryWall() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowLeft") setOpen((current) => current === null ? null : (current - 1 + galleryMoments.length) % galleryMoments.length);
      if (event.key === "ArrowRight") setOpen((current) => current === null ? null : (current + 1) % galleryMoments.length);
    };
    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="gallery-wall">
        {galleryMoments.map((moment, index) => (
          <button type="button" className="gallery-tile" onClick={() => setOpen(index)} key={moment.image} aria-label={`Open photo: ${moment.title}`}>
            <img src={moment.image} alt={moment.alt} loading={index < 2 ? "eager" : "lazy"} />
            <span className="gallery-tile-copy">
              <small>{String(index + 1).padStart(2, "0")} / {moment.label}</small>
              <strong>{moment.title}</strong>
              <span>{moment.text}</span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={galleryMoments[open].title}>
          <button className="lightbox-close" type="button" onClick={() => setOpen(null)} aria-label="Close gallery">×</button>
          <button className="lightbox-arrow previous" type="button" onClick={() => setOpen((open - 1 + galleryMoments.length) % galleryMoments.length)} aria-label="Previous photo">‹</button>
          <img src={galleryMoments[open].image} alt={galleryMoments[open].alt} />
          <div className="lightbox-caption"><span>{galleryMoments[open].label}</span><strong>{galleryMoments[open].title}</strong></div>
          <button className="lightbox-arrow next" type="button" onClick={() => setOpen((open + 1) % galleryMoments.length)} aria-label="Next photo">›</button>
        </div>
      )}
    </>
  );
}
