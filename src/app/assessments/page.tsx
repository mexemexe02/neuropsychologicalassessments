import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  assessmentAreas,
  assessmentProcessIncludes,
  assessmentSteps,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Neuropsychological Assessments",
  description:
    "Comprehensive neuropsychological assessments for cognitive, learning, attention, memory, developmental, emotional, behavioural, medical, and legal concerns.",
  alternates: { canonical: "/assessments" },
};

export default function AssessmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Neuropsychological assessment"
        title={<>Insight, built from evidence.</>}
        intro="A comprehensive assessment brings together clinical interviews, standardized testing, record reviews, and questionnaires to clarify strengths, needs, and practical next steps."
      />

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">What we explore</p>
              <h2>Questions deserve a complete picture.</h2>
            </div>
            <div>
              <p className="lead">
                Assessments may address legal, medical, cognitive, learning,
                attention, memory, developmental, emotional, and behavioural
                concerns — and guide recommendations for home, school, work,
                healthcare, or legal contexts.
              </p>
            </div>
          </Reveal>
          <div className="area-grid">
            {assessmentAreas.map((area, index) => (
              <Reveal key={area} className="area-item" delay={(index % 3) * 70}>
                {area} <span>{String(index + 1).padStart(2, "0")}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">What an assessment may include</p>
            <h2>A thorough process, tailored to the question.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <p>
              Depending on the referral, a comprehensive neuropsychological
              assessment may include:
            </p>
            <ul className="detail-list">
              {assessmentProcessIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--blue">
        <div className="shell">
          <Reveal>
            <p className="eyebrow eyebrow--light">The process</p>
            <h2>A careful path from question to clarity.</h2>
          </Reveal>
          <div className="timeline">
            {assessmentSteps.map((step, index) => (
              <Reveal key={step.number} className="timeline-row" delay={index * 70}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Who may benefit</p>
            <h2>Support across ages and life stages.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <p>
              We provide services for individuals ages 4 to 90. Referrals may
              arise from concerns about learning, development, attention,
              memory, behaviour, emotional wellbeing, illness, injury, or
              changes in daily functioning.
            </p>
            <p>
              The scope and structure of every assessment are tailored to the
              referral question and the individual—not selected from a
              one-size-fits-all package.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        title="Wondering if an assessment fits?"
        text="Share what you are hoping to understand. We can discuss the referral question, the assessment process, and an appropriate next step."
      />
    </>
  );
}
