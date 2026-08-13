export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'JerryShen'
export const headline = 'Local at Shanghai Soong Ching Ling School'
export const introduction =
  "Hi, I'm JerryShen — a local at Shanghai Soong Ching Ling School. I've grown up, studied, and built my life here, and I love everything about this school."
export const email = '18019218496@163.com'
export const githubUsername = 'JerryShen1'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hi, I'm JerryShen — a local at Shanghai Soong Ching Ling School. I've been here since 2012, growing up and learning on this campus.",
  "I'm currently in Grade 10, studying programming and AI applications through the AI Camp course.",
  'This website documents my learning journey and projects.',
]

// blog
export const blogHeadLine = "What I've Been Thinking About"
export const blogIntro =
  "I've written about AI, programming, and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'GitHub',
    icon: 'github',
    href: 'https://github.com/JerryShen1',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
