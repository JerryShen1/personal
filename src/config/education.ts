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
    school: 'Shanghai Soong Ching Ling School',
    major: 'Grade 10',
    logo: 'college',
    start: '2012',
    end: '2028',
  },
]
