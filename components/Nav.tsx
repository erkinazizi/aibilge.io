"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function Nav({ t, lang }: { t: Dictionary["nav"]; lang: Locale }) {
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
        <a href="#top" className="brand" aria-label={t.home}>
          <Logo />
        </a>
        <nav aria-label={t.primary}>
          <ul className="nav-links">
            {t.links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <LanguageSwitcher lang={lang} label={t.language} />
          <ThemeToggle label={t.theme} title={t.themeTitle} />
          <a href="#access" className="btn btn-primary btn-sm nav-cta">
            {t.cta}
          </a>
        </div>
      </div>
      <div className="scroll-progress" ref={bar} aria-hidden="true" />
    </header>
  );
}
