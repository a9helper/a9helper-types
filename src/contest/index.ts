import { GameServer } from '..'
import DSData from './DSData'
import { SpecialEventData } from './SpecialEventData'

export interface ContestReword {
  rewordType: string
  rewordName: string
}

// 放在数据库中维护
// 算了写死吧
export const contestTypeList = [
  '寻车',
  '赛季寻车', // 国服
  '特殊寻车', // 国际服
  '巅峰',
  '惊艳亮相',
  '速度爆发',
  '传奇周末',
  '周末爆冲',
  '特殊赛',
  '大奖赛',
  '通行证',
  '星路',
  // '展厅',
  '路试', //国际服
  '狂飙寻宝', // 国服
  '狂飙赏金', // 国服
  '节日',
] as const

export type ContestType = (typeof contestTypeList)[number]

export const contestTypeALList = [
  '寻车',
  '赛季寻车', // 国服
  '巅峰',
  '惊艳亮相',
  '速度爆发',
  '传奇周末',
  '周末爆冲',
  '特殊赛',
  '大奖赛',
  '通行证',
  '星路',
  // '展厅',
  '狂飙寻宝', // 国服
  '狂飙赏金', // 国服
  '节日',
] as const

export type ContestTypeAL = (typeof contestTypeList)[number]
export const contestTypeGLList = [
  '寻车',
  '特殊寻车', // 国际服
  '巅峰',
  '惊艳亮相',
  '速度爆发',
  '传奇周末',
  '周末爆冲',
  '特殊赛',
  '大奖赛',
  '通行证',
  '星路',
  // '展厅',
  '路试', //国际服
  '节日',
] as const

export type ContestTypeGL = (typeof contestTypeList)[number]
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
  type: string
  server: GameServer
  featuredCars: string[]
  toolCars?: string[] //todo: 工具车查询
  specialEventData?: SpecialEventData
  dsData?: DSData
  children?: ContestChild[]

  // 这两个不启用
  rewords?: ContestReword[]
  isPreRelease?: boolean

  updateSeason?: number
  updateSeasonName?: string
}

// 当前赛季的预告赛事：存在相同的updateSeason并且isPreRelease为false
// 未来赛季的预告赛事：比当前赛季的updateSeason大
