export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'jerryShen'
export const headline = '上海宋庆龄学校本地土著'
export const introduction =
  '你好，我是 jerryShen，上海宋庆龄学校的本地土著，在这里长大、学习，也热爱这所学校的一切。'
export const email = 'tong.hu@scls-sh.org'
export const githubUsername = 'JerryShen1'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  '你好，我是 jerryShen，上海宋庆龄学校的本地土著。从小在这所学校长大，对这里的校园、老师和同学都有着很深的感情。',
  '我正在 AI Camp 课程中学习网页开发与 AI 应用，希望通过这个项目记录自己的学习历程与作品。',
  '这个网站是我的个人作品集，也会用来分享关于编程、人工智能和校园生活的点滴思考。',
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
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
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
