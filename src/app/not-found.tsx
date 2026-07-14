import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  // Light hero keeps the fixed dark-ink nav readable (same chrome as most pages).
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div>
          <p className="eyebrow">404 / Page not found</p>
          <h1>This path doesn’t lead anywhere.</h1>
        </div>
        <div className="page-hero__intro">
          <p className="lead">
            The page may have moved, or the address may be incomplete. Return
            home to continue exploring the practice.
          </p>
          <Link className="button" href="/">
            Return home <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
