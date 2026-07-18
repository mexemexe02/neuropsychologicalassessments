import type { Metadata } from "next";
import Link from "next/link";
import { AssessmentTopicNav } from "@/components/assessment-topic-nav";
import { ConsultationCta } from "@/components/consultation-cta";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import {
  acquiredBrainInjury,
  tbiAssessment,
} from "@/lib/content-sebastian-july18";

export const metadata: Metadata = {
  title: "Traumatic Brain Injury Assessment",
  description:
    "Neuropsychological assessment for traumatic brain injury and acquired brain injury — understanding cognitive, emotional, and functional changes following injury.",
  alternates: { canonical: "/assessments/traumatic-brain-injury" },
};

export default function TraumaticBrainInjuryAssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow={tbiAssessment.eyebrow}
        title={<>{tbiAssessment.title}</>}
        intro={
          <>
            <p className="lead">{tbiAssessment.lead}</p>
          </>
        }
        actions={
          <>
            <Link href="/contact" className="button">
              Book a Free 15-Minute Consultation <ArrowUpRight />
            </Link>
            <Link href="/education/traumatic-brain-injury" className="text-link">
              TBI education overview <ArrowUpRight />
            </Link>
          </>
        }
      />

      <AssessmentTopicNav active="tbi" />

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="feature-block">
            <p className="lead">{tbiAssessment.intro}</p>
          </Reveal>
          <ul className="detail-list">
            {tbiAssessment.affectedAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Reveal className="intro-copy" delay={80}>
            <p>{tbiAssessment.visibilityNote}</p>
            <p>{tbiAssessment.assessmentClarifies}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <h2>{tbiAssessment.mayHelpIntro.replace(/:$/, "")}</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="detail-list">
              {tbiAssessment.mayHelp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="intro-copy" style={{ paddingTop: "1.5rem" }}>
              {tbiAssessment.contextNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="acquired-brain-injury" className="section section--soft">
        <div className="shell">
          <Reveal className="feature-block">
            <h2>{acquiredBrainInjury.title}</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            {acquiredBrainInjury.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        eyebrow=""
        title="Wondering whether a TBI assessment is appropriate?"
        text="During a complimentary 15-minute consultation, you can briefly describe your concerns, ask questions about the process, and discuss whether an assessment through our practice may be an appropriate next step."
      />
    </>
  );
}
