"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type FloatingNavProps = {
  children: ReactNode;
  label?: string;
};

type LogoTone = "black" | "white" | "green" | "orange";

const logoTones = new Set<LogoTone>(["black", "white", "green", "orange"]);

function parseRgb(value: string) {
  const match = value.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?/i);
  if (!match) return null;
  return {
    red: Number(match[1]),
    green: Number(match[2]),
    blue: Number(match[3]),
    alpha: match[4] === undefined ? 1 : Number(match[4]),
  };
}

function channelLuminance(value: number) {
  const channel = value / 255;
  return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
}

function chooseTone(element: Element | undefined): LogoTone {
  let current: Element | null = element ?? null;

  while (current) {
    const override = current.getAttribute("data-nav-logo") as LogoTone | null;
    if (override && logoTones.has(override)) return override;

    const style = window.getComputedStyle(current);
    if (style.backgroundImage !== "none") return "white";

    const color = parseRgb(style.backgroundColor);
    if (color && color.alpha >= 0.72) {
      const luminance =
        0.2126 * channelLuminance(color.red) +
        0.7152 * channelLuminance(color.green) +
        0.0722 * channelLuminance(color.blue);
      const greenLeaning = color.green > color.red * 1.14 && color.green > color.blue * 1.05;
      const warmLight = luminance > 0.66 && color.red - color.blue > 7;
      const orangeLeaning = color.red > color.green * 1.28 && color.green > color.blue * 1.12;

      if (luminance < 0.16) return greenLeaning ? "orange" : "white";
      if (orangeLeaning) return "black";
      if (luminance > 0.66) return warmLight ? "black" : "green";
      return luminance < 0.42 ? "white" : "green";
    }

    current = current.parentElement;
  }

  return "white";
}

export default function FloatingNav({ children, label = "Main navigation" }: FloatingNavProps) {
  const [visible, setVisible] = useState(true);
  const [logoTone, setLogoTone] = useState<LogoTone>("white");
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frame = 0;

    const updateNavigation = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const movement = currentScrollY - lastScrollY.current;

      if (currentScrollY < 88 || movement < -3) {
        setVisible(true);
      } else if (movement > 3) {
        setVisible(false);
      }

      const nav = navRef.current;
      const brand = nav?.querySelector<HTMLElement>(".brand");
      if (nav && brand) {
        const brandBounds = brand.getBoundingClientRect();
        const navBounds = nav.getBoundingClientRect();
        const sampleX = Math.max(1, Math.min(window.innerWidth - 1, brandBounds.left + brandBounds.width / 2));
        const sampleY = Math.max(1, Math.min(window.innerHeight - 1, navBounds.bottom + 2));
        const underlying = document.elementsFromPoint(sampleX, sampleY).find((element) => !nav.contains(element));
        setLogoTone(chooseTone(underlying));
      }

      lastScrollY.current = currentScrollY;
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateNavigation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    frame = window.requestAnimationFrame(updateNavigation);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`nav ${visible ? "nav-visible" : "nav-hidden"}`}
      data-logo-tone={logoTone}
      aria-label={label}
      onFocusCapture={() => setVisible(true)}
    >
      {children}
    </nav>
  );
}
