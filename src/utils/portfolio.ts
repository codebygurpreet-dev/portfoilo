export type Project = {
  number: string
  title: string
  description: string
  technologies: string[]
  liveLink: ProjectLink | null
  githubLink: ProjectLink | null
}

export type ProjectLink = {
  label: string
  href: string
}

export type NavigationLink = {
  label: string
  href: `#${string}`
}

export type SocialPlatform = 'github' | 'instagram' | 'linkedin'

export type SocialLink = {
  platform: SocialPlatform
  label: string
  href: string
}

export type HeroContent = {
  role: string
  headline: string
  headlinePrefix: string
  animatedPhrases: readonly [string, ...string[]]
  description: string
  primaryAction: {
    label: string
    href: `#${string}`
  }
  secondaryAction: {
    label: string
    href: `#${string}`
  }
  focusAreas: string[]
}

export type AboutGroup = {
  label: string
  items: string[]
}

export type AboutContent = {
  eyebrow: string
  headline: string
  paragraphs: string[]
  groups: AboutGroup[]
  currentFocus: string[]
}

export type ContactContent = {
  eyebrow: string
  headline: string
  description: string
  resumeLink: ProjectLink
  email: string
  whatsappNumber: string
}

export type ExperienceHighlight = {
  outcome: string
  detail: string
}

export type ExperienceEntry = {
  title: string
  organization: string
  location: string
  startDate: `${number}-${number}`
  endDate: `${number}-${number}` | null
  impactHighlights: readonly [ExperienceHighlight, ...ExperienceHighlight[]]
}

export const siteName = 'Gurpreet Singh'

export const navigationLinks: NavigationLink[] = [
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    label: 'GitHub',
    href: 'https://github.com/codebygurpreet-dev',
  },
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/singhpreet_pbx/',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gurpreet-singh-837b2b1a6/',
  },
]

export const heroContent: HeroContent = {
  role: 'Software Development Engineer III',
  headline:
    'I build full-stack applications, agentic AI workflows, reliable systems, and scalable architectures.',
  headlinePrefix: 'I build',
  animatedPhrases: [
    'full-stack applications.',
    'agentic AI workflows.',
    'reliable systems.',
    'scalable architectures.',
  ],
  description:
    "At Sabre, I progressed from Associate Intern in 2023 to SDE III in 2025, building full-stack enterprise software. I'm currently exploring agentic AI and LLM integrations.",
  primaryAction: {
    label: 'Get in touch',
    href: '#contact',
  },
  secondaryAction: {
    label: 'Explore selected work',
    href: '#projects',
  },
  focusAreas: ['Enterprise systems', 'Cloud engineering', 'System design & AI'],
}

export const contactContent: ContactContent = {
  eyebrow: 'Start a conversation',
  headline: 'Good engineering starts with a conversation.',
  description:
    "For exciting engineering opportunities, meaningful collaborations, or discussions about building impactful digital products, I'd be glad to connect.",
  resumeLink: {
    label: 'View my resume',
    href: 'https://drive.google.com/file/d/1Az9gZ5hZuXD8Sj7dIPCddOgRkpE4Ii_l/view?usp=sharing',
  },
  email: 'dev.gurpreet.codes@gmail.com',
  whatsappNumber: '+91 8437294774',
}

