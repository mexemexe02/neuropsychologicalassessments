import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { insuranceQuestions, resourceCategories, resourceFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical information for preparing for assessment or psychotherapy, referrals, insurance questions, and finding support.",
  alternates: { canonical: "/resources" },
};

const assessmentPrep = [
  "Review the appointment date, time, location, and expected duration.",
  "Take prescribed medications as usual unless your healthcare provider or the assessment team gives different instructions.",
  "Bring glasses, hearing aids, mobility supports, or other items you normally use.",
  "Try to obtain adequate sleep and eat before the appointment.",
  "Bring a list of current medications and relevant medical information.",
  "Bring previous assessment reports, school records, report cards, individualized education plans, or medical records when requested.",
  "Let the practice know in advance about language, accessibility, sensory, mobility, or communication needs.",
  "Avoid alcohol or non-prescribed substances before testing.",
] as const;

const childPrep = [
  "Use simple and reassuring language. Explain that the appointment will involve different activities that help the clinician understand how the child learns and solves problems.",
  "Avoid describing the assessment as an examination that must be passed.",
  "Tell the child that some activities may feel easy and others may feel difficult.",
  "Encourage effort without creating pressure about results.",
  "Bring glasses, hearing devices, medications, comfort items, snacks, and relevant school information.",
  "Share information about sensory needs, anxiety, communication preferences, or behavioural supports before the appointment.",
] as const;

const helpfulDocuments = [
  "Referral letter, if applicable",
  "Previous psychological, neuropsychological, psychiatric, speech-language, occupational therapy, or educational assessments",
  "Medical or neurological reports",
  "Medication list",
  "School report cards and individualized education plans",
  "Workplace or disability documentation relevant to the referral",
  "Completed questionnaires provided by the practice",
] as const;

const therapyPrep = [
  "Choose a private and reasonably quiet space for virtual sessions.",
  "Check your internet connection and device before the appointment.",
  "Have emergency contact information and your current location available for virtual care when required.",
  "Consider writing down medications, relevant diagnoses, and major current stressors.",
  "Tell the therapist about accessibility, communication, cultural, spiritual, or identity-related considerations that matter to you.",
] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Practical information for preparing and finding support.</>}
        intro="This page provides practical guidance for people considering an assessment or psychotherapy, along with general information about referrals, insurance, privacy, and urgent support."
      />

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <h2>Preparing for a neuropsychological assessment</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="detail-list">
              {assessmentPrep.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="intro-copy" style={{ paddingTop: "1.25rem" }}>
              Testing is intended to understand how you function. You do not need
              to study, and you are not expected to perform perfectly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <h2>Preparing a child or adolescent</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="detail-list">
              {childPrep.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <h2>Documents that may be helpful</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="detail-list">
              {helpfulDocuments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <h2>Preparing for psychotherapy</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            <p>
              You do not need to prepare a detailed account of your life before
              the first session. It may be helpful to think about what is
              currently most difficult, what you hope will change, and any
              questions you have about the therapist&apos;s approach.
            </p>
            <ul className="detail-list">
              {therapyPrep.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <h2>Referrals</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            <p>
              A physician&apos;s referral may not always be required to contact
              the practice. Referral requirements can depend on the service, the
              referral question, the payer, or the organization requesting an
              assessment.
            </p>
            <p>
              Third-party referrals may involve different consent, reporting, and
              confidentiality arrangements. These will be explained before the
              service begins.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <h2>Fees and insurance</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            <p>
              Fees depend on the type and complexity of the service. Expected
              fees, payment arrangements, cancellation terms, and the estimated
              scope of work will be discussed before services begin.
            </p>
            <p>
              Some extended health-benefit plans cover psychological or
              psychotherapy services. Coverage varies. Before booking, consider
              asking your insurer:
            </p>
            <ul className="detail-list">
              {insuranceQuestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              The practice cannot guarantee reimbursement. Clients remain
              responsible for understanding their benefits and for payment of
              fees.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <h2>Privacy and electronic communication</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            <p>
              Personal health information is handled in accordance with
              applicable privacy legislation, professional standards, and practice
              policies.
            </p>
            <p>
              Email and text messaging are convenient but may not be fully
              secure. Please use them primarily for scheduling and administrative
              communication, and avoid sending detailed clinical or health
              information.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--blue">
        <div className="shell split-grid">
          <Reveal>
            <h2>Urgent and crisis support</h2>
          </Reveal>
          <Reveal className="intro-copy intro-copy--light" delay={80}>
            <p>
              This practice website and consultation request form are not
              monitored as emergency services.
            </p>
            <p>
              If you are in immediate danger or require urgent medical or
              psychiatric assistance, call 911 or go to the nearest emergency
              department.
            </p>
            <p>
              For current crisis-line and community support information, consult
              official provincial, federal, or local health resources. Crisis
              contact details should be reviewed regularly before being posted
              because services and availability can change.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell content-header">
          <Reveal>
            <h2>Frequently asked practical questions</h2>
          </Reveal>
          <Reveal className="faq-list" delay={80}>
            {resourceFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal>
            <h2>Recommended resource categories</h2>
          </Reveal>
          <div className="tag-list" style={{ marginTop: "2rem" }}>
            {resourceCategories.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Reveal className="intro-copy" delay={80}>
            <p>
              Only reputable, current organizations should be linked. External
              links should be reviewed periodically to ensure that they remain
              accurate and active.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        eyebrow="Contact"
        title="Book a Free 15-Minute Consultation"
        text="Please avoid including sensitive personal or health information in email, text messages, or the initial consultation request."
      />
    </>
  );
}
