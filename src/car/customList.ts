import { CarClass, CarQuality, GameServer } from '@/common'
import type { CarMeta } from '.'

export const customCarListType = [] as const

export type CustomCarListType = (typeof customCarListType)[number]

export interface CustomCarList {
  title: string
  desc: string
  server: GameServer
  mainList: CarMeta[]
  cover: CarMeta
  subList: {
    title: string
    desc: string
    main: CarMeta[]
    sub: CarMeta[]
  }
}
