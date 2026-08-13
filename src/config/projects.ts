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
    name: '青浦区艺术单项民乐组二等奖',
    description: '民乐组比赛获奖',
    date: '2024',
    location: '青浦区, 上海',
  },
  {
    name: 'USACO',
    description: '美国计算机奥林匹克竞赛',
    date: '2024',
    location: 'Online',
  },
  {
    name: '二胡十级',
    description: '中国音乐学院社会艺术水平考级',
    date: '2023',
    location: '上海',
  },
]

// Research & Projects
export const projectHeadLine = 'Research & Projects'
export const projectIntro = 'Learning projects and coursework from AI Camp and beyond.'

export const projects: Array<ProjectItemType> = [
  {
    name: '个人作品集网站',
    description: '用 Next.js 和 Tailwind CSS 搭建的个人主页，展示学习与作品。',
    link: { href: 'https://github.com/JerryShen1/personal', label: 'GitHub' },
    tags: ['Website', 'Next.js', 'AI Camp'],
  },
  {
    name: 'Python 入门练习',
    description: '课程中的 Python 基础练习，包括变量、循环和小游戏。',
    link: { href: '#', label: 'Coursework' },
    tags: ['Python'],
  },
  {
    name: 'AI Camp Mini Project',
    description: 'AI Camp 第一个迷你项目，学习 Git、网页开发与部署。',
    link: { href: 'https://github.com/SCLS-AI-Camp/MP1', label: 'Template' },
    tags: ['AI Camp', 'Git'],
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = 'Hobbies & Volunteer'
export const activitiesIntro = 'Personal interests and extracurricular activities.'

export const activities: Array<ActivityItemType> = [
  {
    name: '练习二胡',
    description: '坚持练习二胡，已通过十级考级，参加区艺术单项比赛。',
    date: '2024',
    location: '上海',
  },
  {
    name: 'AI Camp 学习',
    description: '学习网页开发、Git 和 AI 应用。',
    date: '2026',
    location: '上海宋庆龄学校',
  },
  {
    name: 'Python 编程',
    description: '课后练习与小项目，巩固编程基础。',
    date: '2026',
    location: '上海',
  },
]
