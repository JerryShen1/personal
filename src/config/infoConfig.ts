export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'JerryShen'
export const headline = '上海宋庆龄学校本地土著'
export const introduction =
  '你好，我是 JerryShen，上海宋庆龄学校的本地土著，在这里长大、学习，也热爱这所学校的一切。'
export const email = '18019218496@163.com'
export const githubUsername = 'JerryShen1'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  '你好，我是 JerryShen，上海宋庆龄学校的本地土著。从 2012 年来到这里，在这里长大、学习。',
  '目前读高一，正在 AI Camp 课程中学习编程和 AI 应用。',
  '这个网站用来记录我的学习历程和作品。',
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

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
