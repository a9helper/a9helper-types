import { SpecialEventData } from "./SpecialEventData"

export interface ContestReword {
  rewordType: string
  rewordName: string
}

export type ContestType = '寻车' | '巅峰'

export interface Contest {
  contestName: string
  rewords: ContestReword[]
  mapName: string
  startTime: number
  endTime: number
  type: ContestType
  featuredCars: string[]
  isPreRelease?: boolean
  specialEventData?: SpecialEventData
}
