"use client";

import { LOCALE_COOKIE, locales, localeNames, type Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  // Remember the choice so "/" sends the visitor back to the same language.
  const remember = (l: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <nav className="lang-switch" aria-label={label}>
      {locales.map((l) => (
        <a
          key={l}
          href={`/${l}`}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? "true" : undefined}
          title={localeNames[l]}
          onClick={() => remember(l)}
        >
          <span aria-hidden="true">{l.toUpperCase()}</span>
          <span className="sr-only">{localeNames[l]}</span>
        </a>
      ))}
    </nav>
  );
}
