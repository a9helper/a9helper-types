import { GameServer } from '..'

export interface SubInventory {
  name: string
  content: string
  carIds: string[]
}

export type ContestCommonType =
  | '战利品'
  | '每日任务'
  | '级别杯'
  | '传奇商店'
  | '独家赛事'
  | '寻车'
  | '通行证'
  | '惊艳亮相'
  | '多人'
  | '1VS1'
  | '特殊赛事'
  | '大奖赛'
  | '路试'
  | '车联赛事'
  | '星路'
  | 'Clash'

interface Inventory {
  server: GameServer
  name: string
  count: number
  content: string
  abstract: string
  subInventories: SubInventory[]
  contestType: ContestCommonType
}

export default Inventory
