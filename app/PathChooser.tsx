"use client";

import { useEffect, useRef, useState } from "react";

export default function PathChooser({ homePrefix = "/" }: { homePrefix?: string }) {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.add("path-choice-open");
    document.addEventListener("keydown", onKeyDown);
    closeButton.current?.focus();

    return () => {
      document.body.classList.remove("path-choice-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button className="nav-cta" type="button" onClick={() => setOpen(true)}>
        Choose your path
      </button>

      {open && (
        <div className="path-choice" role="dialog" aria-modal="true" aria-labelledby="path-choice-title">
          <button className="path-choice-backdrop" type="button" aria-label="Close path chooser" onClick={() => setOpen(false)} />
          <div className="path-choice-panel">
            <div className="path-choice-head">
              <div>
                <p className="eyebrow">Choose your path</p>
                <h2 id="path-choice-title">How do you want to make the next adventure possible?</h2>
              </div>
              <button ref={closeButton} className="path-choice-close" type="button" aria-label="Close path chooser" onClick={() => setOpen(false)}>
                &times;
              </button>
            </div>
            <div className="path-choice-options">
              <a href={`${homePrefix}volunteer#volunteer-interest`} onClick={() => setOpen(false)}>
                <span>01 / Volunteer</span>
                <strong>Bring your time</strong>
                <p>Go straight to the volunteer interest form.</p>
                <i aria-hidden="true">&#8594;</i>
              </a>
              <a href={`${homePrefix}donate#donate-interest`} onClick={() => setOpen(false)}>
                <span>02 / Give</span>
                <strong>Put resources behind the day</strong>
                <p>Start a contribution, sponsorship, or in-kind support conversation.</p>
                <i aria-hidden="true">&#8594;</i>
              </a>
            </div>
            <a className="path-choice-donate" href={`${homePrefix}donate#donate-interest`} onClick={() => setOpen(false)}>
              Already know you want to give? Go to the form <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
