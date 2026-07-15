import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  educationArticlePlaceholders,
  educationTopics,
} from "@/lib/content";

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
        intro="This section provides accessible education about neuropsychological assessment, neurodivergence, cognitive functioning, emotional wellbeing, and psychotherapy. The information is intended to help individuals and families better understand common terms and processes. It does not replace individualized assessment, diagnosis, medical advice, or treatment."
      />

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">Topics</p>
              <h2>Start with clear explanations.</h2>
            </div>
            <p className="lead">
              Educational programs for individuals, families, caregivers, and
              groups will be added as they are developed. These topic cards
              outline the learning library in progress.
            </p>
          </Reveal>
          <div className="reason-grid">
            {educationTopics.map((topic, index) => (
              <Reveal key={topic.title} className="reason-card" delay={(index % 3) * 50}>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">Suggested articles</p>
              <h2>Coming as full articles and programs are ready.</h2>
            </div>
          </Reveal>
          <div className="tag-list">
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

      <ConsultationCta
        title="Have a question these topics don’t answer?"
        text="A complimentary 15-minute consultation is a simple way to ask about assessment, psychotherapy, or which educational resource may help next."
      />
    </>
  );
}
