import { CarClass, CarQuality, GameServer } from '@/common'

export const customCarListType = [] as const

export type CustomCarListType = (typeof customCarListType)[number]

export interface CustomCar {
  car_id: string
  nickName: string
  fullName: string
  carClass: CarClass
  // carClassOrder: number
  star: number
  quality: CarQuality
  isKeyCar: boolean
  carImageUrl: string
}

export interface CustomCarList {
  title: string
  desc: string
  server: GameServer
  mainList: CustomCar[]
  subList: {
    title: string
    desc: string
    main: CustomCar[]
    sub: CustomCar[]
  }
}
