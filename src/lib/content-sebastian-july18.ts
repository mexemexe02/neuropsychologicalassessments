/**
 * Jul 18, 2026 email from Sebastian Jose — exact client wording.
 * Do not invent additional clinical claims.
 */

export const assessmentTopicLinks = [
  {
    id: "overview",
    label: "Overview",
    href: "/assessments",
  },
  {
    id: "tbi",
    label: "Traumatic Brain Injury",
    href: "/assessments/traumatic-brain-injury",
  },
  {
    id: "medico-legal",
    label: "Medico-Legal Assessments",
    href: "/assessments/medico-legal",
  },
] as const;

export const tbiAssessment = {
  eyebrow: "Assessments",
  title: "Traumatic Brain Injury",
  lead: "Understanding cognitive, emotional, and functional changes following injury.",
  intro:
    "A traumatic brain injury can affect many areas of functioning, including:",
  affectedAreas: [
    "Attention and concentration",
    "Learning and memory",
    "Processing speed",
    "Planning and organization",
    "Problem-solving",
    "Language and communication",
    "Emotional regulation",
    "Fatigue and mental endurance",
    "Behaviour and personality",
    "Work, school, and daily functioning",
  ],
  visibilityNote:
    "The effects of a brain injury are not always immediately visible. Some individuals may continue to experience cognitive, emotional, physical, or behavioural symptoms even after the initial injury has medically stabilized.",
  assessmentClarifies:
    "A neuropsychological assessment can help clarify the nature and extent of these changes and determine how they may be affecting everyday life.",
  mayHelpIntro: "A TBI assessment may help:",
  mayHelp: [
    "Identify cognitive strengths and areas of difficulty",
    "Clarify changes from previous levels of functioning",
    "Examine the interaction among cognitive, emotional, physical, and medical factors",
    "Support rehabilitation and treatment planning",
    "Identify strategies for managing memory, attention, fatigue, and executive-function difficulties",
    "Guide return-to-work or return-to-school planning",
    "Inform recommendations for accommodations and daily supports",
    "Establish a baseline for monitoring recovery or change over time",
  ],
  contextNote:
    "Assessment findings are interpreted within the broader context of the individual’s medical history, injury characteristics, emotional wellbeing, pain, sleep, medication use, education, occupational background, and current functional concerns.",
} as const;

export const acquiredBrainInjury = {
  title: "Acquired Brain Injury",
  paragraphs: [
    "Changes in brain functioning may also occur following stroke, anoxia, infection, neurological illness, surgery, tumour, or other medical conditions.",
    "Assessment may help clarify how these conditions affect cognitive, emotional, behavioural, and adaptive functioning and may support rehabilitation, treatment planning, and long-term care decisions.",
  ],
} as const;

export const medicoLegalAssessment = {
  eyebrow: "Assessments",
  title: "Medico-Legal Assessments",
  lead: "Independent and comprehensive assessment for legal and insurance-related matters.",
  intro: [
    "Medico-legal neuropsychological assessments may be requested when cognitive, emotional, behavioural, or functional changes are relevant to a legal, insurance, disability, or compensation matter.",
    "These assessments are conducted objectively and are guided by the specific referral questions provided by the referring party.",
  ],
  examineIntro: "Depending on the nature of the referral, the assessment may examine:",
  examine: [
    "Cognitive functioning following injury or illness",
    "Attention, memory, processing speed, and executive functioning",
    "Emotional and psychological functioning",
    "Functional limitations and everyday impact",
    "Consistency between reported concerns, clinical history, behavioural observations, and test findings",
    "Treatment and rehabilitation needs",
    "Workplace, educational, or daily-living accommodations",
    "Prognosis and expected functional course, where clinically appropriate",
  ],
  processIntro: "The medico-legal process may include:",
  process: [
    "Review of medical, rehabilitation, employment, educational, and legal records",
    "Clinical and collateral interviews",
    "Standardized neuropsychological and psychological testing",
    "Assessment of symptom validity and performance validity, where appropriate",
    "Integration of test findings with documented history and functional information",
    "A detailed written report addressing the referral questions",
  ],
  independence: [
    "Medico-legal assessments are different from treatment services. The evaluator’s role is to provide an independent professional opinion based on the available evidence and assessment findings.",
    "The purpose, limits of confidentiality, intended recipients of the report, and responsibilities of each party will be explained before the assessment begins.",
  ],
  whenTitle: "When might a medico-legal assessment be requested?",
  whenIntro: "A medico-legal assessment may be relevant in matters involving:",
  when: [
    "Motor vehicle accidents",
    "Traumatic brain injury",
    "Workplace injuries",
    "Disability claims",
    "Personal injury litigation",
    "Insurance-related questions",
    "Functional or cognitive impairment",
    "Return-to-work planning",
    "Treatment and rehabilitation recommendations",
    "Questions about the effects of injury on daily functioning",
  ],
  scopeNote:
    "The scope of each assessment is determined by the referral question, available documentation, clinical circumstances, and applicable professional standards.",
  whyTitle: "Why a comprehensive assessment matters",
  why: [
    "Cognitive symptoms may be influenced by multiple factors. These can include neurological injury, pain, fatigue, sleep disturbance, emotional distress, medication effects, pre-existing conditions, and environmental demands.",
    "A comprehensive neuropsychological assessment considers these factors together rather than relying on a single test score or symptom report.",
    "This integrated approach helps provide a more accurate understanding of the individual’s functioning and supports recommendations that are specific, practical, and clinically relevant.",
  ],
} as const;

