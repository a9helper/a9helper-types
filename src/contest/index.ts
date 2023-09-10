import { SpecialEventData } from './SpecialEventData'

export interface ContestReword {
  rewordType: string
  rewordName: string
}

export const contestTypeList = [
  '寻车',
  '惊艳亮相',
  '速度爆发',
  '传奇周末',
  '传奇周末',
  '周末爆冲',
  '特殊赛',
  '大奖赛',
  '路试',
  '通行证',
  '巅峰',
  '节日',
] as const

export type ContestType = (typeof contestTypeList)[number]

interface ContestChild{
  name: string
  startTime: number
  endTime: number
}

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
  children?: ContestChild[]
}
