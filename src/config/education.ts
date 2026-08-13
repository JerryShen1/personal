// education
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: '上海宋庆龄学校',
    major: '高一',
    logo: 'college',
    start: '2012',
    end: '2028',
  },
]
