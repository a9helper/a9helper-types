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

interface RewordUltimate{
  type: 'ultimatePart'|'ultimateCard'
  count: number
  cardClass: string
}

interface RewordCar{
  type: 'carCard'
  count: number
  car_id: string
}

type Reword = RewordCommon | RewordUltimate | RewordCar

type rewordType = Reword['type']

interface processReword {
  conditions: number
  reword: Reword
}

interface join {
  star: number
  rank: number
}

interface toolCar {
  car_id: string
  freeTry: boolean
}

interface mission {
  toolCars: toolCar[]
  join: join
  conditions: number
  rewords: Reword[]
}

interface stage {
  stage?: number
  clubRewords: Reword[]
  unlockConditions: number
  missions: mission[]
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
  processRewords: processReword[]
  stages: stage[]
}
