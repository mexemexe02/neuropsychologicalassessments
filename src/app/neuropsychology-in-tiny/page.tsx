import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Neuropsychology in Tiny, Ontario",
  description:
    "Center for Neuropsychology and Psychotherapy is in Tiny, Ontario. In-person neuropsychological assessment and virtual psychotherapy, with a complimentary 15-minute consultation.",
  alternates: { canonical: "/neuropsychology-in-tiny" },
};

export default function TinyLandingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tiny, Ontario"
        title={<>Neuropsychological assessment and psychotherapy in Tiny, Ontario.</>}
        intro="The office is in Tiny Township. Assessment testing is in person here. Psychotherapy is available virtually. A complimentary 15-minute consultation is the usual first step."
      />

      <section className="section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">The office</p>
            <h2>Where to find us</h2>
            <p className="contact-address">
              {site.name}
              <br />
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </p>
            <p className="service-note">
              <strong>Hours</strong>
              <br />
              {site.hours}
            </p>
            <p className="service-note">
              Phone or text {site.phone}
              <br />
              {site.email}
            </p>
            <p className="service-note">{site.serviceNote}</p>
          </div>
          <div className="intro-copy">
            <p>
              People contact this practice when they need a clearer picture of
              attention, learning, memory, or everyday functioning, or when they
              want psychotherapy for anxiety, trauma, grief, or related adult
              concerns.
            </p>
            <p>
              Neuropsychological assessments are available for children,
              adolescents, adults, and older adults. Psychotherapy is for
              adults. Dr. Sylvie Sauriol provides assessment (English and
              French). Sebastian Jose provides psychotherapy for adults and
              contributes to assessment work within his role.
            </p>
            <p>
              We do not list other towns as extra office locations. If you are
              travelling to Tiny, the consultation is the place to ask about
              fit, format, and timing.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">Services at this location</p>
            <h2>What we actually offer</h2>
          </div>
          <div className="intro-copy">
            <p>
              Assessment may include interviews, standardized testing, record
              review, questionnaires, feedback, and a written report. Separate
              pages describe{" "}
              <Link href="/assessments/traumatic-brain-injury">
                traumatic brain injury
              </Link>{" "}
              and{" "}
              <Link href="/assessments/medico-legal">medico-legal</Link>{" "}
              assessment when that is the question being asked.
            </p>
            <p>
              Psychotherapy is collaborative and paced with you. There is also
              specialized counselling for men with a history of sexual abuse,
              and a page on addiction and self-esteem.
            </p>
            <p>
              Assessment fees are discussed after you contact the practice.
              Psychotherapy session fees are listed on the clinicians page.
            </p>
            <p className="ranking-links ranking-links--after">
              <Link href="/assessments">Assessments</Link>
              <Link href="/psychotherapy">Psychotherapy</Link>
              <Link href="/clinicians">Clinicians</Link>
              <Link href="/faq">Common questions</Link>
              <Link href="/contact">Book a Free 15-Minute Consultation</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
