import type { Metadata } from "next";
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
        title={<>Expertise, with humanity at its centre.</>}
        intro="Our clinicians bring distinct areas of training and experience together with a shared commitment to careful listening, individualized care, and clear guidance."
      />

      <section className="section section--soft">
        <div className="shell">
          <article className="clinician">
            <Reveal>
              {/* TEMP: Replace PortraitPlaceholder with Dr. Sauriol's approved headshot. */}
              <PortraitPlaceholder initials="SS" />
            </Reveal>
            <Reveal className="clinician__bio" delay={100}>
              <p className="eyebrow">Neuropsychology & psychology</p>
              <h2>Dr. Sylvie Sauriol</h2>
              <p className="clinician__credentials">
                PsyD · Registered Psychologist · Neuropsychologist
              </p>
              <p>
                Dr. Sylvie Sauriol is a registered psychologist and
                neuropsychologist with extensive experience providing
                psychological and neuropsychological assessments,
                psychotherapy, diagnostic clarification, and treatment
                recommendations.
              </p>
              <p>
                Her work has included private practice, forensic mental health,
                educational settings, and legal neuropsychological assessments.
              </p>
              <ul className="detail-list">
                <li>Neuropsychological assessment</li>
                <li>Psychological assessment</li>
                <li>Diagnostic clarification</li>
                <li>Treatment recommendations</li>
                <li>Services in English</li>
                <li>Services en français</li>
              </ul>
            </Reveal>
          </article>

          <article className="clinician">
            <Reveal>
              {/* TEMP: Replace PortraitPlaceholder with Sebastian's approved headshot. */}
              <PortraitPlaceholder initials="SJ" />
            </Reveal>
            <Reveal className="clinician__bio" delay={100}>
              <p className="eyebrow">Psychotherapy</p>
              <h2>Sebastian Jose</h2>
              <p className="clinician__credentials">
                MPsy · MTh · RP (Qualifying)
              </p>
              <p>
                Sebastian Jose provides evidence-based psychotherapy for adults
                experiencing anxiety, depression, trauma, PTSD, grief,
                adjustment difficulties, and complex mental health concerns.
              </p>
              <p>
                His clinical approach draws from Cognitive Behavioural Therapy,
                Cognitive Processing Therapy, Schema Therapy, CBT for Psychosis,
                Motivational Interviewing, Solution-Focused Therapy, and
                Narrative Therapy.
              </p>
              <p>
                His work emphasizes individualized and culturally responsive
                care.
              </p>
              <ul className="detail-list">
                <li>Anxiety & depression</li>
                <li>Trauma & PTSD</li>
                <li>Grief & adjustment</li>
                <li>Complex mental health</li>
                <li>Evidence-based care</li>
                <li>Culturally responsive practice</li>
              </ul>
            </Reveal>
          </article>
        </div>
      </section>

      <ConsultationCta
        title="The right clinical fit matters."
        text="Use a free 15-minute consultation to share what you are looking for and learn which clinician or service may be the best starting point."
      />
    </>
  );
}
