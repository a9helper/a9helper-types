export interface SEToolCar {
  car_id: string
  fullName: string
  nickName: string
  isKeyCar: boolean
  rankLimits: number[]
  star: number
}

export enum RewordType {
  seCard = 'seCard',
  seKey = 'seKey',
  token = 'token',
  sePack = 'sePack',
  sePart = 'sePart',
  credit = 'credit',
  seSkin = 'seSkin',
  seasonToken = 'seasonToken',
  // ultimatePart='ultimatePart',
}

export const getRewordTypeName = (type: RewordType) => {
  return {
    [RewordType.seCard]: '图纸',
    [RewordType.seKey]: '钥匙',
    [RewordType.token]: '代币',

    [RewordType.sePack]: '图纸包',
    [RewordType.sePart]: '金卡',
    [RewordType.credit]: '金币',
    [RewordType.seSkin]: '贴纸',
    [RewordType.seasonToken]: '赛季币',
  }[type]
}

export interface RewordCommon {
  type: RewordType
  count: number
}

interface RewordUltimate {
  type: 'ultimatePart' | 'ultimateCard'
  count: number
  cardClass: string
}

interface RewordCar {
  type: 'carCard'
  count: number
  car_id: string
}

type Reword = RewordCommon //| RewordUltimate | RewordCar

type rewordType = Reword['type']

export interface ProcessReword {
  conditions: number
  reword: Reword
}

export interface Join {
  star: number
  rank: number
}

export interface ToolCar {
  car_id: string
  freeTry: boolean
}

export interface Mission {
  toolCars: ToolCar[]
  join: Join
  conditions: number
  rewords: Reword[]
}

export interface Stage {
  stage?: number
  clubRewords: Reword[]
  unlockConditions: number
  missions: Mission[]
}

export interface SpecialEventData {
  havePack: boolean // 不太需要
  haveClubRewords: boolean // 不太需要
  haveSkin: boolean // 不太需要
  havePackConditions: boolean // 不太需要
  haveEventKey: boolean // 不太需要
  packConditions: number
  dataTableImage?: string
  toolCars: SEToolCar[]
  notes: string[]
  notesText?: string
  processRewords: ProcessReword[]
  stages: Stage[]
}
