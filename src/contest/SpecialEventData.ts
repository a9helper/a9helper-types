interface SEToolCar {
  car_id: string
  fullName: string
  nickName: string
  isKeyCar: boolean
  rankLimits: number[]
  star: number
}

interface reword {
  type:
    | 'seCard'
    | 'seKey'
    | 'token'
    | 'sePack'
    | 'sePart'
    | 'credit'
    | 'seSkin'
    | 'seasonToken'
  count: number
}

type rewordType = reword['type']

interface processReword {
  conditions: number
  reword: reword
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
  rewords: reword[]
}

interface stage {
  stage?: number
  clubRewords: reword[]
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
