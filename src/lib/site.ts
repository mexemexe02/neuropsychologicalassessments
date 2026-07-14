// Brand matches the live domain: neuropsychologicalassessments.com
// Contact email local-part is separate and can stay as Sebastian provided.
export const site = {
  name: "Neuropsychological Assessments",
  shortName: "Assessments",
  tagline: "Neuropsychological assessment and psychotherapy for ages 4 to 90",
  domain: "https://www.neuropsychologicalassessments.com",
  phone: "705-321-8146",
  phoneHref: "tel:+17053218146",
  email: "drsauriolassociates@neuropsychologicalassessments.com",
} as const;

export const navItems = [
  { label: "Assessments", href: "/assessments" },
  { label: "Psychotherapy", href: "/psychotherapy" },
  { label: "Clinicians", href: "/clinicians" },
  { label: "Resources", href: "/resources" },
] as const;

export const assessmentAreas = [
  "Legal",
  "Medical",
  "Cognitive",
  "Learning",
  "Attention",
  "Memory",
  "Developmental",
  "Emotional",
  "Behavioural",
] as const;

// Named to match Sebastian’s brief: interviews, testing, record reviews,
// questionnaires, recommendations, and written reports.
export const assessmentProcessIncludes = [
  "Clinical interviews",
  "Standardized testing",
  "Record reviews",
  "Questionnaires",
  "Individualized recommendations",
  "Written reports",
] as const;

export const assessmentSteps = [
  {
    number: "01",
    title: "Understand",
    text: "A clinical interview helps us understand your history, concerns, and the questions the assessment should answer.",
  },
  {
    number: "02",
    title: "Evaluate",
    text: "Standardized testing, questionnaires, and relevant record reviews create a detailed picture of strengths and needs.",
  },
  {
    number: "03",
    title: "Clarify",
    text: "Findings are integrated to support diagnostic clarity and practical, individualized recommendations.",
  },
  {
    number: "04",
    title: "Guide",
    text: "You receive feedback and a written report designed to help guide care, learning, treatment, or next steps.",
  },
] as const;

export const therapyConcerns = [
  "Anxiety",
  "Depression",
  "Trauma & PTSD",
  "Stress & burnout",
  "Grief",
  "Relationship difficulties",
  "Emotional regulation",
  "Anger",
  "Self-esteem",
  "Life transitions",
  "Adjustment to illness or injury",
  "Cognitive changes",
] as const;

export const therapyApproaches = [
  "Cognitive Behavioural Therapy",
  "Cognitive Processing Therapy",
  "Schema Therapy",
  "CBT for Psychosis",
  "Motivational Interviewing",
  "Solution-Focused Therapy",
  "Narrative Therapy",
] as const;
