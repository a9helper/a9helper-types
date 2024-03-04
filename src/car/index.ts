export interface Brand {
  name: string
  keyWords: string
  logoImageUrl: string
}

import { CarClass, CarQuality, GameServer, WorldLeague } from '@/index'

export interface UpgradeStageModel {
  server: GameServer
  carClass: CarClass
  star: number
  costList: number[]
  stageCost: number
}

export interface UpgradePartModel {
  server: GameServer
  carClass: CarClass
  star: number
  uncommonPart: number
  rarePart: number
  epicPart: number
  legendaryPart: number
  partCost: number
}

export interface Decal {
  name: string
  image: string
}

export enum RoadsterType {
  None = 1,
  Fold,
  NotFold,
}

export interface LaunchContest {
  name: string
}

// 应该放到后台维护
export const launchContestList = [
  '战利品',
  '每日任务',
  '独家赛事',
  '寻车',
  '惊艳亮相',
  '周末爆冲',
  '特殊赛',
  '大奖赛',
  '联会赛事',
  '通行证',
  '1VS1',
  '多人',
  'Clash',
  '擂台赛',
  '商店礼包',
  '狂飙寻宝',
  '狂飙赏金',
  '氪金',
  '其他',
]
export interface CarBasic {
  // 基础信息
  server: GameServer
  fullName: string
  car_id: string
  brand: string
  brandLogoImageUrl: string
  nickName: string
  keyWords: string
  carClass: CarClass
  carClassOrder: number
  star: number
  quality: CarQuality
  bps: number[]
  isKeyCar: boolean
  decals: Decal[]
  decalsExclusive: Decal[]
  bodyKit: boolean
  roadster: RoadsterType
  nitroVisualsCount: number
  releaseVersion: string
  carImageUrl: string
}

export interface CarPerf {
  // 性能信息
  rank: number
  topSpeed: number
  acceleration: number
  handling: number
  nitro: number
  nitroDuration: number
  speedNitro: number
  speedBlue: number
  speedOrange: number
  speedPurple: number
  speedAir: number
  epicRanks: number[] // todo：金卡计算器
  topSpeedOC: number
  accelerationOC: number
  handlingOC: number
  nitroOC: number
  driftV: number
  driftT: number
  driftR: number // r=v*t/2pi
}

export interface CarUpgrade {
  // 改装信息
  // extends UpgradePartModel
  // stageCostId: string | null
  stageCount: number
  costList: number[]
  stageCost: number

  uncommonPartCost: number // todo: 快速选择
  uncommonPart: number
  rarePart: number
  epicPart: number
  legendaryPart: number
  partCost: number

  totalCost: number
}

export interface CarEvent {
  // 活动信息
  getMethod: string
  // 亮相方式不转移到车单，车单专指通行证时代的获取方式。
  // 更新：亮相方式专门开一个分类总结页面，车单只显示常驻赛事，不稳定的限时赛事自行查询。
  packLevel: number
  storeEpic: boolean
  storeClash: boolean
  storeGauntlet: boolean // 国服对决擂台赛
  elite: boolean // 国服现在没有了
  worldLeague: WorldLeague | null // 隐藏车、未发布的车、未加入多人的车，赋值为null
  rewardsWorldLeague: WorldLeague[]
  rewardsWorldRank: boolean
  rewardsClassCup: boolean
  rewardsGoal: boolean
  rewardsStarWay: boolean
  rewardsShowRoom: boolean // 国服还没有上
  rewardsHunt: boolean
}

export interface Car extends CarBasic, CarPerf, CarUpgrade, CarEvent {}
