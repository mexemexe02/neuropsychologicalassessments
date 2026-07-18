import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta } from "@/components/consultation-cta";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { PsychotherapyTopicNav } from "@/components/psychotherapy-topic-nav";
import { Reveal } from "@/components/reveal";
import { therapyAddictionSelfEsteem } from "@/lib/content-sebastian-july18";

export const metadata: Metadata = {
  title: "Addiction and Self-Esteem",
  description:
    "Psychotherapy for addiction and self-esteem — confidential, individualized support for adults.",
  alternates: { canonical: "/psychotherapy/addiction-and-self-esteem" },
};

const c = therapyAddictionSelfEsteem;

export default function AddictionSelfEsteemPage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={<>{c.title}</>}
        intro={
          <>
            <p className="lead">{c.intro[0]}</p>
            {c.intro.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </>
        }
        actions={
          <Link href="/contact" className="button">
            Book a Free 15-Minute Consultation <ArrowUpRight />
          </Link>
        }
      />

      <PsychotherapyTopicNav active="addiction" />

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{c.signsHeading}</h2>
            <p className="lead">{c.signsLead}</p>
          </Reveal>
          <ul className="detail-list">
            {c.signs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{c.helpHeading}</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={60}>
            {c.helpIntro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>{c.helpMay}</p>
          </Reveal>
          <ul className="detail-list">
            {c.helpList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{c.esteemHeading}</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={60}>
            {c.esteemParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{c.approachHeading}</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={60}>
            {c.approachParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        eyebrow=""
        title="Begin with a conversation"
        text="A complimentary 15-minute consultation can help you ask questions and consider whether psychotherapy through our practice may be an appropriate next step."
      />
    </>
  );
}
