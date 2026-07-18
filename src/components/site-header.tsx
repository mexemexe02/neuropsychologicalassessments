"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "./icons";
import { LanguageToggle } from "./language-toggle";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/i18n";
import { navItems } from "@/lib/site";

// next.config uses trailingSlash: true — always compare without a trailing slash.
function normalizePath(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
  const { t, navLabel, locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const normalizedPath = normalizePath(pathname);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Lock both html + body so iOS Safari can't scroll behind the menu.
    if (!isOpen) return;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
        isOpen ? "menu-open" : ""
      }`}
    >
      <div className="shell site-header__inner">
        <Logo light={isOpen} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                normalizedPath === normalizePath(item.href)
                  ? "page"
                  : undefined
              }
            >
              {navLabel(item.id)}
            </Link>
          ))}
        </nav>
        <div className="site-header__actions">
          <LanguageToggle />
          {/* Consultation is header CTA only — not a primary nav item. */}
          <Link href="/contact" className="button button--small desktop-book">
            {t.consultationCta} <ArrowUpRight />
          </Link>
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? t.closeMenu : t.openMenu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
        <nav className="shell mobile-menu__nav" aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <span>0{index + 1}</span>
              {navLabel(item.id)}
              <ArrowUpRight />
            </Link>
          ))}
          <div className="mobile-menu__lang">
            <LanguageToggle />
          </div>
          <Link
            href="/contact"
            className="button"
            onClick={() => setIsOpen(false)}
          >
            {t.consultationCta} <ArrowUpRight />
          </Link>
          <p>{t.tagline}</p>
        </nav>
      </div>

      {/* FR chrome is live; clinical bodies stay English until Sylvie supplies FR copy. */}
      {locale === "fr" && !isOpen ? (
        <div className="locale-notice" role="status">
          <div className="shell">
            <p>{t.frContentNotice}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
