"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { navItems } from "@/lib/site";

export type Locale = "en" | "fr";

const STORAGE_KEY = "cnp-locale";

/** UI chrome only — clinical page bodies stay English until Sylvie supplies FR. */
const ui = {
  en: {
    consultationCta: "Free 15-Minute Consultation",
    bookConsultation: "Book a Free 15-Minute Consultation",
    bookConsultationShort: "Book a consultation",
    explore: "Explore",
    connect: "Connect",
    privacy: "Privacy",
    skipToContent: "Skip to content",
    phoneOrText: "Phone or text",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    english: "English",
    french: "Français",
    frContentNotice:
      "French clinical pages are being prepared. Dr. Sauriol offers services in French — please contact us to begin in French.",
    footerLeadEyebrow: "Begin with a conversation",
    footerLeadTitle:
      "Not sure whether assessment or psychotherapy is right for you?",
    footerLeadCopy:
      "A complimentary 15-minute consultation allows you to briefly explain what brings you here, ask practical questions, and learn about possible next steps.",
    privacyNote:
      "Please avoid including sensitive personal or health information in email or text messages.",
    websitePreview: "Website preview",
    tagline: "Thoughtful care. Clear next steps.",
  },
  fr: {
    consultationCta: "Consultation gratuite de 15 minutes",
    bookConsultation: "Réserver une consultation gratuite de 15 minutes",
    bookConsultationShort: "Réserver une consultation",
    explore: "Explorer",
    connect: "Nous joindre",
    privacy: "Confidentialité",
    skipToContent: "Aller au contenu",
    phoneOrText: "Téléphone ou texto",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Langue",
    english: "English",
    french: "Français",
    frContentNotice:
      "Les pages cliniques en français sont en préparation. Dre Sauriol offre des services en français — communiquez avec nous pour commencer en français.",
    footerLeadEyebrow: "Commencer par une conversation",
    footerLeadTitle:
      "Vous ne savez pas si une évaluation ou une psychothérapie vous convient?",
    footerLeadCopy:
      "Une consultation gratuite de 15 minutes vous permet d’expliquer brièvement ce qui vous amène, de poser des questions pratiques et de connaître les prochaines étapes possibles.",
    privacyNote:
      "Veuillez éviter d’inclure des renseignements personnels ou de santé sensibles dans les courriels ou les textos.",
    websitePreview: "Aperçu du site",
    tagline: "Des soins réfléchis. Des prochaines étapes claires.",
  },
} as const;

const navFr: Record<(typeof navItems)[number]["id"], string> = {
  home: "Accueil",
  assessments: "Évaluations",
  clinicians: "Cliniciens",
  psychotherapy: "Psychothérapie",
  education: "Éducation",
  resources: "Ressources",
};

type UiStrings = {
  [K in keyof (typeof ui)["en"]]: string;
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: UiStrings;
  navLabel: (id: (typeof navItems)[number]["id"]) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // Defer so hydration stays English-first; then apply saved preference.
      if (saved === "en" || saved === "fr") {
        startTransition(() => setLocaleState(saved));
      }
    } catch {
      // Ignore private-mode / blocked storage.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore private-mode / blocked storage.
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: ui[locale],
      navLabel: (id) =>
        locale === "fr"
          ? navFr[id]
          : (navItems.find((n) => n.id === id)?.label ?? id),
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
