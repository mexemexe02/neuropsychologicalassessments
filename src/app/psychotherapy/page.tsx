import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta } from "@/components/consultation-cta";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  therapyApproaches,
  therapyConcernCards,
  therapyConcernList,
  therapyExpectSteps,
  therapyFaqs,
  therapyMenSexualAbuse,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Psychotherapy",
  description:
    "Evidence-based, trauma-informed psychotherapy for adults — including specialized counselling for men with a history of sexual abuse.",
  alternates: { canonical: "/psychotherapy" },
};

export default function PsychotherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Psychotherapy"
        title={<>Change can begin with being understood.</>}
        intro={
          <>
            <p className="lead">
              Psychotherapy offers a private and collaborative space to
              understand emotional difficulties, process challenging
              experiences, develop practical coping strategies, and work toward
              meaningful change.
            </p>
            <p>
              We provide evidence-based, trauma-informed psychotherapy for
              adults. Therapy is adapted to the client&apos;s needs, history,
              culture, values, strengths, and pace.
            </p>
          </>
        }
        actions={
          <>
            <Link href="/contact" className="button">
              Book a Free 15-Minute Consultation <ArrowUpRight />
            </Link>
            <Link href="/contact/#request" className="text-link">
              Ask About Psychotherapy <ArrowUpRight />
            </Link>
          </>
        }
      />

      {/* Featured focus area — Sebastian Jul 18 email; keep wording exact. */}
      <section
        id="men-sexual-abuse"
        className="section section--soft"
        aria-labelledby="men-sexual-abuse-heading"
      >
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">{therapyMenSexualAbuse.eyebrow}</p>
              <h2 id="men-sexual-abuse-heading">
                {therapyMenSexualAbuse.title}
              </h2>
            </div>
            <p className="lead">
              We provide specialized treatment for men with a history of sexual
              abuse.
            </p>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            {therapyMenSexualAbuse.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <h2>What can psychotherapy help with?</h2>
            </div>
            <p className="lead">
              People seek therapy for many reasons. Some are coping with a
              recent crisis or transition, while others want to understand
              longstanding patterns that continue to affect their wellbeing,
              relationships, or sense of self.
            </p>
          </Reveal>
          <ul className="detail-list">
            {therapyConcernList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="reason-grid" style={{ marginTop: "3rem" }}>
            {therapyConcernCards.map((card, index) => (
              <Reveal
                key={card.title}
                className="reason-card"
                delay={(index % 3) * 60}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <h2>Therapeutic approaches</h2>
            </div>
            <p className="lead">
              No single therapy approach is appropriate for every person.
              Treatment is selected and adapted according to the client&apos;s
              concerns, goals, preferences, and clinical needs.
            </p>
          </Reveal>
          <div className="reason-grid">
            {therapyApproaches.map((approach, index) => (
              <Reveal
                key={approach.title}
                className="reason-card"
                delay={(index % 3) * 60}
              >
                <h3>{approach.title}</h3>
                <p>{approach.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <h2>What to expect in therapy</h2>
          </Reveal>
          <div className="timeline timeline--light">
            {therapyExpectSteps.map((step, index) => (
              <Reveal
                key={step.title}
                className="timeline-row"
                delay={index * 50}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="intro-copy" delay={80}>
            <p>
              Electronic communication carries privacy limitations. Please avoid
              sending detailed or sensitive health information by regular email
              or text.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell content-header">
          <Reveal>
            <h2>Frequently asked questions</h2>
          </Reveal>
          <Reveal className="faq-list" delay={80}>
            {therapyFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        eyebrow=""
        title="Begin with a conversation"
        text="A complimentary 15-minute consultation can help you ask questions, discuss what you are looking for, and consider whether psychotherapy through our practice may be an appropriate next step."
      />
    </>
  );
}
