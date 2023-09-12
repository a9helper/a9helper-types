export interface Brand {
  name: string
}

import { CarClass, CarQuality, WorldLeague } from '@/index'

export interface UpgradeStageModel {
  carClass: CarClass
  star: number
  costList: number[]
  stageCost: number
}

export interface UpgradePartModel {
  uncommonPart: number
  rarePart: number
  epicPart: number
  legendaryPart: number
}

export interface Decal {
  name: string
  image: string
}

export const launchContestList=[
  
'战利品',
'独家赛事',
'寻车',
'惊艳亮相',

]

export interface Car extends UpgradePartModel {
  // 基础信息
  fullName: string
  car_id: string
  brand: string
  nickName: string
  keyWords: string
  carClass: CarClass
  star: number
  quality: CarQuality
  bps: number[]
  isKeyCar: boolean
  decals: Decal[]
  decalsExclusive: Decal[]
  bodyKit: boolean
  roadster: boolean
  nitroVisualsCount: number

  // 性能信息
  rank: number
  topSpeed: number
  acceleration: number
  handling: number
  nitro: number
  nitroDuration: number | null
  speedNitro: number | null
  speedBlue: number | null
  speedOrange: number | null
  speedPurple: number | null
  speedAir: number | null

  // 改装信息
  // extends UpgradePartModel
  uncommonPartCost: number // todo: 快速选择
  stageCostId: string
  stageCost: number
  partCost: number
  totalCost: number

  // 活动信息
  releaseVersion: string
  getMethod: string | null 
  // 亮相方式不转移到车单，车单专指通行证时代的获取方式。
  packLevel: number | null
  storeEpic: boolean
  storeClash: boolean
  elite: boolean // 国服现在没有了
  worldLeague: WorldLeague
  rewardsWorldLeague: WorldLeague[]
  rewardsWorldRank: boolean
  rewardsClassCup: boolean
  rewardsGoal: boolean
  rewardsStarWay: boolean
  rewardsHunt: boolean
}
