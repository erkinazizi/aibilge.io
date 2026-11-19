"use client";

import { IconMoon, IconSun } from "./icons";
import { THEME_KEY } from "./theme";

function currentTheme(): "light" | "dark" {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle({ label, title }: { label: string; title: string }) {
  const toggle = () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* storage unavailable — choice lasts for this page view */
    }
  };

  // Icons swap via CSS from the theme attribute, so server and client markup match.
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={title}
    >
      <IconSun />
      <IconMoon />
    </button>
  );
}
