import { rankingFaqs } from "@/lib/faq";
import { site } from "@/lib/site";

// Stable node ids so the WebSite, clinic, and clinician nodes can reference
// each other across pages (Google merges them into one entity graph).
const CLINIC_ID = `${site.domain}/#clinic`;
const WEBSITE_ID = `${site.domain}/#website`;

/**
 * MedicalClinic JSON-LD.
 * Only facts that are visible on the site: NAP, hours, languages, services.
 * No geo, ratings, or social sameAs until those facts are proven.
 */
export function medicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": CLINIC_ID,
    name: site.name,
    description: site.description,
    url: `${site.domain}/`,
    telephone: site.telephoneE164,
    email: site.email,
    // PNG share card + real logo file (SVG og images are not rendered by
    // Facebook/LinkedIn/iMessage, so the PNG is the one Google should use).
    image: `${site.domain}/og-image.png`,
    logo: `${site.domain}/images/logo-brain-tree.png`,
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
    // Clinicians page: Dr. Sauriol offers services in English and French.
    availableLanguage: ["English", "French"],
    // Matches the two service pillars named on the home page.
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Neuropsychological assessment",
        description:
          "Comprehensive neuropsychological assessments for children, adolescents, adults, and older adults. In person.",
        url: `${site.domain}/assessments/`,
      },
      {
        "@type": "PsychologicalTreatment",
        name: "Psychotherapy for adults",
        description:
          "Evidence-based psychotherapy for adults. Virtual services available.",
        url: `${site.domain}/psychotherapy/`,
      },
    ],
  };
}

/**
 * WebSite JSON-LD. Lets Google show the practice name (not the bare domain)
 * as the site name in results. No SearchAction: the site has no search box.
 */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${site.domain}/`,
    name: site.name,
    inLanguage: "en-CA",
    publisher: { "@id": CLINIC_ID },
  };
}

/**
 * Person JSON-LD for /clinicians. Wording mirrors the visible bios; the
 * headshots are the same files shown on the page. `affiliation` is used
 * instead of `employee` because the employment relationship is not stated.
 */
export function cliniciansJsonLd() {
  const url = `${site.domain}/clinicians/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${url}#sylvie-sauriol`,
        name: "Dr. Sylvie Sauriol",
        honorificPrefix: "Dr.",
        honorificSuffix: "Psy.D.",
        jobTitle: "Psychologist, Neuropsychologist",
        description:
          "Psychologist with 20 years of experience in neuropsychological assessment for children, adolescents, adults, and older adults.",
        knowsLanguage: ["en", "fr"],
        image: `${site.domain}/images/dr-sylvie-sauriol-headshot.png`,
        url,
        affiliation: { "@id": CLINIC_ID },
      },
      {
        "@type": "Person",
        "@id": `${url}#sebastian-jose`,
        name: "Sebastian Jose",
        honorificSuffix: "MPsy, MTh, RPQ",
        jobTitle: "Registered Psychotherapist (Qualifying)",
        description:
          "Registered Psychotherapist (Qualifying) providing collaborative, trauma-informed psychotherapy for adults.",
        knowsLanguage: ["en"],
        image: `${site.domain}/images/sebastian-jose-headshot.jpg`,
        url,
        affiliation: { "@id": CLINIC_ID },
      },
    ],
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
