"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type FloatingNavProps = {
  children: ReactNode;
  label?: string;
};

export default function FloatingNav({ children, label = "Main navigation" }: FloatingNavProps) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frame = 0;

    const updateVisibility = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;

      if (currentScrollY < 88 || movement < -3) {
        setVisible(true);
      } else if (movement > 3) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      className={`nav ${visible ? "nav-visible" : "nav-hidden"}`}
      aria-label={label}
      onFocusCapture={() => setVisible(true)}
    >
      {children}
    </nav>
  );
}
