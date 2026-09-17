export const teachingData = {
  header: {
    title: "A Mother's Heart, A Child's Bloom",
    subtitle: "A practical, compassionate guide on how a mother gently guides, teaches, and unlocks the boundless potential of her child with Down Syndrome.",
    quote: "She didn't teach with urgency or comparison. She taught with open arms, meeting him exactly where he was, knowing that flowers don't compete with each other—they just bloom in their own warm sunshine."
  },

  corePrinciples: [
    {
      number: "01",
      title: "The Power of Micro-Steps (Task Analysis)",
      description: "Break complex tasks into tiny, achievable micro-actions. Where a typical child might learn 'put on your coat', the mother teaches: (1) find the armhole, (2) push fingers through, (3) pull up the collar. Each tiny win receives genuine applause and confidence.",
      icon: "Sparkles"
    },
    {
      number: "02",
      title: "Hand-Over-Hand Scaffolding",
      description: "In the early stages, the mother places her warm hands gently over her child's hands to physically guide the motion—whether holding a spoon, stacking a block, or waving goodbye. Gradually, she fades her touch from hand to wrist, to elbow, until the child does it independently.",
      icon: "HeartHandshake"
    },
    {
      number: "03",
      title: "Visual Anchors Over Verbal Overload",
      description: "Children with Down syndrome are exceptional visual thinkers. Instead of repeating spoken commands, the mother uses visual picture schedules, point cards, and direct gestures. Visuals stay in the child's mind long after spoken words have faded away.",
      icon: "Eye"
    },
    {
      number: "04",
      title: "The 10-Second Golden Pause",
      description: "Neurological processing takes a little longer for a child with hypotonia and auditory processing differences. After asking a question or giving a cue, the mother waits 7 to 10 quiet seconds without interrupting. In that sacred silence, the child's response has room to form.",
      icon: "Clock"
    },
    {
      number: "05",
      title: "Singing & Rhythm as Memory Bridges",
      description: "Rhythm and melodies bypass cognitive resistance. The mother invents simple songs for hand-washing, putting away toys, and bedtime. The rhythm carries the steps in a joyous, non-stressful way.",
      icon: "Music"
    }
  ],

  teachingDomains: [
    {
      id: "speech",
      title: "Speech & Communication",
      focus: "From Gestures to Spoken Words",
      color: "sky",
      strategies: [
        {
          name: "Baby Sign Language (Makaton or simplified ASL signs)",
          whyItWorks: "Signing gives your child a voice before speech muscles fully coordinate.",
          ageRange: "6–9 months",
          safetyNote: null,
          description: "Sign language does not delay speech — research shows it supports and often accelerates it. Introducing signs for 'Milk', 'More', 'Eat', 'Play', and 'Help' around 6-9 months reduces frustration by giving the child a voice before speech muscles fully coordinate.",
          actionSteps: [
            "Always pair the spoken word with the physical sign while maintaining warm eye contact.",
            "Repeat in the natural context (e.g. sign 'More' every time offering another slice of fruit).",
            "Celebrate any approximate gesture with praise, even if fingers are not positioned perfectly."
          ]
        },
        {
          name: "The Mirror Game & Oral-Motor Play",
          whyItWorks: "Mirroring builds oral-motor awareness and social connection at the same time.",
          ageRange: "3–12 months",
          safetyNote: "Always supervise — small items can be choking hazards.",
          description: "Children love seeing their own joyful reflections. Sit before a large mirror making funny faces, sticking out your tongue, puffing cheeks, and kissing the glass to wake up facial nerves and muscle tone.",
          actionSteps: [
            "Blow soft cotton balls across the dining table with a wide paper straw.",
            "Blow soap bubbles together and pop them using individual index fingers.",
            "Lick a gentle dab of yogurt or applesauce off the top lip to strengthen tongue elevation."
          ]
        },
        {
          name: "Vocal Turn-Taking & Echoing",
          whyItWorks: "Every sound your child makes is treated as real communication — which encourages more.",
          ageRange: "0–18 months",
          safetyNote: null,
          description: "Treating every babble, coo, and giggle as a meaningful conversation. When your child says 'Bah!', smile warmly, lean in, and reply: 'Bah! You love that blue ball, don't you?'",
          actionSteps: [
            "Maintain warm, unhurried eye-level contact and wait for their turn to respond.",
            "Imitate the child's sounds back to them with enthusiasm to encourage reciprocal dialogue.",
            "Read sturdy board books daily, pointing to animal illustrations and repeating rhythmic animal sounds."
          ]
        }
      ]
    },
    {
      id: "motor",
      title: "Physical & Motor Milestones",
      focus: "Building Strength through Play",
      color: "sage",
      strategies: [
        {
          name: "Loving Tummy Time Progression",
          whyItWorks: "Tummy time builds the core strength needed for rolling, sitting, and crawling.",
          ageRange: "0–9 months",
          safetyNote: null,
          description: "Babies with lower muscle tone find tummy time challenging at first. Transforming it into an intimate bonding ritual rather than an exercise chore makes all the difference.",
          actionSteps: [
            "Lie on your back with baby resting comfortably on your chest, enjoying heart-to-heart closeness.",
            "Place an unbreakable baby-safe mirror or light-up musical toy directly in their line of vision.",
            "Place a small rolled-up soft receiving blanket under the armpits for gentle chest elevation."
          ]
        },
        {
          name: "Little Fingers, Big Skills",
          whyItWorks: "Exploring textures builds the fine motor control needed for feeding and dressing.",
          ageRange: "6–24 months",
          safetyNote: "Use taste-safe materials only. Supervise closely.",
          description: "Fine motor control blossoms when little fingers explore varied textures, weights, and resistances through playful discovery.",
          actionSteps: [
            "Make homemade taste-safe playdough with flour, salt, and water for gentle squishing and rolling.",
            "Pick up puff cereals or blueberries with thumb and forefinger from an ice cube tray.",
            "Enjoy water play with soft kitchen sponges, squeezing water from one bowl into another."
          ]
        },
        {
          name: "Barefoot Adventures & Obstacle Play",
          whyItWorks: "Barefoot movement strengthens body awareness and balance.",
          ageRange: "9–36 months",
          safetyNote: "Clear the area of sharp objects. Stay within arm's reach.",
          description: "Going barefoot enhances proprioception (deep joint sensory awareness). Building soft living room obstacle courses with cushions and pillows encourages crawling, climbing, and weight shifting.",
          actionSteps: [
            "Encourage climbing over firm couch cushions on a soft rug to build core and hip strength.",
            "Hold both hands to practice gentle weight shifts and cruising side-steps along soft ottomans.",
            "Use a therapy or yoga ball: gently rock child forward and backward to trigger natural balancing reflexes."
          ]
        }
      ]
    },
    {
      id: "routines",
      title: "Daily Independence & Routines",
      focus: "Confidence in Everyday Life",
      color: "honey",
      strategies: [
        {
          name: "Visual Schedule Wall",
          whyItWorks: "Predictability reduces anxiety and morning resistance.",
          ageRange: "2–6 years",
          safetyNote: null,
          description: "Mount a magnetic or velcro visual board in the kitchen with real photos of your child brushing teeth, putting on socks, having breakfast, and playing.",
          actionSteps: [
            "Review the visual cards together each morning as a comforting daily grounding ritual.",
            "Let the child physically flip each card into a colorful 'Done!' pocket upon completion.",
            "Keep the sequence predictable, which provides reassurance and eliminates daily transition anxiety."
          ]
        },
        {
          name: "The 'You Finish It' Method for Dressing",
          whyItWorks: "Starting with the final step gives your child a win — and confidence to do more.",
          ageRange: "2–5 years",
          safetyNote: null,
          description: "Instead of having your child struggle through the entire task from scratch, complete 90% of the movement and invite them to complete the triumphant final step.",
          actionSteps: [
            "For pants: Pull them up to hips; child pulls them over waist and celebrates the big finish!",
            "For shoes: Slip the foot in; child happily presses the velcro strap closed.",
            "Gradually step back one step at a time until your child owns the complete dressing routine."
          ]
        },
        {
          name: "Family Table Participation",
          whyItWorks: "Meals are social, not just nutritional — chewing and smiling build oral-motor skills.",
          ageRange: "1–5 years",
          safetyNote: "Cut food into safe sizes. Never leave child unattended while eating.",
          description: "Mealtime is a joyful family celebration. Seating the child in an ergonomically supportive highchair with a solid footplate provides the stability needed for self-feeding.",
          actionSteps: [
            "Introduce thick-handled ergonomic utensils and soft silicone open training cups.",
            "Offer colorful soft finger foods (avocado spears, steamed carrot coins, soft banana).",
            "Model chewing with exaggerated, playful jaw movements, happy smiles, and shared conversation."
          ]
        }
      ]
    },
    {
      id: "emotional",
      title: "Emotional Co-Regulation & Bonding",
      focus: "The Unshakeable Safe Harbor",
      color: "lavender",
      strategies: [
        {
          name: "Calm First, Correct Later",
          whyItWorks: "A calm adult helps a child's nervous system settle — this is biology, not discipline.",
          ageRange: "Any age",
          safetyNote: null,
          description: "When sensory overload or fatigue triggers big feelings or meltdowns, recognize that an overwhelmed nervous system cannot process lectures. Become their anchor of tranquility.",
          actionSteps: [
            "Lower your voice tone and whisper comforting reassurance: 'You are safe. I am right here with you.'",
            "Offer deep-pressure hugs, gentle back rubs, or a cozy weighted blanket to calm the sensory system.",
            "Breathe slowly, deeply, and visibly; your child's mirror neurons will naturally align with your calm state."
          ]
        },
        {
          name: "The 'Peaceful Corner' (Not Time-Out)",
          whyItWorks: "A soothing space teaches self-regulation instead of punishment.",
          ageRange: "Any age",
          safetyNote: null,
          description: "Create an inviting, cozy nook in the bedroom with plush pillows, warm fairy lights, a favorite soft toy, and hypnotic sensory liquid bubblers.",
          actionSteps: [
            "Go to the cozy corner together to decompress, snuggle, and share a calming picture book.",
            "Teach a simple sign or gesture for 'Quiet Time' when the outside environment feels too loud.",
            "Reframe the space as a treasured sanctuary of restoration, never as isolation or penalty."
          ]
        },
        {
          name: "Celebrating the 'Personal Best'",
          whyItWorks: "Comparing to yesterday — not to others — builds lasting confidence.",
          ageRange: "Any age",
          safetyNote: null,
          description: "Release comparisons to typical milestones or neighborhood peers. Your child's only benchmark is their own growth, curiosity, and joy compared to yesterday.",
          actionSteps: [
            "Keep a 'Little Victories' jar: write down new gestures, sounds, or milestones on colorful paper slips.",
            "Open and read the memory slips on challenging days to remember just how far love has brought you.",
            "Cheer every effort with genuine warmth — effort is where neuroplasticity happens."
          ]
        }
      ]
    }
  ],

  mothersJournal: [
    {
      title: "The Day You Arrived: From Fear to Unconditional Wonder",
      author: "Elena, Mother of Lucas (age 6)",
      quote: "When the doctors spoke in solemn medical jargon, the room felt cold. But the moment they placed Lucas into my arms and he opened his starry eyes, the medical labels vanished. In front of me wasn't a diagnosis; in front of me was pure, radiant love.",
      body: "In the beginning, I was terrified I wouldn't be enough. I didn't have a medical degree, I wasn't a therapist. But what I had was motherhood. I learned that every song I sang, every strawberry we cut in half, every hand-over-hand spoon feed was therapy disguised as pure love. Today Lucas runs into my arms, counts in sign language, and hugs anyone feeling sad with unmatched kindness. He taught me what truly matters in life."
    },
    {
      title: "Finding the Music in the Slowness",
      author: "Maya, Mother of Samuel (age 9)",
      quote: "The world moves at a dizzying sprint. Samuel taught me how to walk, how to look at ants on the sidewalk, and how to savor every single syllable.",
      body: "We spent 8 months practicing how to jump with both feet off the floor. When that magical day came and his tiny feet left the carpet for one second, our living room turned into an Olympic stadium. My husband and I cried with joy. Raising Samuel has cured me of the toxic rush of modern life. We celebrate every breath, every triumph, and every gentle smile."
    },
    {
      title: "To the New Mother Reading This Right Now",
      author: "Sarah, Mother of Lily (age 14)",
      quote: "Take a deep breath. Wipe away those tears of uncertainty. You have been chosen for an extraordinary adventure of the heart.",
      body: "I remember looking in the mirror fifteen years ago, overwhelmed with Google searches and worst-case scenarios. If I could hug my past self, I would tell her: 'Lily is going to dance. She will write her name. She will tell hilarious jokes. She will have best friends, swim in the ocean, and show you a depth of grace you never knew existed.' Trust your instincts, love your baby fiercely, and watch them soar."
    }
  ]
};
