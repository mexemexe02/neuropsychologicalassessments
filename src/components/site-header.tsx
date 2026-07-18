"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "./icons";
import { LanguageToggle } from "./language-toggle";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/i18n";
import { navItems, type NavItem } from "@/lib/site";

// next.config uses trailingSlash: true — always compare without a trailing slash.
function normalizePath(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

function pathMatches(pathname: string, href: string) {
  const path = normalizePath(pathname);
  const target = normalizePath(href.split("#")[0] || "/");
  if (target === "/") return path === "/";
  return path === target || path.startsWith(`${target}/`);
}

function itemIsActive(pathname: string, item: NavItem) {
  if (pathMatches(pathname, item.href)) return true;
  return item.children?.some((child) => pathMatches(pathname, child.href)) ?? false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const { t, navLabel, locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Mobile accordion: which parent with children is expanded.
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);

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

  useEffect(() => {
    // Close mobile menu when the route changes.
    setIsOpen(false);
    setMobileOpenId(null);
  }, [pathname]);

  return (
    <header
      className={`site-header ${isScrolled ? "is-scrolled" : ""} ${
        isOpen ? "menu-open" : ""
      }`}
    >
      <div className="shell site-header__inner">
        <Logo light={isOpen} />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = itemIsActive(pathname, item);
            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={
                    normalizePath(pathname) === normalizePath(item.href)
                      ? "page"
                      : undefined
                  }
                >
                  {navLabel(item.id)}
                </Link>
              );
            }

            // Hover / focus-within flyout — selectable tabs under parent.
            return (
              <div
                key={item.href}
                className={`nav-dropdown ${active ? "is-active" : ""}`}
              >
                <Link
                  href={item.href}
                  className="nav-dropdown__trigger"
                  aria-haspopup="true"
                  aria-current={active ? "page" : undefined}
                >
                  {navLabel(item.id)}
                </Link>
                <div className="nav-dropdown__panel" role="menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      role="menuitem"
                      aria-current={
                        pathMatches(pathname, child.href) ? "page" : undefined
                      }
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
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
          {navItems.map((item, index) => {
            if (!item.children?.length) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span>0{index + 1}</span>
                  {navLabel(item.id)}
                  <ArrowUpRight />
                </Link>
              );
            }

            const expanded = mobileOpenId === item.id;
            return (
              <div key={item.href} className="mobile-nav-group">
                <button
                  type="button"
                  className="mobile-nav-group__toggle"
                  aria-expanded={expanded}
                  onClick={() =>
                    setMobileOpenId((id) => (id === item.id ? null : item.id))
                  }
                >
                  <span>0{index + 1}</span>
                  {navLabel(item.id)}
                  <span className="mobile-nav-group__chevron" aria-hidden>
                    {expanded ? "−" : "+"}
                  </span>
                </button>
                {expanded ? (
                  <div className="mobile-nav-group__children">
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
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
