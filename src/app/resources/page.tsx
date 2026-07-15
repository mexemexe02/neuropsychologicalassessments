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

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={<>Practical information for preparing and finding support.</>}
        intro="Use these guides to prepare for assessment or psychotherapy, understand referral and insurance questions, and know when to seek urgent help. Full clinician-reviewed leaflets can be added as practice materials arrive."
      />

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Preparing for assessment</p>
            <h2>Before a neuropsychological assessment.</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="detail-list">
              <li>Review appointment details and arrive as scheduled</li>
              <li>Take prescribed medications as usual unless told otherwise</li>
              <li>Bring glasses, hearing aids, and mobility supports</li>
              <li>Try to sleep and eat before the appointment</li>
              <li>Bring a medication list and relevant medical information</li>
              <li>Bring previous reports and school records when available</li>
              <li>Let the practice know about accessibility or sensory needs</li>
              <li>Avoid alcohol or non-prescribed substances before testing</li>
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
            <p className="eyebrow">Children and adolescents</p>
            <h2>Preparing a child or teen.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            <p>
              Use simple, reassuring language. Avoid framing the appointment as
              an “exam” that must be passed. Bring comfort items and snacks when
              appropriate, and share sensory or anxiety information with the
              practice beforehand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Documents</p>
            <h2>Information that may be helpful.</h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="detail-list">
              <li>Previous psychological or neuropsychological assessments</li>
              <li>Medical reports and a current medication list</li>
              <li>School records, report cards, and IEPs</li>
              <li>Workplace documentation when relevant</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Preparing for psychotherapy</p>
            <h2>What helps before the first session.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            <p>
              You do not need to prepare a detailed account of your life before
              the first session. It may be helpful to think about what is
              currently most difficult, what you hope will change, and any
              questions you have about the therapist&apos;s approach.
            </p>
            <ul className="detail-list">
              <li>Choose a private, reasonably quiet space for virtual sessions</li>
              <li>Check your internet connection and device beforehand</li>
              <li>Have emergency contact information available for virtual care when required</li>
              <li>Consider writing down medications, relevant diagnoses, and major stressors</li>
              <li>Tell the therapist about accessibility, cultural, spiritual, or identity considerations that matter to you</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">Referrals, fees &amp; privacy</p>
            <h2>Practical information before you begin.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={80}>
            <h3>Referrals</h3>
            <p>
              A physician&apos;s referral may not always be required to contact
              the practice. Referral requirements can depend on the service, the
              referral question, the payer, or the organization requesting an
              assessment. Third-party referrals may involve different consent,
              reporting, and confidentiality arrangements — these will be
              explained before the service begins.
            </p>
            <h3>Fees and insurance</h3>
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
            <h3>Privacy and electronic communication</h3>
            <p>
              Personal health information is handled in accordance with
              applicable privacy legislation, professional standards, and practice
              policies. Email and text messaging are convenient but may not be
              fully secure. Please use them primarily for scheduling and
              administrative communication, and avoid sending detailed clinical
              or health information.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--blue">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow eyebrow--light">Urgent and crisis support</p>
            <h2>This website is not an emergency service.</h2>
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
            <p className="eyebrow">Practical questions</p>
            <h2>Resource FAQs.</h2>
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
            <p className="eyebrow">Resource categories</p>
            <h2>External supports we can curate over time.</h2>
          </Reveal>
          <div className="tag-list" style={{ marginTop: "2rem" }}>
            {resourceCategories.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Reveal className="intro-copy" delay={80}>
            <p>
              Specific external links will be reviewed with the practice before
              publication so crisis and education resources stay accurate.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        title="Ready to take a next step?"
        text="Request a complimentary 15-minute consultation to ask about services, preparation, referrals, or timing."
      />
    </>
  );
}
