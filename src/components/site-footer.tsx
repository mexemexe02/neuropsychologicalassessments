import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "./icons";
import { Logo } from "./logo";
import { navItems, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__lead">
          <p className="eyebrow eyebrow--light">Begin with a conversation</p>
          <h2>Not sure what kind of support is right for you?</h2>
          <Link href="/contact" className="text-link text-link--light">
            Book a free 15-minute consultation <ArrowUpRight />
          </Link>
        </div>

        <div className="site-footer__grid">
          <div>
            <Logo light />
            <p className="site-footer__note">
              {site.tagline}.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="footer-label">Connect</p>
            <a href={site.phoneHref}>
              <Phone /> {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail /> Email the practice
            </a>
            <Link href="/contact">Book a consultation</Link>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <Link href="/privacy">Privacy</Link>
          <span>Website preview</span>
        </div>
      </div>
    </footer>
  );
}
