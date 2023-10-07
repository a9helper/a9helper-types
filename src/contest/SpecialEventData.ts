interface SEToolCar {
  car_id: string
  fullName: string
  nickName: string
  isKeyCar: boolean
  rankLimits: number[]
  star: number
}

interface RewordCommon {
  type:
    | 'seCard'
    | 'seKey'
    | 'token'
    | 'sePack'
    | 'sePart'
    | 'credit'
    | 'seSkin'
    | 'seasonToken'
    | 'ultimatePart'
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

type Reword = RewordCommon | RewordUltimate | RewordCar

type rewordType = Reword['type']

interface ProcessReword {
  conditions: number
  reword: Reword
}

interface Join {
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
  havePack: Boolean
  haveClubRewords: Boolean
  haveSkin: Boolean
  havePackConditions: Boolean
  haveEventKey: Boolean
  packConditions: Number
  dataTableImage?: string
  toolCars: SEToolCar[]
  notes: string[]
  processRewords: ProcessReword[]
  stages: Stage[]
}
