import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

type ConsultationCtaProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
};

export function ConsultationCta({
  eyebrow = "A thoughtful first step",
  title = "Let’s clarify what you need.",
  text = "A complimentary 15-minute consultation gives us a chance to understand your concerns and discuss the most appropriate next step.",
}: ConsultationCtaProps) {
  return (
    <section className="section section--soft">
      <div className="shell">
        <Reveal className="consultation-cta">
          <div>
            <p className="eyebrow">{eyebrow}</p>
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
