import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
// Static imports so GitHub Pages basePath/assetPrefix is applied automatically.
import sauriolHeadshot from "@/assets/dr-sylvie-sauriol-headshot.png";
import sebastianHeadshot from "@/assets/sebastian-jose-headshot.jpg";

export const metadata: Metadata = {
  title: "Clinicians",
  description:
    "Meet Dr. Sylvie Sauriol, neuropsychologist, and Sebastian Jose, registered psychotherapist (qualifying).",
  alternates: { canonical: "/clinicians" },
};

const sauriolFocus = [
  "Comprehensive neuropsychological assessment",
  "Attention and executive functioning",
  "Learning and academic concerns",
  "Developmental and neurodivergent conditions",
  "Memory and cognitive changes",
  "Medical and neurological conditions",
  "Emotional and behavioural functioning",
  "Diagnostic clarification",
  "Individualized recommendations for school, work, treatment, and daily life",
] as const;

const joseFocus = [
  "Anxiety and persistent worry",
  "Depression and reduced motivation",
  "Trauma and post-traumatic stress",
  "Grief, loss, and adjustment",
  "Stress and occupational burnout",
  "Anger and emotional regulation",
  "Attachment and relationship concerns",
  "Self-esteem, identity, and life transitions",
  "Adjustment to illness, injury, or changes in functioning",
] as const;

export default function CliniciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinicians"
        title={<>Experienced care. A collaborative approach.</>}
        intro={
          <>
            <p className="lead">
              Our clinicians bring complementary experience in
              neuropsychological assessment, psychotherapy, mental health, and
              person-centred care. We are committed to providing services that
              are thoughtful, evidence-informed, respectful, and clearly
              explained.
            </p>
            <p>
              Each service is provided within the clinician&apos;s professional
              role and scope of practice. When collaboration or supervision is
              part of the service, this will be explained before care begins.
            </p>
          </>
        }
      />

      <section className="section section--soft">
        <div className="shell">
          <article className="clinician">
            <Reveal>
              <div className="portrait-photo">
                <Image
                  src={sauriolHeadshot}
                  alt="Dr. Sylvie Sauriol, Psy.D. Neuropsychologist"
                  fill
                  sizes="(max-width: 960px) min(90vw, 22rem), 28vw"
                  className="portrait-photo__img"
                  priority
                />
              </div>
            </Reveal>
            <Reveal className="clinician__bio" delay={100}>
              <h2>Dr. Sylvie Sauriol, Psy.D. Neuropsychologist</h2>
              <p className="clinician__languages">
                Services available in English and French / Services offerts en
                anglais et en français
              </p>
              <p>
                Dr. Sylvie Sauriol is a psychologist with 20 years of experience
                in neuropsychological assessment. Her work focuses on
                understanding the relationship between cognitive functioning,
                emotional wellbeing, developmental history, medical factors, and
                everyday functioning.
              </p>
              <p>
                Dr. Sauriol provides comprehensive assessments for children,
                adolescents, adults, and older adults. She works with individuals
                and families seeking greater clarity regarding attention,
                learning, memory, developmental differences, emotional and
                behavioural functioning, neurological or medical conditions, and
                changes in cognitive functioning.
              </p>
              <p>
                Her approach emphasizes careful clinical interpretation, clear
                communication, and practical recommendations. Assessment findings
                are considered within the individual&apos;s broader life context
                rather than interpreted as isolated test scores.
              </p>
              <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
                Areas of professional focus
              </p>
              <ul className="detail-list">
                {sauriolFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </article>

          <article className="clinician">
            <Reveal>
              <div className="portrait-photo">
                <Image
                  src={sebastianHeadshot}
                  alt="Sebastian Jose, Registered Psychotherapist (Qualifying)"
                  fill
                  sizes="(max-width: 960px) min(90vw, 22rem), 28vw"
                  className="portrait-photo__img"
                  priority
                />
              </div>
            </Reveal>
            <Reveal className="clinician__bio" delay={100}>
              <h2>Sebastian Jose, MPsy, MTh, RPQ</h2>
              <p>
                Sebastian Jose is a Registered Psychotherapist (Qualifying) who
                provides psychotherapy for adults and contributes to
                neuropsychological assessment services within his professional
                role and under appropriate supervision.
              </p>
              <p>
                His psychotherapy work is collaborative, trauma-informed, and
                individualized. He supports adults experiencing anxiety,
                depression, trauma-related symptoms, grief, stress, burnout,
                emotional regulation difficulties, relationship concerns,
                identity questions, and major life transitions.
              </p>
              <p>
                Sebastian draws from evidence-informed approaches including
                cognitive behavioural therapy, cognitive processing therapy,
                attachment-informed therapy, schema-informed work, and practical
                emotion-regulation strategies. His background in psychology,
                psychotherapy, and spiritual care supports a whole-person
                approach that respects each client&apos;s values, culture,
                beliefs, and lived experience.
              </p>
              <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
                Areas of professional focus
              </p>
              <ul className="detail-list">
                {joseFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* Fees from Sebastian’s Jul 18 evening email — Sylvie’s rates TBD. */}
              <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
                Psychotherapy fees
              </p>
              <ul className="detail-list">
                <li>Initial assessment — $150</li>
                <li>Follow-up sessions — $120</li>
                <li>
                  Sliding scale offered (details provided at the first
                  consultation)
                </li>
              </ul>
            </Reveal>
          </article>

          <Reveal className="intro-copy clinician-closing">
            <h2>Our collaborative approach</h2>
            <p>
              Good care depends on a clear understanding of the question being
              asked. We take time to identify the purpose of the service, explain
              the process, and help clients understand what to expect.
            </p>
            <p>
              When clinically appropriate and with consent, collaboration may
              include family members, physicians, schools, rehabilitation
              providers, or other professionals involved in the individual&apos;s
              care.
            </p>
            <p>
              We aim to communicate in language that is accurate, accessible, and
              useful. Our goal is not only to describe concerns, but also to
              identify strengths, practical supports, and meaningful next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        eyebrow=""
        title="Finding the right clinician"
        text="A complimentary 15-minute consultation can help determine which clinician and service may be most appropriate for your needs. The consultation also provides an opportunity to ask about availability, fees, service format, and the next steps in beginning care."
      />
    </>
  );
}
