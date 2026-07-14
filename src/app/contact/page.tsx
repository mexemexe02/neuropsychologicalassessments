import type { Metadata } from "next";
import { ConsultationForm } from "@/components/consultation-form";
import { Mail, Phone } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Request a complimentary 15-minute consultation with Neuropsychological Assessments, or contact the practice by phone, text, or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book / contact"
        title={<>Begin with a brief conversation.</>}
        intro="A complimentary 15-minute consultation gives you space to share what you are looking for, ask practical questions, and consider the most appropriate next step."
      />

      <section className="section">
        <div className="shell contact-layout">
          <Reveal className="contact-details">
            <p className="eyebrow">Contact the practice</p>
            <h2>Choose what feels easiest.</h2>
            <p>
              You may call, text, or email the practice directly. Please avoid
              including sensitive health information in email or text.
            </p>
            <div className="contact-methods">
              <a href={site.phoneHref}>
                <Phone />
                <span>Phone or text<br />{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail />
                <span>Email<br />{site.email}</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ConsultationForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-grid">
          <Reveal>
            <p className="eyebrow">What happens next</p>
            <h2>Simple, respectful, and without pressure.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={100}>
            <p>
              During a consultation, we will briefly discuss your concerns,
              answer questions about the service, and identify whether an
              assessment or psychotherapy appointment may be appropriate.
            </p>
            <p>
              The consultation is not an assessment or therapy session, and
              there is no obligation to proceed.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
