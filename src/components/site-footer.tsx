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
          <h2>Not sure whether assessment or psychotherapy is right for you?</h2>
          <p className="site-footer__lead-copy">
            A complimentary 15-minute consultation allows you to briefly explain
            what brings you here, ask practical questions, and learn about
            possible next steps.
          </p>
          <Link href="/contact" className="text-link text-link--light">
            Book a Free 15-Minute Consultation <ArrowUpRight />
          </Link>
        </div>

        <div className="site-footer__grid">
          <div>
            <Logo light />
            <p className="site-footer__note">
              Neuropsychological assessments for children through older adulthood
              and evidence-based psychotherapy for adults.
            </p>
            <p className="site-footer__note">
              {site.addressLine1}
              <br />
              {site.addressLine2}
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
              <Phone /> Phone or text {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail /> {site.email}
            </a>
            <Link href="/contact">Book a consultation</Link>
            <p className="site-footer__privacy-note">
              Please avoid including sensitive personal or health information in
              email or text messages.
            </p>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} {site.shortName}</span>
          <Link href="/privacy">Privacy</Link>
          <span>Website preview</span>
        </div>
      </div>
    </footer>
  );
}
