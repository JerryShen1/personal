// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [
  {
    company: '上海宋庆龄学校',
    title: '高一学生',
    logo: 'college',
    start: '2012',
    end: 'Present',
  },
]
