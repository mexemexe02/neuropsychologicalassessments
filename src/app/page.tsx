import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import {
  homeAssessmentConcerns,
  homeBeginSteps,
  homeTherapyConcerns,
} from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.shortName} | Thoughtful care. Clear next steps.`,
  },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero__content">
          <Reveal>
            <p className="eyebrow">{site.tagline}</p>
            <h1>
              Neuropsychological assessment and psychotherapy, centred on
              understanding.
            </h1>
          </Reveal>
          <div className="home-hero__intro">
            <Reveal delay={120}>
              <p className="lead">
                We provide comprehensive neuropsychological assessments for
                children, adolescents, adults, and older adults, as well as
                evidence-based psychotherapy for adults.
              </p>
              <p className="lead">
                Our approach combines careful listening, clinical expertise, and
                individualized recommendations to help you better understand your
                concerns and determine meaningful next steps.
              </p>
              <p className="service-note">{site.serviceNote}</p>
            </Reveal>
            <Reveal className="hero-actions" delay={220}>
              <Link href="/contact" className="button">
                Book a Free 15-Minute Consultation <ArrowUpRight />
              </Link>
              <Link href="/#services" className="text-link">
                Explore Our Services <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell intro-grid">
          <Reveal>
            <h2>Understanding begins with listening.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={120}>
            <p>
              People seek support for many different reasons. You may be
              concerned about attention, learning, memory, emotional wellbeing,
              behaviour, trauma, or a change in everyday functioning. You may
              also be looking for psychotherapy to help you manage distress,
              understand difficult experiences, and move forward with greater
              confidence.
            </p>
            <p>
              We begin by listening carefully to your concerns and helping you
              identify the service that best fits your needs.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section section--flush-top">
        <div className="shell">
          <Reveal className="service-plane">
            <div className="service-plane__content">
              <div>
                <p className="eyebrow eyebrow--light">
                  Neuropsychological Assessment
                </p>
                <h2>A clearer understanding of strengths and needs.</h2>
              </div>
              <div className="service-plane__footer">
                <div>
                  <p>
                    A neuropsychological assessment provides a detailed
                    understanding of how an individual thinks, learns, remembers,
                    processes information, regulates emotions, and manages
                    everyday demands.
                  </p>
                  <p>
                    Depending on the referral question, the assessment may
                    include clinical interviews, standardized testing,
                    questionnaires, review of relevant records, feedback,
                    individualized recommendations, and a comprehensive written
                    report.
                  </p>
                  <p>
                    Assessments are available for children, adolescents, adults,
                    and older adults.
                  </p>
                </div>
                <Link href="/assessments" className="text-link text-link--light">
                  Learn About Assessments <ArrowUpRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="service-plane service-plane--light">
            <div className="service-plane__content">
              <div>
                <p className="eyebrow">Psychotherapy</p>
                <h2>A collaborative space for meaningful change.</h2>
              </div>
              <div className="service-plane__footer">
                <div>
                  <p>
                    Psychotherapy provides a private and supportive space to
                    understand emotional difficulties, develop practical coping
                    strategies, and work toward meaningful personal goals.
                  </p>
                  <p>
                    We provide evidence-based psychotherapy for adults
                    experiencing concerns such as anxiety, depression, trauma,
                    post-traumatic stress, grief, stress, burnout, emotional
                    regulation difficulties, relationship concerns, and major
                    life transitions. We also provide specialized counselling for
                    men with a history of sexual abuse.
                  </p>
                  <p>
                    Therapy is individualized according to your needs, history,
                    culture, values, and pace.
                  </p>
                </div>
                <Link href="/psychotherapy/#men-sexual-abuse" className="text-link">
                  Learn About Psychotherapy <ArrowUpRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal className="content-header">
            <div>
              <h2>Areas we may help you explore</h2>
            </div>
          </Reveal>
          <div className="split-concerns">
            <Reveal>
              <h3>Assessment concerns</h3>
              <ul className="detail-list">
                {homeAssessmentConcerns.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <h3>Psychotherapy concerns</h3>
              <ul className="detail-list">
                {homeTherapyConcerns.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <h2>How to begin</h2>
          </Reveal>
          <div className="steps">
            {homeBeginSteps.map((step, index) => (
              <Reveal key={step.number} className="step" delay={index * 90}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="statement statement--left">
              Care can be both rigorous and compassionate.
            </p>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <p>
              We believe that effective care begins with careful listening. Our
              goal is to provide services that are professional,
              evidence-informed, respectful, and understandable.
            </p>
            <p>
              Whether you are seeking diagnostic clarity, practical
              recommendations, emotional support, or a better understanding of
              yourself or a family member, we aim to make the process as clear
              and comfortable as possible.
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}
