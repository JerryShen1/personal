// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = 'Awards & Honors'
export const awardsIntro = 'Recognition for academic, artistic, and competitive achievements.'

export const awards: Array<ActivityItemType> = [
  {
    name: 'Second Prize, Qingpu District Folk Music Solo Competition',
    description: 'Awarded in the folk music category.',
    date: '2024',
    location: 'Qingpu District, Shanghai',
  },
  {
    name: 'USACO',
    description: 'USA Computing Olympiad.',
    date: '2024',
    location: 'Online',
  },
  {
    name: 'Erhu Level 10',
    description: 'China Conservatory of Music social art level examination.',
    date: '2023',
    location: 'Shanghai',
  },
]

// Research & Projects
export const projectHeadLine = 'Research & Projects'
export const projectIntro = 'Learning projects and coursework from AI Camp and beyond.'

export const projects: Array<ProjectItemType> = [
  {
    name: 'Personal Portfolio Website',
    description:
      'A personal homepage built with Next.js and Tailwind CSS to showcase my learning and projects.',
    link: { href: 'https://github.com/JerryShen1/personal', label: 'GitHub' },
    tags: ['Website', 'Next.js', 'AI Camp'],
  },
  {
    name: 'Python Fundamentals Practice',
    description:
      'Basic Python exercises from coursework, covering variables, loops, and mini games.',
    link: { href: '#', label: 'Coursework' },
    tags: ['Python'],
  },
  {
    name: 'AI Camp Mini Project',
    description:
      'The first AI Camp mini project — learning Git, web development, and deployment.',
    link: { href: 'https://github.com/SCLS-AI-Camp/MP1', label: 'Template' },
    tags: ['AI Camp', 'Git'],
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = 'Hobbies & Volunteer'
export const activitiesIntro = 'Personal interests and extracurricular activities.'

export const activities: Array<ActivityItemType> = [
  {
    name: 'Erhu Practice',
    description:
      'Practicing erhu regularly, passed Level 10 certification, and competed in district art competitions.',
    date: '2024',
    location: 'Shanghai',
  },
  {
    name: 'AI Camp Learning',
    description: 'Learning web development, Git, and AI applications.',
    date: '2026',
    location: 'Shanghai Soong Ching Ling School',
  },
  {
    name: 'Python Programming',
    description: 'After-class exercises and small projects to strengthen programming fundamentals.',
    date: '2026',
    location: 'Shanghai',
  },
]
