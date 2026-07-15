"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Close, Menu } from "./icons";
import { Logo } from "./logo";
import { navItems } from "@/lib/site";

// next.config uses trailingSlash: true — always compare without a trailing slash.
function normalizePath(pathname: string) {
  return pathname.replace(/\/$/, "") || "/";
}

export function SiteHeader() {
  const pathname = usePathname();
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
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
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
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Consultation is header CTA only — not a primary nav item. */}
        <Link href="/contact" className="button button--small desktop-book">
          Free 15-Minute Consultation <ArrowUpRight />
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
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
              {item.label}
              <ArrowUpRight />
            </Link>
          ))}
          <Link
            href="/contact"
            className="button"
            onClick={() => setIsOpen(false)}
          >
            Free 15-Minute Consultation <ArrowUpRight />
          </Link>
          <p>Thoughtful care. Clear next steps.</p>
        </nav>
      </div>
    </header>
  );
}
