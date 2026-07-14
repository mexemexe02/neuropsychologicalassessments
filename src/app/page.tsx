import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Neuropsychological Assessments | Assessment & Psychotherapy",
  },
  description:
    "Neuropsychological assessment and psychotherapy for individuals ages 4 to 90. Free 15-minute consultation available.",
  alternates: { canonical: "/" },
};

const steps = [
  ["01", "Free consultation", "Tell us what brings you here and ask questions about our services."],
  ["02", "A clear next step", "We’ll help determine whether assessment or psychotherapy fits your needs."],
  ["03", "Care, shaped around you", "Your experience is individualized, collaborative, and grounded in evidence."],
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero__content">
          <Reveal>
            <p className="eyebrow">Neuropsychological Assessments</p>
            <h1>Clarity for what comes next.</h1>
          </Reveal>
          <div className="home-hero__intro">
            <Reveal delay={120}>
              <p className="lead">
                Neuropsychological assessment and psychotherapy for individuals
                ages 4 to 90 — clear, professional, and easy to navigate.
              </p>
            </Reveal>
            <Reveal className="hero-actions" delay={220}>
              <Link href="/contact" className="button">
                Free 15-minute consultation <ArrowUpRight />
              </Link>
              <Link href="/assessments" className="text-link">
                Explore our services <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
        <span className="scroll-cue">Scroll to discover</span>
      </section>

      <section className="section">
        <div className="shell intro-grid">
          <Reveal>
            <p className="eyebrow">Ages 4 to 90</p>
            <h2>Understanding begins with listening.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={120}>
            <p>
              We provide neuropsychological assessment and psychotherapy services
              for individuals between the ages of 4 and 90.
            </p>
            <p>
              Assessments may address legal, medical, cognitive, learning,
              attention, memory, developmental, emotional, and behavioural
              concerns. Psychotherapy may support anxiety, depression, trauma,
              PTSD, stress, burnout, grief, relationship difficulties, and more.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="shell">
          <Reveal className="service-plane">
            <div className="service-plane__content">
              <div>
                <p className="eyebrow eyebrow--light">01 / Assessment</p>
                <h2>A clearer picture.</h2>
              </div>
              <div className="service-plane__footer">
                <p>
                  A comprehensive neuropsychological assessment may include
                  clinical interviews, standardized testing, record reviews,
                  questionnaires, recommendations, and a written report.
                </p>
                <Link href="/assessments" className="text-link text-link--light">
                  Explore assessments <ArrowUpRight />
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
                <p className="eyebrow">02 / Psychotherapy</p>
                <h2>Space to move forward.</h2>
              </div>
              <div className="service-plane__footer">
                <p>
                  Evidence-based psychotherapy offers a collaborative space to
                  understand difficult experiences, build new skills, and create
                  meaningful change.
                </p>
                <Link href="/psychotherapy" className="text-link">
                  Explore psychotherapy <ArrowUpRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">How to begin</p>
            <h2>A simple, considered start.</h2>
          </Reveal>
          <div className="steps">
            {steps.map(([number, title, text], index) => (
              <Reveal key={number} className="step" delay={index * 90}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className="shell">
          <p className="statement">
            Care can be rigorous and compassionate at the same time.
          </p>
        </Reveal>
      </section>
    </>
  );
}
