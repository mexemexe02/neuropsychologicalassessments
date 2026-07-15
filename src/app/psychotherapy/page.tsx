import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  therapyApproaches,
  therapyConcernCards,
  therapyExpectSteps,
  therapyFaqs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Psychotherapy",
  description:
    "Evidence-based, trauma-informed psychotherapy for adults — a private collaborative space for meaningful change.",
  alternates: { canonical: "/psychotherapy" },
};

export default function PsychotherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Psychotherapy"
        title={<>Change can begin with being understood.</>}
        intro="Psychotherapy offers a private and collaborative space to understand emotional difficulties, process challenging experiences, develop practical coping strategies, and work toward meaningful change. We provide evidence-based, trauma-informed psychotherapy for adults. Therapy is adapted to the client's needs, history, culture, values, strengths, and pace."
      />

      <section className="section">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">What psychotherapy can help with</p>
              <h2>Support for complex, human experiences.</h2>
            </div>
            <p className="lead">
              People seek therapy for many reasons. Some are coping with a
              recent crisis or transition, while others want to understand
              longstanding patterns that continue to affect their wellbeing,
              relationships, or sense of self.
            </p>
          </Reveal>
          <div className="reason-grid">
            {therapyConcernCards.map((card, index) => (
              <Reveal key={card.title} className="reason-card" delay={(index % 3) * 60}>
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
              <p className="eyebrow">Therapeutic approaches</p>
              <h2>Selected and adapted to the person.</h2>
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
            <p className="eyebrow">What to expect</p>
            <h2>A clear path from first contact to ongoing care.</h2>
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
            <p className="eyebrow">Common questions</p>
            <h2>Psychotherapy FAQs.</h2>
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
        eyebrow="Finding the right fit matters"
        title="Start with a conversation."
        text="A complimentary 15-minute consultation can help you ask questions, discuss what you are looking for, and consider whether psychotherapy through our practice may be an appropriate next step."
      />
    </>
  );
}
