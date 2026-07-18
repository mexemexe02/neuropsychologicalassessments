import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { educationFocusTopics } from "@/lib/content-sebastian-july18";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Accessible education about neuropsychological assessment, traumatic brain injury, neurodivergence, and related topics.",
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

      {/* Focused topic set from Sebastian’s Jul 18 evening email. */}
      <section className="section section--soft">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>Main education topics</h2>
            <p className="lead">
              We keep this page focused on the most important topics. Additional
              articles can be added over time.
            </p>
          </Reveal>
          <div className="reason-grid">
            {educationFocusTopics.map((topic, index) => (
              <Reveal
                key={topic.title}
                className="reason-card"
                delay={(index % 3) * 50}
              >
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
                {topic.href && topic.linkLabel ? (
                  <Link
                    href={topic.href}
                    className="text-link"
                    style={{ marginTop: "1rem" }}
                  >
                    {topic.linkLabel} <ArrowUpRight />
                  </Link>
                ) : null}
              </Reveal>
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
