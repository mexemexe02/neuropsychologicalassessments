import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta } from "@/components/consultation-cta";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  assessmentExploredAreas,
  assessmentFaqs,
  assessmentHelpItems,
  assessmentReasons,
  assessmentRecommendations,
  assessmentSteps,
  neurodivergentConditions,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Neuropsychological Assessments",
  description:
    "Neuropsychological assessments for children, adolescents, adults, and older adults — understanding how you think, learn, remember, and function.",
  alternates: { canonical: "/assessments" },
};

export default function AssessmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Thoughtful care. Clear next steps."
        title={<>Understanding how you think, learn, remember, and function.</>}
        intro="A neuropsychological assessment provides an in-depth understanding of cognitive, emotional, behavioural, and everyday functioning. Through clinical interviews, standardized testing, questionnaires, and a review of relevant background information, we work to identify patterns of strengths and areas where additional support may be helpful."
        actions={
          <>
            <Link href="/contact" className="button">
              Book a Free 15-Minute Consultation <ArrowUpRight />
            </Link>
            <Link href="/contact" className="text-link">
              Ask About an Assessment <ArrowUpRight />
            </Link>
          </>
        }
      />

      <section className="section">
        <div className="shell intro-copy intro-copy--narrow">
          <Reveal>
            <p>
              The purpose of an assessment is not simply to identify
              difficulties. It is to develop a clearer and more complete
              understanding of the individual and provide practical
              recommendations for home, school, work, healthcare, or daily life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">What is a neuropsychological assessment?</p>
              <h2>
                A neuropsychological assessment examines how different areas of
                thinking and behaviour are functioning.
              </h2>
            </div>
          </Reveal>
          <div className="area-grid">
            {assessmentExploredAreas.map((area, index) => (
              <Reveal key={area} className="area-item" delay={(index % 3) * 60}>
                {area} <span>{String(index + 1).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="intro-copy" delay={80}>
            <p>
              Results are interpreted in the context of the individual&apos;s
              developmental, educational, medical, psychological, social, and
              cultural background.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Reasons for seeking an assessment</p>
            <h2>Common reasons people reach out.</h2>
          </Reveal>
          <div className="reason-grid">
            {assessmentReasons.map((reason, index) => (
              <Reveal key={reason.title} className="reason-card" delay={(index % 3) * 70}>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Neurodiversity</p>
            <h2>Understanding neurodivergent conditions.</h2>
            <p className="lead">
              Different minds process the world in different ways.
            </p>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <p>
              Neurodiversity recognizes that there is natural variation in how
              people think, learn, communicate, focus, regulate emotions, and
              experience their environments.
            </p>
            <p>
              The term neurodivergent is commonly used to describe individuals
              whose neurological development or cognitive functioning differs
              from what is considered typical. This may include individuals
              with:
            </p>
            <ul className="detail-list">
              {neurodivergentConditions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Some people identify strongly with the term neurodivergent, while
              others prefer diagnostic or person-specific language. We respect
              each individual&apos;s preferred terminology.
            </p>
            <p>
              Neurodivergence is not defined only by difficulty. A neurodivergent
              person may experience meaningful strengths alongside areas
              requiring support. The goal of assessment is to understand this
              individual pattern rather than compare the person to a single idea
              of how everyone should function.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">How assessment may help</p>
            <h2>Clarity that supports next steps.</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="detail-list">
              {assessmentHelpItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="intro-copy" style={{ paddingTop: "1.5rem" }}>
              A diagnosis may be one outcome of an assessment, but it is not the
              only purpose. The broader objective is to provide an accurate and
              useful understanding of the individual&apos;s functioning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--blue">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow eyebrow--light">A neuro-affirming approach</p>
            <h2>Curiosity, respect, and clinical care.</h2>
          </Reveal>
          <Reveal className="intro-copy intro-copy--light" delay={100}>
            <p>
              We approach neurodivergent functioning with curiosity, respect, and
              clinical care.
            </p>
            <p>
              This means that we seek to understand both the challenges a person
              experiences and the strengths, adaptations, and perspectives they
              bring. Recommendations are intended to support functioning and
              wellbeing without asking the person to suppress important aspects
              of their identity.
            </p>
            <p>
              When appropriate, recommendations may address environmental
              changes, communication preferences, sensory needs, learning
              strategies, executive-function supports, emotional wellbeing, and
              self-advocacy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Who may benefit</p>
            <h2>Support across life stages.</h2>
          </Reveal>
          <div className="stage-grid">
            <Reveal className="stage-card">
              <h3>Children and adolescents</h3>
              <p>
                An assessment may be considered when a child or adolescent
                experiences persistent difficulties with learning, attention,
                behaviour, development, emotional regulation, memory, or everyday
                functioning. Information may be gathered from parents or
                caregivers, educators, healthcare providers, and available school
                or medical records.
              </p>
            </Reveal>
            <Reveal className="stage-card" delay={80}>
              <h3>Adults</h3>
              <p>
                Adults may seek assessment because of longstanding concerns,
                changing responsibilities, workplace difficulties, questions about
                ADHD or learning differences, mental health concerns, medical
                conditions, or a desire for greater self-understanding.
              </p>
            </Reveal>
            <Reveal className="stage-card" delay={160}>
              <h3>Older adults</h3>
              <p>
                Assessment may help clarify changes in memory, attention,
                language, reasoning, or independent functioning. Findings may
                help guide healthcare planning, identify appropriate supports,
                and establish a baseline for future comparison when clinically
                appropriate.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">The process</p>
            <h2>What an assessment involves.</h2>
          </Reveal>
          <div className="timeline timeline--light">
            {assessmentSteps.map((step, index) => (
              <Reveal key={step.number} className="timeline-row" delay={index * 50}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Recommendations</p>
            <h2>Individualized, not one-size-fits-all.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead">
              Recommendations depend on the assessment findings and the
              individual&apos;s circumstances.
            </p>
            <ul className="detail-list">
              {assessmentRecommendations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell content-header">
          <Reveal>
            <p className="eyebrow">Common questions</p>
            <h2>Assessment FAQs.</h2>
          </Reveal>
          <Reveal className="faq-list" delay={80}>
            {assessmentFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        title="Wondering whether an assessment is appropriate?"
        text="You do not need to know exactly which type of assessment you require before contacting us. During a complimentary 15-minute consultation, you can briefly describe your concerns, ask questions about the process, and discuss whether an assessment may be an appropriate next step."
      />
    </>
  );
}