export const aboutContent: AboutContent = {
  eyebrow: 'A bit about me',
  headline: 'Building reliable software, from services to interfaces.',
  paragraphs: [
    'My recent work has centered on evolving established products: modernizing a Knockout.js/.NET application and moving legacy .NET APIs to Node.js microservices, without disrupting the front end.',
    'I see modernization as successful only when it improves both sides of a product: a faster, more reliable experience for users and a codebase the team can confidently extend. I work with product, design, and architecture partners to weigh those outcomes before delivery.',
  ],
  groups: [
    {
      label: 'Web applications',
      items: ['React', 'Redux', 'Knockout.js'],
    },
    {
      label: 'APIs & services',
      items: ['Node.js', '.NET APIs', 'GraphQL', 'Microservices'],
    },
    {
      label: 'Mobile applications',
      items: ['Flutter', 'Firebase', 'Realtime Database', 'Authentication'],
    },
  ],
  currentFocus: ['AWS', 'Agentic AI', 'LLM integrations'],
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'SDE III',
    organization: 'Sabre',
    location: 'Remote',
    startDate: '2025-07',
    endDate: null,
    impactHighlights: [
      {
        outcome: 'Contributed to 10+ strategic features',
        detail:
          'Shaped roadmap and technical feasibility with product, design, and architecture partners.',
      },
      {
        outcome: '25% fewer post-release defects',
        detail: 'Led code review and modernization work.',
      },
      {
        outcome: '15% higher team velocity',
        detail: 'Improved delivery through code review and modernization.',
      },
      {
        outcome: '35% better maintainability and developer efficiency',
        detail: 'Improved codebase health through modernization.',
      },
    ],
  },
  {
    title: 'SDE I',
    organization: 'Sabre',
    location: 'Bengaluru, India',
    startDate: '2023-07',
    endDate: '2025-06',
    impactHighlights: [
      {
        outcome: '40% improvement in frontend performance',
        detail:
          'Modernized a Knockout.js/.NET application with React, Redux, Node.js, and GraphQL.',
      },
      {
        outcome: '10+ features',
        detail: 'Led architecture and estimates.',
      },
      {
        outcome: '50% faster intern onboarding',
        detail: 'Mentored two interns.',
      },
    ],
  },
  {
    title: 'Associate Intern',
    organization: 'Sabre',
    location: 'Bengaluru, India',
    startDate: '2023-01',
    endDate: '2023-06',
    impactHighlights: [
      {
        outcome: 'Migrated 10+ legacy .NET APIs',
        detail: 'Moved them to Node.js microservices without frontend disruption.',
      },
      {
        outcome: '35% lower average server response time',
        detail: 'Improved performance and reliability.',
      },
      {
        outcome: 'Contributed 3+ hackathon ideas',
        detail: 'Collaborated across teams to prototype and present solutions.',
      },
    ],
  },
  {
    title: 'Mobile App Development Intern',
    organization: 'Skyline Meridian',
    location: 'Remote',
    startDate: '2021-06',
    endDate: '2021-08',
    impactHighlights: [
      {
        outcome: 'Shipped a Flutter/Firebase quiz app in six weeks',
        detail: 'Built cross-platform with real-time data and authentication.',
      },
      {
        outcome: 'Owned delivery end to end',
        detail: 'Led the project from UI/UX through deployment.',
      },
    ],
  },
]

export const projects: Project[] = [
  {
    number: '01',
    title: 'Real-Time Messaging App',
    description:
      'A cross-platform Flutter messaging app where users can create accounts, find contacts, and exchange messages in real time through Firebase and Cloud Firestore, with support for emoji in conversations.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Authentication',
      'Cloud Firestore',
    ],
    liveLink: {
      label: 'View live demo',
      href: 'https://github.com/codebygurpreet-dev/Chatting-App',
    },
    githubLink: {
      label: 'View on github',
      href: 'https://github.com/codebygurpreet-dev/Chatting-App',
    },
  },
  {
    number: '02',
    title: 'Health & Fitness Planner',
    description:
      'A Flutter fitness companion with Firestore-powered workout and diet plans. Users can filter available plans and explore dedicated detail screens for routines and meal guidance.',
    technologies: ['Flutter', 'Dart', 'Cloud Firestore'],
    liveLink: {
      label: 'View live demo',
      href: 'https://github.com/codebygurpreet-dev/Health-And-Fitness-App',
    },
    githubLink: {
      label: 'View on github',
      href: 'https://github.com/codebygurpreet-dev/Health-And-Fitness-App',
    },
  },
  {
    number: '03',
    title: 'Voice-Activated Personal Assistant',
    description:
      'A Python voice assistant that handles spoken commands with speech recognition and spoken responses. It can provide time and information lookups, tell jokes, play music on YouTube, and track frequently requested songs for recommendations.',
    technologies: [
      'Python',
      'Speech Recognition'
    ],
    liveLink: {
      label: 'View live demo',
      href: 'https://github.com/codebygurpreet-dev/Python_AI_project',
    },
    githubLink: {
      label: 'View on github',
      href: 'https://github.com/codebygurpreet-dev/Python_AI_project',
    },
  },
]
