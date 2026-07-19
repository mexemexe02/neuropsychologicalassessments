import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  // ReactNode so multi-paragraph client copy can stay exact (no merging).
  intro: ReactNode;
  aside?: ReactNode;
  actions?: ReactNode;
  tone?: "light" | "blue";
  /** Wider h1 on desktop only — for long titles like “Neuropsychological Assessments”. */
  longTitle?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  aside,
  actions,
  tone = "light",
  longTitle = false,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero page-hero--${tone}${longTitle ? " page-hero--long-title" : ""}`}
    >
      <div className="shell page-hero__grid">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </Reveal>
        <Reveal className="page-hero__intro" delay={120}>
          {typeof intro === "string" ? <p className="lead">{intro}</p> : intro}
          {aside}
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
