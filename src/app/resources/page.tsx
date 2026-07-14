import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { ResourceCards } from "@/components/resource-cards";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Resources & Education",
  description:
    "Clear, accessible information about neuropsychological assessment, psychotherapy, and beginning care.",
  alternates: { canonical: "/resources" },
};

const faqs = [
  {
    question: "Do I need a referral?",
    answer:
      "Referral requirements can depend on the service and the purpose of the assessment. Contact the practice and we can clarify the appropriate next step for your situation.",
  },
  {
    question: "How long does an assessment take?",
    answer:
      "The length and number of appointments vary according to age, referral question, records, and the testing required. The expected process is discussed before an assessment begins.",
  },
  {
    question: "What should I bring?",
    answer:
      "Relevant medical, educational, psychological, or legal records may be helpful. The practice will let you know which documents are appropriate for your particular appointment.",
  },
  {
    question: "Is a free consultation a therapy session?",
    answer:
      "No. It is a brief opportunity to discuss what you are looking for, ask practical questions, and consider whether the service and clinician may be a suitable fit.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources & education"
        title={<>Clear information makes care easier to navigate.</>}
        intro="Practical information for clients, families, and referral sources — so assessment, psychotherapy, and getting started feel easier to navigate."
      />

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <p className="eyebrow">Resource library</p>
              <h2>Start with the essentials.</h2>
            </div>
            <p className="lead">
              These guides cover the questions people ask most often. Additional
              clinician-reviewed materials can be added as pamphlets and
              educational content become available.
            </p>
          </Reveal>
          <ResourceCards />
        </div>
      </section>

      <section className="section">
        <div className="shell content-header">
          <Reveal>
            <p className="eyebrow">Common questions</p>
            <h2>A few things people often ask.</h2>
          </Reveal>
          <Reveal className="faq-list" delay={100}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        title="Have a question we haven’t answered?"
        text="The consultation is a simple way to ask about services, referrals, timing, or what kind of support may fit your needs."
      />
    </>
  );
}
