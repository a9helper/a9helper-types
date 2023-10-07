import { GameServer } from '..'
import DSData from './DSData'
import { SpecialEventData } from './SpecialEventData'

export interface ContestReword {
  rewordType: string
  rewordName: string
}

export const contestTypeList = [
  '寻车',
  '巅峰',
  '惊艳亮相',
  '速度爆发',
  '传奇周末',
  '周末爆冲',
  '特殊赛',
  '大奖赛',
  '通行证',
  '星路',
  '展厅',
  '路试',
  '节日',
] as const

export type ContestType = (typeof contestTypeList)[number]

export interface ContestChild {
  name: string
  startTime: number
  endTime: number
}

export interface Contest {
  contestName: string
  mapName: string
  startTime: number
  endTime: number
  type: ContestType
  server: GameServer
  featuredCars: string[]
  toolCars?: string[] //todo: 工具车查询
  specialEventData?: SpecialEventData | null
  dsData?: DSData
  children?: ContestChild[]

  // 这两个不启用
  rewords?: ContestReword[]
  isPreRelease?: boolean
}
