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

/**
 * Jul 18, 2026 evening email (“Website - more data.”) — exact client wording.
 * Separate Psychotherapy tab / page: Addiction and Self-Esteem.
 */
export const therapyAddictionSelfEsteem = {
  eyebrow: "Psychotherapy",
  title: "Addiction and Self-Esteem",
  intro: [
    "Addiction and self-esteem are often closely connected. Some individuals use alcohol, substances, gambling, pornography, food, shopping, gaming, or other repetitive behaviours to cope with emotional pain, stress, loneliness, trauma, shame, or feelings of inadequacy.",
    "These behaviours may provide temporary relief, but over time they can contribute to further distress, relationship difficulties, reduced confidence, and a growing sense of losing control.",
    "Low self-esteem may develop through experiences such as criticism, rejection, bullying, abuse, neglect, academic or workplace struggles, relationship difficulties, or repeated feelings of failure. When a person holds negative beliefs about themselves, addictive behaviours may become a way of escaping painful thoughts and emotions.",
    "At the same time, the consequences of addiction can intensify shame, guilt, secrecy, and self-criticism, creating a difficult cycle.",
  ],
  signsHeading: "Signs That Support May Be Helpful",
  signsLead:
    "An individual may benefit from counselling or psychotherapy when they notice:",
  signs: [
    "Difficulty controlling substance use or repetitive behaviours",
    "Using alcohol, substances, gambling, pornography, food, or other activities to manage emotions",
    "Continuing a behaviour despite negative consequences",
    "Feeling ashamed, guilty, or disappointed in themselves",
    "Frequently comparing themselves to others",
    "Difficulty accepting compliments or recognizing personal strengths",
    "Fear of rejection, criticism, or failure",
    "People-pleasing or difficulty setting boundaries",
    "Relying on relationships, achievements, appearance, or external approval to feel valued",
    "Feeling unworthy, inadequate, or “not good enough”",
    "Withdrawing from others because of embarrassment or low confidence",
    "Repeated attempts to stop an addictive behaviour without lasting success",
  ],
  helpHeading: "How Therapy Can Help",
  helpIntro: [
    "Therapy provides a confidential and non-judgmental space to understand the emotional, psychological, and behavioural patterns that contribute to addiction and low self-esteem.",
    "Treatment is individualized and may include cognitive behavioural therapy, motivational interviewing, schema-informed therapy, trauma-informed care, emotional regulation strategies, and relapse-prevention planning.",
  ],
  helpMay: "Therapy may help individuals:",
  helpList: [
    "Identify triggers, urges, and high-risk situations",
    "Understand the function the addictive behaviour serves",
    "Develop healthier ways to manage stress and difficult emotions",
    "Challenge negative beliefs about themselves",
    "Reduce shame and excessive self-criticism",
    "Build confidence and a more balanced sense of self-worth",
    "Strengthen boundaries and communication skills",
    "Improve relationships and social support",
    "Develop strategies for managing cravings and preventing relapse",
    "Reconnect with personal values, goals, and meaningful activities",
  ],
  esteemHeading: "Building Self-Esteem During Recovery",
  esteemParagraphs: [
    "Recovery is not only about reducing or stopping an addictive behaviour. It also involves developing a healthier relationship with oneself.",
    "This may include learning to recognize personal strengths, tolerate mistakes, set realistic expectations, practise self-compassion, and make choices that are consistent with personal values.",
    "Self-esteem grows gradually through repeated experiences of accountability, healthy decision-making, meaningful connection, and personal achievement. Therapy can support this process by helping individuals move away from shame-based thinking and toward a more stable and realistic sense of self-worth.",
  ],
  approachHeading: "A Compassionate and Individualized Approach",
  approachParagraphs: [
    "Addiction is not viewed as a personal weakness or moral failure. It is often a complex response involving emotional distress, learned coping patterns, trauma, relationships, environmental factors, and biological vulnerability.",
    "Treatment focuses on understanding the whole person rather than defining someone by a diagnosis or behaviour.",
    "Support is available for individuals at different stages of change, including those who are uncertain about whether they want to stop, those actively working toward recovery, and those seeking support following a relapse.",
  ],
} as const;

/** Psychotherapy secondary tabs (Overview / featured focus pages). */
export const psychotherapyTopicLinks = [
  {
    id: "overview",
    label: "Overview",
    href: "/psychotherapy",
  },
  {
    id: "men-sexual-abuse",
    label: "Men & sexual abuse",
    href: "/psychotherapy/#men-sexual-abuse",
  },
  {
    id: "addiction",
    label: "Addiction and Self-Esteem",
    href: "/psychotherapy/addiction-and-self-esteem",
  },
] as const;

/**
 * Fees Sebastian supplied Jul 18, 2026 (Website - more data.).
 * Sylvie’s fee still pending from client.
 */
export const sebastianFees = {
  initialAssessment: "$150",
  followUp: "$120",
  note: "Sliding scale offered (details provided at the first consultation).",
} as const;

/**
 * Education hub focus list from Sebastian’s Jul 18 evening email.
 * Prefer linking live pages; keep short cards for topics still awaiting full articles.
 */
export const educationFocusTopics = [
  {
    title: "Understanding Neuropsychological Assessment",
    text: "A neuropsychological assessment is a comprehensive evaluation of cognitive, emotional, behavioural, and everyday functioning. It may include interviews, standardized testing, questionnaires, record review, behavioural observations, feedback, and a written report.",
    href: "/assessments" as string | undefined,
    linkLabel: "Learn about assessments" as string | undefined,
  },
  {
    title: "Traumatic Brain Injury",
    text: "Accessible education about what a TBI is, possible effects, when assessment may help, and recovery supports.",
    href: "/education/traumatic-brain-injury" as string | undefined,
    linkLabel: "Read TBI education" as string | undefined,
  },
  {
    title: "Neurodiversity and Neurodivergence",
    text: "Neurodiversity refers to natural variation in how human brains develop and function. A neuro-affirming approach recognizes both support needs and meaningful strengths.",
    href: undefined,
    linkLabel: undefined,
  },
  {
    title: "ADHD and Executive Functioning",
    text: "ADHD is associated with differences in attention regulation, impulse control, organization, and executive functioning. Executive functions support planning, initiation, flexible thinking, and goal-directed behaviour across school, work, and daily life.",
    href: undefined,
    linkLabel: undefined,
  },
  {
    title: "Learning Disorders",
    text: "A specific learning disorder may affect reading, written expression, mathematics, or a combination of academic skills. Assessment examines achievement alongside cognitive processes and educational history.",
    href: undefined,
    linkLabel: undefined,
  },
  {
    title: "Memory and Cognitive Changes",
    text: "Memory concerns can arise for many reasons. Neuropsychological assessment can help identify patterns of strength and difficulty and whether further medical investigation or support may be appropriate.",
    href: undefined,
    linkLabel: undefined,
  },
  {
    title: "Trauma, Anxiety, and Cognitive Functioning",
    text: "Anxiety and trauma can interfere with concentration, working memory, sleep, and confidence. Assessment and therapy can help distinguish primary cognitive difficulties from cognitive inefficiency related to emotional distress.",
    href: undefined,
    linkLabel: undefined,
  },
  {
    title: "Understanding an Assessment Report",
    text: "An assessment report summarizes findings, clarifies strengths and difficulties, and outlines practical recommendations. Full article content can be added as the education program develops.",
    href: undefined,
    linkLabel: undefined,
  },
] as const;
