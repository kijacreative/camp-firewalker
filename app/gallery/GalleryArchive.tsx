"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { campoutGallery } from "../campoutGallery";

const pageSize = 36;

export default function GalleryArchive() {
  const [filter, setFilter] = useState("All campouts");
  const [visible, setVisible] = useState(pageSize);
  const [open, setOpen] = useState<number | null>(null);

  const photos = useMemo(
    () => filter === "All campouts" ? campoutGallery : campoutGallery.filter((photo) => photo.activity === filter),
    [filter],
  );

  useEffect(() => {
    if (open === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowLeft") setOpen((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      if (event.key === "ArrowRight") setOpen((current) => current === null ? null : (current + 1) % photos.length);
    };
    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, photos.length]);

  function selectFilter(next: string) {
    setFilter(next);
    setVisible(pageSize);
    setOpen(null);
  }

  return (
    <section className="gallery-archive" aria-labelledby="archive-title">
      <div className="gallery-archive-head">
        <div>
          <p className="eyebrow">The campout archive</p>
          <h2 id="archive-title">More moments from camp.</h2>
        </div>
        <div>
          <p>{photos.length} campout photographs, organized by the experiences that make each trip memorable.</p>
          <div className="gallery-filters" role="group" aria-label="Filter gallery by campout activity">
            {["All campouts", "Campfires", "Camp kitchen", "Trails & creeks", "Camp life", "Fishing", "Range day"].map((option) => (
              <button className={filter === option ? "active" : ""} type="button" onClick={() => selectFilter(option)} key={option}>{option}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="archive-grid">
        {photos.slice(0, visible).map((photo, index) => (
          <button type="button" className={`archive-photo archive-photo-${index % 7}`} onClick={() => setOpen(index)} key={photo.full} aria-label={`Open ${photo.alt}`}>
            <img src={photo.thumb} alt={photo.alt} loading="lazy" />
            <span><small>{photo.activity}</small><strong>{String(index + 1).padStart(3, "0")}</strong></span>
          </button>
        ))}
      </div>

      {visible < photos.length && (
        <div className="archive-more">
          <p>Showing {Math.min(visible, photos.length)} of {photos.length}</p>
          <button className="button primary" type="button" onClick={() => setVisible((count) => Math.min(count + pageSize, photos.length))}>Load more photographs</button>
        </div>
      )}

      {open !== null && (
        <div className="archive-lightbox" role="dialog" aria-modal="true" aria-label={photos[open].alt}>
          <button className="archive-lightbox-close" type="button" onClick={() => setOpen(null)} aria-label="Close photograph"><X aria-hidden="true" /></button>
          <button className="archive-lightbox-prev" type="button" onClick={() => setOpen((open - 1 + photos.length) % photos.length)} aria-label="Previous photograph"><ChevronLeft aria-hidden="true" /></button>
          <img src={photos[open].full} alt={photos[open].alt} />
          <div><span>{photos[open].activity}</span><strong>{open + 1} / {photos.length}</strong></div>
          <button className="archive-lightbox-next" type="button" onClick={() => setOpen((open + 1) % photos.length)} aria-label="Next photograph"><ChevronRight aria-hidden="true" /></button>
        </div>
      )}
    </section>
  );
}
