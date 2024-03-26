export const customCarListType = [] as const

export type CustomCarListType = (typeof customCarListType)[number]

export interface CustomCarListItem {}

export interface CustomCarList {
  title: string
  desc: string
  mainList: CustomCarListItem[]
  subList: {
    title: string
    desc: string
    main: CustomCarListItem[]
    sub: CustomCarListItem[]
  }
}
