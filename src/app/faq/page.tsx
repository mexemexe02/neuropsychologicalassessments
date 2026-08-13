import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { rankingFaqs } from "@/lib/faq";
import { faqPageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Common questions",
  description:
    "Hours, location in Tiny, in-person assessment, virtual therapy, referrals, fees, and how to book a complimentary 15-minute consultation.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <PageHero
        eyebrow="Questions"
        title={<>Common questions about assessment and psychotherapy.</>}
        intro="These answers come from the practice hours, address, and service pages. They are written for people deciding whether to book a consultation — not as a substitute for clinical advice."
      />

      <section className="section">
        <div className="shell">
          <FaqList items={rankingFaqs} />
          <p className="ranking-links ranking-links--after">
            <Link href="/neuropsychology-in-tiny">Neuropsychology in Tiny</Link>
            <Link href="/contact">Book a Free 15-Minute Consultation</Link>
            <a href={site.phoneHref}>Call or text {site.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
