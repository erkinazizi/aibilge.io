"use client";

import { useEffect, useRef, useState } from "react";
import { LogoMark } from "./icons";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#problem", label: "The challenge" },
  { href: "#grammar", label: "Genome grammar" },
  { href: "#approach", label: "Approach" },
  { href: "#applications", label: "Applications" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setScrolled(window.scrollY > 12);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Aibilge home">
          <span className="brand-mark">
            <LogoMark />
          </span>
          Aibilge
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#access" className="btn btn-primary btn-sm">
            Request early access
          </a>
        </div>
      </div>
      <div className="scroll-progress" ref={bar} aria-hidden="true" />
    </header>
  );
}
