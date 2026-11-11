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
}

export type ContactContent = {
  eyebrow: string
  headline: string
  description: string
  email: string
}

export type ExperienceEntry = {
  title: string
  organization: string
  startDate: `${number}-${number}`
  endDate: `${number}-${number}` | null
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
  headline: 'I build reliable software for complex problems.',
  description:
    'Building scalable, enterprise-grade applications and intuitive digital experiences, with a growing focus on cloud engineering and applied AI.',
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
  email: 'dev.gurpreet.codes@gmail.com',
}

export const aboutContent: AboutContent = {
  eyebrow: 'A bit about me',
  headline: 'Building reliable software, from services to interfaces.',
  paragraphs: [
    "I'm a Software Development Engineer III with experience building and maintaining enterprise-grade software solutions. My work spans full-stack development, focusing on creating scalable applications, reliable systems, and intuitive user experiences.",
    "I'm passionate about software engineering, solving complex problems, and continuously exploring new technologies to build meaningful digital experiences.",
  ],
  groups: [
    {
      label: 'Languages & markup',
      items: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
    },
    {
      label: 'Frontend & mobile',
      items: [
        'React.js',
        'Redux',
        'Flutter',
        'Tailwind CSS',
        'Responsive design',
        'Accessibility',
      ],
    },
    {
      label: 'Backend & APIs',
      items: [
        'Spring Boot',
        'Node.js',
        'Express.js',
        'REST APIs',
        'GraphQL',
        'Microservices',
        'API design',
      ],
    },
    {
      label: 'Data & services',
      items: [
        'MongoDB',
        'Firebase',
        'PostgreSQL',
        'MySQL',
        'Redis',
        'Data modeling',
      ],
    },
    {
      label: 'Tools & workflow',
      items: [
        'Git',
        'GitHub',
        'Postman',
        'Figma',
        'Docker',
        'CI/CD',
        'Agile / Scrum Methodologies',
      ],
    },
    {
      label: 'Current interests',
      items: [
        'Cloud engineering',
        'AWS',
        'System design',
        'AI',
        'Agentic AI',
        'LLM integrations',
      ],
    },
  ],
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'SDE III',
    organization: 'Sabre India',
    startDate: '2025-07',
    endDate: null,
  },
  {
    title: 'SDE I',
    organization: 'Sabre India',
    startDate: '2023-07',
    endDate: '2025-06',
  },
  {
    title: 'Associate Intern',
    organization: 'Sabre India',
    startDate: '2023-01',
    endDate: '2023-06',
  },
  {
    title: 'Mobile App Development Intern',
    organization: 'Skyline Meridian',
    startDate: '2021-06',
    endDate: '2021-08',
  },
]

export const projects: Project[] = [
  {
    number: '01',
    title: 'Project One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    technologies: ['React', 'TypeScript'],
    liveLink: null,
    githubLink: null,
  },
  {
    number: '02',
    title: 'Project Two',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    technologies: ['Java', 'Spring Boot'],
    liveLink: null,
    githubLink: null,
  },
  {
    number: '03',
    title: 'Project Three',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    technologies: ['Node.js', 'Express.js'],
    liveLink: null,
    githubLink: null,
  },
  {
    number: '04',
    title: 'Project Four',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    technologies: ['Flutter', 'Firebase'],
    liveLink: null,
    githubLink: null,
  },
  {
    number: '05',
    title: 'Project Five',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    technologies: ['GraphQL', 'MongoDB'],
    liveLink: null,
    githubLink: null,
  },
  {
    number: '06',
    title: 'Project Six',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    technologies: ['AI', 'TypeScript'],
    liveLink: null,
    githubLink: null,
  },
]

