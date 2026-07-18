import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationCta } from "@/components/consultation-cta";
import { ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { educationTbi } from "@/lib/content-sebastian-july18";

export const metadata: Metadata = {
  title: "Traumatic Brain Injury — Education",
  description:
    "General education about traumatic brain injury, possible effects, when assessment may help, and supporting recovery.",
  alternates: { canonical: "/education/traumatic-brain-injury" },
};

export default function EducationTraumaticBrainInjuryPage() {
  return (
    <>
      <PageHero
        eyebrow={educationTbi.eyebrow}
        title={<>{educationTbi.title}</>}
        intro={
          <p className="lead">{educationTbi.sections[0].title}</p>
        }
        actions={
          <>
            <Link
              href="/assessments/traumatic-brain-injury"
              className="button"
            >
              TBI assessment services <ArrowUpRight />
            </Link>
            <Link href="/education" className="text-link">
              All education topics <ArrowUpRight />
            </Link>
          </>
        }
      />

      {educationTbi.sections.map((section, index) => (
        <section
          key={section.title}
          className={index % 2 === 0 ? "section section--soft" : "section"}
        >
          <div className="shell">
            <Reveal className="feature-block">
              <h2>{section.title}</h2>
            </Reveal>
            <Reveal className="intro-copy" delay={80}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              {"list" in section && section.list ? (
                <ul className="detail-list" style={{ marginTop: "1rem" }}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {"afterList" in section && section.afterList
                ? section.afterList.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))
                : null}
            </Reveal>
          </div>
        </section>
      ))}

      <ConsultationCta
        eyebrow=""
        title="Looking for assessment related to TBI?"
        text="If you are considering a neuropsychological assessment after a brain injury, a complimentary 15-minute consultation can help you ask practical questions and consider next steps."
      />
    </>
  );
}
