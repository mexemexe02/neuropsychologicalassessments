import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  aside?: ReactNode;
  actions?: ReactNode;
  tone?: "light" | "blue";
};

export function PageHero({
  eyebrow,
  title,
  intro,
  aside,
  actions,
  tone = "light",
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="shell page-hero__grid">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </Reveal>
        <Reveal className="page-hero__intro" delay={120}>
          <p className="lead">{intro}</p>
          {aside}
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
