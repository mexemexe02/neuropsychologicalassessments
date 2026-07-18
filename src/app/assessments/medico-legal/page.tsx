import type { Metadata } from "next";
import Link from "next/link";
import { AssessmentTopicNav } from "@/components/assessment-topic-nav";
import { ConsultationCta } from "@/components/consultation-cta";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { medicoLegalAssessment } from "@/lib/content-sebastian-july18";

export const metadata: Metadata = {
  title: "Medico-Legal Assessments",
  description:
    "Independent and comprehensive medico-legal neuropsychological assessment for legal and insurance-related matters.",
  alternates: { canonical: "/assessments/medico-legal" },
};

export default function MedicoLegalAssessmentsPage() {
  const m = medicoLegalAssessment;

  return (
    <>
      <PageHero
        eyebrow={m.eyebrow}
        title={<>{m.title}</>}
        intro={
          <>
            <p className="lead">{m.lead}</p>
            {m.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </>
        }
        actions={
          <>
            <Link href="/contact" className="button">
              Book a Free 15-Minute Consultation <ArrowUpRight />
            </Link>
            <Link href="/contact/#request" className="text-link">
              Ask About a Medico-Legal Assessment <ArrowUpRight />
            </Link>
          </>
        }
      />

      <AssessmentTopicNav active="medico-legal" />

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <h2>What the assessment may examine</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ marginBottom: "1.25rem" }}>
              {m.examineIntro}
            </p>
            <ul className="detail-list">
              {m.examine.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <h2>The medico-legal process</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ marginBottom: "1.25rem" }}>
              {m.processIntro}
            </p>
            <ul className="detail-list">
              {m.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="intro-copy" style={{ paddingTop: "1.5rem" }}>
              {m.independence.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{m.whenTitle}</h2>
            <p className="lead">{m.whenIntro}</p>
          </Reveal>
          <ul className="detail-list">
            {m.when.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Reveal className="intro-copy" delay={80}>
            <p>{m.scopeNote}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{m.whyTitle}</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            {m.why.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        eyebrow=""
        title="Questions about a medico-legal referral?"
        text="A complimentary 15-minute consultation can help clarify whether a medico-legal neuropsychological assessment may be appropriate for the referral question and next steps."
      />
    </>
  );
}
