export const PERSONAL_INFO = {
  name: 'Eduardo José Lara Da Silva',
  title: 'Frontend Developer | React & TypeScript',
  email: 'eduardo@example.com',
  location: 'Available Remote',
  experience: '3+ Years',
  projectsCompleted: '25+',
  technologiesMastered: '15+',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/EduardoJLDS',
  linkedin: 'https://linkedin.com/in/eduardo-lara',
  email: 'mailto:eduardo@example.com',
} as const;

export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' }
] as const;

export const SKILL_CATEGORIES = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  TOOLS: 'tools',
  OTHER: 'other',
} as const;