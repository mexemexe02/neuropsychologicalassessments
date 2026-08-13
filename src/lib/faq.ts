import { assessmentFaqs, resourceFaqs, therapyFaqs } from "@/lib/content";
import { site } from "@/lib/site";

/** Visible Q&A for /faq. Answers are copied from the live site, hours, or NAP. */
export const rankingFaqs = [
  {
    question: "Where is the office?",
    answer: `The practice is at ${site.addressLine1}, ${site.addressLine2}.`,
  },
  {
    question: "What are the hours?",
    answer: site.hours,
  },
  {
    question: "Is care in person or virtual?",
    answer: site.serviceNote,
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Prospective clients may request a complimentary 15-minute consultation by phone, text, email, or the consultation form. The practice will confirm whether the requested service is available and appropriate.",
  },
  assessmentFaqs[0],
  assessmentFaqs[1],
  assessmentFaqs[2],
  assessmentFaqs[5],
  assessmentFaqs[6],
  therapyFaqs[0],
  therapyFaqs[5],
  resourceFaqs[2],
] as const;
