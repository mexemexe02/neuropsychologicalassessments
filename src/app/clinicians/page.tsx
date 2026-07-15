import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationCta } from "@/components/consultation-cta";
import { PageHero } from "@/components/page-hero";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Meet Our Clinicians",
  description:
    "Meet Dr. Sylvie Sauriol, neuropsychologist, and Sebastian Jose, registered psychotherapist (qualifying).",
  alternates: { canonical: "/clinicians" },
};

export default function CliniciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our clinicians"
        title={<>Experienced care. A collaborative approach.</>}
        intro="Our clinicians bring complementary experience in neuropsychological assessment, psychotherapy, mental health, and person-centred care. We are committed to providing services that are thoughtful, evidence-informed, respectful, and clearly explained."
      />

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="intro-copy intro-copy--narrow">
            <p>
              Each service is provided within the clinician&apos;s professional
              role and scope of practice. When collaboration or supervision is
              part of the service, this will be explained before care begins.
            </p>
          </Reveal>

          <article className="clinician">
            <Reveal>
              {/* TEMP: Replace with Dr. Sauriol’s approved headshot when it arrives. */}
              <PortraitPlaceholder initials="SS" />
            </Reveal>
            <Reveal className="clinician__bio" delay={100}>
              <p className="eyebrow">Neuropsychology</p>
              <h2>Dr. Sylvie Sauriol, Psy.D.</h2>
              <p className="clinician__credentials">Neuropsychologist</p>
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
                rather than interpreted as isolated test scores. Services are
                available in English and French.
              </p>
              <ul className="detail-list">
                <li>Comprehensive neuropsychological assessment</li>
                <li>Attention and executive functioning</li>
                <li>Learning and academic concerns</li>
                <li>Developmental and neurodivergent conditions</li>
                <li>Memory and cognitive changes</li>
                <li>Medical and neurological conditions</li>
                <li>Emotional and behavioural functioning</li>
                <li>Diagnostic clarification</li>
                <li>Services in English and French</li>
              </ul>
            </Reveal>
          </article>

          <article className="clinician">
            <Reveal>
              <div className="portrait-photo">
                <Image
                  src="/images/sebastian-jose-headshot.jpg"
                  alt="Sebastian Jose, Registered Psychotherapist (Qualifying)"
                  width={720}
                  height={900}
                  className="portrait-photo__img"
                  priority
                />
              </div>
            </Reveal>
            <Reveal className="clinician__bio" delay={100}>
              <p className="eyebrow">Psychotherapy</p>
              <h2>Sebastian Jose, MPsy, MTh, RPQ</h2>
              <p className="clinician__credentials">
                Registered Psychotherapist (Qualifying)
              </p>
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
              <ul className="detail-list">
                <li>Anxiety and persistent worry</li>
                <li>Depression and reduced motivation</li>
                <li>Trauma and post-traumatic stress</li>
                <li>Grief, loss, and adjustment</li>
                <li>Stress and occupational burnout</li>
                <li>Anger and emotional regulation</li>
                <li>Attachment and relationship concerns</li>
                <li>Self-esteem, identity, and life transitions</li>
                <li>Adjustment to illness, injury, or changes in functioning</li>
              </ul>
            </Reveal>
          </article>

          <Reveal className="intro-copy clinician-closing">
            <p className="eyebrow">Our collaborative approach</p>
            <h2>Clear questions. Useful next steps.</h2>
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
          </Reveal>
        </div>
      </section>

      <ConsultationCta
        title="Finding the right clinician"
        text="A complimentary 15-minute consultation can help determine which clinician and service may be most appropriate for your needs. The consultation also provides an opportunity to ask about availability, fees, service format, and the next steps in beginning care."
      />
    </>
  );
}
