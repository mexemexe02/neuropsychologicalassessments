"use client";

import { useLanguage, type Locale } from "@/lib/i18n";

/** Header / home language switch — English clinical copy remains until FR content arrives. */
export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label={t.languageLabel}>
      {(["en", "fr"] as const).map((code: Locale) => (
        <button
          key={code}
          type="button"
          className={`lang-toggle__btn ${locale === code ? "is-active" : ""}`}
          aria-pressed={locale === code}
          onClick={() => setLocale(code)}
        >
          {code === "en" ? t.english : t.french}
        </button>
      ))}
    </div>
  );
}
