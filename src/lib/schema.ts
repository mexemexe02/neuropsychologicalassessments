import { rankingFaqs } from "@/lib/faq";
import { site } from "@/lib/site";

/** MedicalClinic JSON-LD. No geo, ratings, or sameAs until those facts are proven. */
export function medicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    description: site.description,
    url: site.domain,
    telephone: site.telephoneE164,
    email: site.email,
    image: `${site.domain}/og-image.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.postalAddress.streetAddress,
      addressLocality: site.postalAddress.addressLocality,
      addressRegion: site.postalAddress.addressRegion,
      postalCode: site.postalAddress.postalCode,
      addressCountry: site.postalAddress.addressCountry,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...site.openingHours.days],
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Tiny, Ontario",
    },
  };
}

/** FAQPage JSON-LD. Must match the visible questions and answers on /faq. */
export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rankingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
