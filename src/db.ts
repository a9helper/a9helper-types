// 服务器：al国服和gl国际服
type GameServer = 'al' | 'gl'
type CarClass = 'D' | 'C' | 'B' | 'A' | 'S' | 'R'
type CarClassOrder = 0 | 10 | 20 | 30 | 40 | 50 //不同等级的排序

// 车辆品质
enum CarQuality {
  Uncommon = 'uncommon',
  Rare = 'rare',
  Epic = 'epic',
  Legendary = 'legendary',
}
// 车贴
interface Decal {
  name: string
  image: string
}

export enum WorldLeague {
  Bronze = 'bronze',
  Silver = 'silver',
  Gold = 'gold',
  Platinum = 'platinum',
  Legend = 'legend',
  Diamond = 'diamond',
}
// 游戏版本，一般会有 2 到 3 个赛季
interface UpdateVersion {
  version: string
  versionOrder: number
  startDate: number
  endDate: number
  carIds: string[]
}

// 游戏赛季
interface UpdateSeason {
  name: string
  startDate: number
  endDate: number
  updateVersionId: string
  updateVersion: string
  carIds: string[]
}

// 车辆品牌
interface CarBrand {
  _id: string
  name: string
  image: string
  desc: string
}

// 车辆基础信息
interface CarBasic {
  server: GameServer
  images: string[]
  fullName: string
  car_id: string
  nickNames: {
    name: string // 外号名称
    desc: string // 外号描述
  }[]
  keyWords: string // 方便搜索，如搜索阿斯顿马丁可以搜到 Aston Martin
  carClass: CarClass
  carClassOrder: number
  star: number //星级
  quality: CarQuality
  bps: number[] //图纸数量序列
  isKeyCar: boolean
  decals: Decal[] // 普通车贴
  decalsAnimated: Decal[] // 动画车贴
  decalsAction: Decal[] // 炫动车贴
  nitroVisuals: Decal[] // 氮气特效
  bodyKit: boolean
  convertible: boolean //是否敞篷
  releaseVersionId: string
  releaseVersion: string
  getMethod: string
  packLevel: number
}

// 车辆性能信息
interface CarPerf {
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
  rankOC: number
  topSpeedOC: number
  accelerationOC: number
  handlingOC: number
}

// 改装信息
interface CarUpgrade {
  stageCount: number
  costList: number[]
  stageCost: number

  uncommonPart: number
  rarePart: number
  epicPart: number
  legendaryPart: number
  uncommonPartCost: number
  rarePartCost: number
  epicPartCost: number
  legendaryPartCost: number
  partCost: number

  totalCost: number
}

export interface Car extends CarBasic, CarPerf, CarUpgrade {}

// carMeta适用于其他表中存储车辆信息
interface CarMeta {
  _id: string
  gameServer: GameServer
  fullName: string
  nickName: string
  car_id: string
  image: string
  carClass: string
  carClassOrder: CarClassOrder
  rank: number
  quality: CarQuality
  isKeyCar: boolean
  star: number
  bps: number[]
}

// 自定义车单
interface CustomCarList {
  title: string
  desc: string
  server: GameServer
  mainList: CarMeta[]
  coverList: CarMeta[]
  subList: {
    title: string
    desc: string
    main: CarMeta[]
    sub: CarMeta[]
  }[]
}
// 地图主题
interface MapTheme {
  order: number
  image: string
  nameGLCN: string
  nameGLEN: string
  nameALCN: string
}

type MapTrackLength = 30 | 60 | 90 | 120
interface MapTrack {
  length: MapTrackLength
  mapThemeId: string
  nameGLCN: string
  nameGLEN: string
  nameALCN: string

  // redundant
  mapThemeOrder: number
  mapThemeNameGLCN: string
  mapThemeNameALCN: string
}

interface CareerSeason {
  chapter: number
  order: number
  server: GameServer
  name: string
}
enum CareerRaceType {
  Race = 1,
  Time,
  Attack,
}
interface CareerRace {
  order: number
  type: CareerRaceType
  limitCars: string[]
  careerSeasonId: string
  mapTrackId: string

  // redundant

  careerSeasonName: string
  careerSeasonChapter: number
  server: GameServer
  careerSeasonOrder: number
  mapTrackNameGLCN: string
  mapTrackNameALCN: string
}
