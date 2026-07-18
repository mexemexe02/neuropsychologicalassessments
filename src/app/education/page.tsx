import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  educationArticlePlaceholders,
  educationTopics,
} from "@/lib/content";
import { educationTbi } from "@/lib/content-sebastian-july18";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Accessible education about neuropsychological assessment, neurodivergence, cognitive functioning, and psychotherapy.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title={<>Clear information supports informed decisions.</>}
        intro={
          <>
            <p className="lead">
              This section provides accessible education about
              neuropsychological assessment, neurodivergence, cognitive
              functioning, emotional wellbeing, and psychotherapy.
            </p>
            <p>
              The information is intended to help individuals and families
              better understand common terms and processes. It does not replace
              individualized assessment, diagnosis, medical advice, or
              treatment.
            </p>
          </>
        }
      />

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{educationTbi.title}</h2>
            <p className="lead">
              {educationTbi.sections[0].paragraphs[0]}
            </p>
            <Link
              href="/education/traumatic-brain-injury"
              className="text-link"
              style={{ marginTop: "1rem" }}
            >
              Read the Traumatic Brain Injury education page <ArrowUpRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="reason-grid">
            {educationTopics.map((topic, index) => (
              <Reveal
                key={topic.title}
                className="reason-card"
                delay={(index % 3) * 50}
              >
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal>
            <h2>Suggested educational article links</h2>
            <p className="lead" style={{ marginTop: "1rem" }}>
              Titles are reserved for upcoming articles. Full pieces and links
              will be published as the education program is developed.
            </p>
          </Reveal>
          <div className="tag-list" style={{ marginTop: "1.5rem" }}>
            {educationArticlePlaceholders.map((title) => (
              <span key={title}>{title}</span>
            ))}
          </div>
          <Reveal className="intro-copy" delay={80}>
            <p>
              The educational content on this website is general in nature. It
              should not be used to diagnose a condition, determine treatment, or
              replace consultation with a qualified healthcare professional.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
