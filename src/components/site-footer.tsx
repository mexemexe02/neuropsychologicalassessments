"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "./icons";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/i18n";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  const { t, navLabel } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__lead">
          <p className="eyebrow eyebrow--light">{t.footerLeadEyebrow}</p>
          <h2>{t.footerLeadTitle}</h2>
          <p className="site-footer__lead-copy">{t.footerLeadCopy}</p>
          <Link href="/contact" className="text-link text-link--light">
            {t.bookConsultation} <ArrowUpRight />
          </Link>
        </div>

        <div className="site-footer__grid">
          <div>
            <Logo light />
            <p className="site-footer__note">{site.longDescriptor}</p>
            <p className="site-footer__note">
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </p>
            <p className="site-footer__note">
              <strong>{t.hoursLabel}</strong>
              <br />
              {site.hours}
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="footer-label">{t.explore}</p>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {navLabel(item.id)}
              </Link>
            ))}
          </nav>
          <div>
            <p className="footer-label">{t.connect}</p>
            <a href={site.phoneHref}>
              <Phone /> {t.phoneOrText} {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail /> {site.email}
            </a>
            <Link href="/contact">{t.bookConsultationShort}</Link>
            <p className="site-footer__privacy-note">{t.privacyNote}</p>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>
            © {new Date().getFullYear()} {site.shortName}
          </span>
          <Link href="/privacy">{t.privacy}</Link>
          <span>{t.websitePreview}</span>
        </div>
      </div>
    </footer>
  );
}