export const educationTbi = {
  eyebrow: "Education",
  title: "Traumatic Brain Injury",
  sections: [
    {
      title: "What is a traumatic brain injury?",
      paragraphs: [
        "A traumatic brain injury occurs when an external force affects the brain. This may result from a fall, motor vehicle collision, sports injury, workplace incident, assault, or another form of trauma.",
        "Brain injuries can range from mild to severe. The term “mild” refers to the initial medical features of the injury and does not necessarily mean that the person’s ongoing symptoms are minor.",
      ],
    },
    {
      title: "Possible effects of TBI",
      paragraphs: [
        "The effects of a traumatic brain injury vary from person to person.",
        "Some individuals experience changes in:",
      ],
      list: [
        "Attention and concentration",
        "Short-term memory",
        "Processing speed",
        "Planning and organization",
        "Word-finding",
        "Mental flexibility",
        "Emotional regulation",
        "Irritability",
        "Sleep",
        "Fatigue",
        "Sensitivity to noise or light",
        "Headaches or dizziness",
        "Ability to manage work, school, or household responsibilities",
      ],
      afterList: [
        "Symptoms may improve over time, remain stable, or fluctuate depending on fatigue, stress, pain, sleep, and environmental demands.",
      ],
    },
    {
      title: "Why symptoms can be difficult to understand",
      paragraphs: [
        "After a brain injury, cognitive, emotional, and physical symptoms often overlap.",
        "For example, poor sleep, chronic pain, anxiety, depression, medication effects, and fatigue may all affect concentration and memory. This can make it difficult to determine what is contributing to the person’s difficulties.",
        "A comprehensive assessment can help clarify these interacting factors.",
      ],
    },
    {
      title: "When should an assessment be considered?",
      paragraphs: ["A neuropsychological assessment may be helpful when:"],
      list: [
        "Cognitive symptoms continue after the injury",
        "There are concerns about memory, attention, or executive functioning",
        "The person is having difficulty returning to work or school",
        "Daily responsibilities have become harder to manage",
        "Emotional or behavioural changes have emerged",
        "Treatment providers need more information for rehabilitation planning",
        "There are questions related to disability, insurance, or legal matters",
        "A baseline is needed to monitor recovery or future change",
      ],
    },
    {
      title: "Supporting recovery",
      paragraphs: [
        "Recovery from TBI is individualized. Helpful supports may include:",
      ],
      list: [
        "Gradual return to activity",
        "Structured routines",
        "Scheduled rest breaks",
        "Reduced multitasking",
        "Written reminders and calendars",
        "Environmental modifications",
        "Sleep and fatigue management",
        "Psychological support",
        "Occupational, physical, or speech-language rehabilitation",
        "Workplace or academic accommodations",
        "Medical follow-up",
      ],
      afterList: [
        "Recommendations should be based on the individual’s symptoms, assessment findings, medical status, and daily demands.",
      ],
    },
    {
      title: "Important note",
      paragraphs: [
        "The information provided on this page is intended for general education. It does not replace medical evaluation, emergency care, diagnosis, or individualized neuropsychological assessment.",
        "Anyone experiencing new or worsening neurological symptoms following an injury should seek appropriate medical attention.",
      ],
    },
  ],
} as const;
