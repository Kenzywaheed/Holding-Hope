export const knowledgeData = {
  overview: {
    title: "Understanding Down Syndrome (Trisomy 21)",
    subtitle: "A natural genetic variation bringing unique perspectives, unconditional love, and diverse human potential.",
    definition: "Down Syndrome is a naturally occurring chromosomal variation in which an individual is born with an extra copy (or partial copy) of chromosome 21. Instead of the typical 46 chromosomes, people with full Trisomy 21 have 47 chromosomes in their cells. This extra genetic material alters the course of development, leading to characteristic physical features, unique health considerations, and distinct learning profiles.",
    fastFacts: [
      { label: "Global Occurrence", value: "1 in 1,000 live births worldwide (WHO estimate)." },
      { label: "Origin", value: "Naturally occurring cell division event (nondisjunction)." },
      { label: "Life Expectancy", value: "Over 60+ years today (increased from 25 years in 1983 - US Congressional records)." },
      { label: "Core Strength", value: "Exceptional visual learning, deep empathy, and strong social memory." }
    ]
  },

  geneticTypes: [
    {
      id: "trisomy21",
      name: "Trisomy 21 (Nondisjunction)",
      prevalence: "95% of cases",
      description: "Caused by an error in cell division called nondisjunction during the development of the egg or sperm. Every single cell in the child's body contains 47 chromosomes (three copies of chromosome 21 instead of two).",
      keyInsight: "This is a random event that occurs at conception and is not caused by any environmental factor, lifestyle, or maternal fault."
    },
    {
      id: "translocation",
      name: "Translocation Down Syndrome",
      prevalence: "3% to 4% of cases",
      description: "An extra piece of chromosome 21 attaches (translocates) onto another chromosome, most often chromosome 14. The total number of chromosomes remains 46, but the extra genetic material of chromosome 21 is present.",
      keyInsight: "In approximately one-third of translocation cases, one parent may carry a balanced translocation without showing symptoms."
    },
    {
      id: "mosaicism",
      name: "Mosaic Down Syndrome",
      prevalence: "1% to 2% of cases",
      description: "A mixture of two types of cells: some cells contain the typical 46 chromosomes, while other cells contain 47 chromosomes with the extra chromosome 21. This happens after fertilization during early cell division.",
      keyInsight: "Children with mosaicism may show fewer physical traits and milder developmental delays, though variations remain wide."
    }
  ],

  physicalTraits: [
    {
      trait: "Almond-Shaped Eyes & Epicanthic Folds",
      explanation: "A gentle upward slant of the palpebral fissures, often accompanied by small skin folds at the inner corner of the eyes (epicanthic folds) and tiny, harmless white spots on the iris called Brushfield spots."
    },
    {
      trait: "Low Muscle Tone (Hypotonia)",
      explanation: "Babies are born with softer, more relaxed muscle tone. While this makes reaching physical milestones take more time, consistent physical therapy and maternal exercises strengthen muscle groups remarkably over time."
    },
    {
      trait: "Single Transverse Palmar Crease",
      explanation: "A single crease extending across the palm of the hand instead of the typical two separate creases. Hands and fingers are often slightly shorter and broader with a gentle curvature of the fifth finger (clinodactyly)."
    },
    {
      trait: "Gentle Facial Profile & Smaller Features",
      explanation: "A slightly flatter nasal bridge and smaller oral cavity, which can cause the tongue to rest forward. Smaller, lower-set ears that may have a softer top fold."
    },
    {
      trait: "Joint Laxity & Flexibility",
      explanation: "Greater range of motion in joints due to relaxed ligaments. Encouraging safe movement, supportive footwear, and core stability activities helps joint health."
    }
  ],

  cognitiveProfile: {
    title: "Cognitive Strengths & Learning Style",
    summary: "Children with Down syndrome possess a distinct neurodevelopmental profile. Rather than viewing this as a limitation, understanding how they process information empowers educators and parents to unlock their remarkable abilities.",
    strengths: [
      {
        title: "Strong Visual Learners",
        desc: "They excel at learning through images, videos, visual schedules, sign language, and written words before speaking."
      },
      {
        title: "High Empathy & Social Awareness",
        desc: "Deeply intuitive at reading facial expressions, body language, and emotions. They thrive in warm, encouraging social atmospheres."
      },
      {
        title: "Imitative & Observational Mastery",
        desc: "They learn exceptionally well by watching parents, teachers, and peers demonstrate an action before trying it themselves."
      },
      {
        title: "Rich Long-Term Memory",
        desc: "Strong capacity to remember routines, familiar people, meaningful experiences, and music once mastered."
      }
    ],
    growthAreas: [
      {
        title: "Slower Processing Speed",
        desc: "Needs an extra 5 to 10 seconds to receive questions, process verbal input, and formulate responses. Patience is vital."
      },
      {
        title: "Auditory Short-Term Memory",
        desc: "Spoken instructions with 3+ steps can quickly fade. Pairing speech with gestures or pictures bridges this gap."
      },
      {
        title: "Fine Motor Precision",
        desc: "Hypotonia affects finger strength for pencil grip and buttoning, which blossoms with occupational therapy play."
      }
    ]
  },

  healthGuidelines: [
    {
      system: "Cardiovascular Health",
      screening: "Echocardiogram at birth / infant stage",
      notes: "Approximately 40-50% of infants are born with a congenital heart defect (such as AVSD or VSD). Modern pediatric cardiac surgery has extraordinarily high success rates, enabling children to thrive normally."
    },
    {
      system: "Thyroid Function",
      screening: "Blood test at birth, 6 months, 12 months, and annually",
      notes: "Hypothyroidism is more common. Early detection and daily gentle thyroxine medication maintain optimal energy, growth, and cognitive development."
    },
    {
      system: "Vision & Eye Care",
      screening: "Pediatric ophthalmology exam by 6 months, then annual",
      notes: "Refractive errors (nearsightedness, farsightedness), strabismus (crossed eyes), and tear duct blockages are common and easily corrected with glasses or gentle therapies."
    },
    {
      system: "Audiology & Hearing",
      screening: "Newborn hearing test, then every 6 months until age 3",
      notes: "Narrow ear canals and fluid buildup (glue ear) can cause fluctuating hearing loss, which directly impacts speech. Grommets (ear tubes) provide immediate clarity."
    },
    {
      system: "Sleep & Respiratory",
      screening: "Polysomnography (sleep study) around age 3-4",
      notes: "Obstructive sleep apnea can occur due to low muscle tone and smaller airways. Identifying it prevents fatigue and supports daytime learning."
    },
    {
      system: "Gastrointestinal & Celiac",
      screening: "Screening blood test around age 2-3",
      notes: "Higher incidence of celiac disease. A gluten-free diet if diagnosed restores energy, gut absorption, and overall vitality."
    }
  ],

  earlyInterventionPillars: [
    {
      name: "Physical Therapy (PT)",
      focus: "Gross Motor Development",
      description: "Focuses on head control, rolling, sitting, crawling, and walking. Physical therapists help children compensate for low muscle tone and joint laxity with healthy biomechanics.",
      maternalRole: "Mothers integrate PT into daily play: tummy time with colorful mirror toys, assisted crawling courses, and balance ball games."
    },
    {
      name: "Speech & Language Therapy (SLP)",
      focus: "Communication & Oral-Motor",
      description: "Addresses oral-motor coordination for swallowing and feeding, as well as receptive and expressive communication through baby signs, visual symbols, and speech sounds.",
      maternalRole: "Mothers use Makaton/sign language early, sing repetitive melodies, narrate daily activities, and blow bubbles to train lips and breath."
    },
    {
      name: "Occupational Therapy (OT)",
      focus: "Fine Motor & Self-Care Skills",
      description: "Nurtures finger dexterity, hand-eye coordination, sensory integration, and daily independence like holding a spoon, dressing, and pencil grasp.",
      maternalRole: "Mothers introduce tactile sensory bins, play dough squishing, stacking wooden blocks, and finger foods."
    },
    {
      name: "Specialized & Inclusive Education",
      focus: "Cognitive & Social Inclusion",
      description: "Individualized Education Plans (IEP), peer modeling in mainstream classrooms, adapted curriculum with visual supports and multisensory manipulatives.",
      maternalRole: "Mothers advocate for inclusive classrooms where their child learns side-by-side with peers, inspiring kindness and true belonging."
    }
  ]
};
