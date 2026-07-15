import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

type ConsultationCtaProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
};

export function ConsultationCta({
  eyebrow = "Begin with a conversation",
  title = "Not sure whether assessment or psychotherapy is right for you?",
  text = "A complimentary 15-minute consultation allows you to briefly explain what brings you here, ask practical questions, and learn about possible next steps.",
}: ConsultationCtaProps) {
  return (
    <section className="section section--soft">
      <div className="shell">
        <Reveal className="consultation-cta">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2>{title}</h2>
          </div>
          <div>
            <p>{text}</p>
            <Link href="/contact" className="button">
              Book a Free 15-Minute Consultation <ArrowUpRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
