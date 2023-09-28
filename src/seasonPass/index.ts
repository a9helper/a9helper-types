import { GameServer } from '..'

export interface SeasonPassRewardCarCard {
  type: 'carCard'
  car_id: string
  count: number
}

export interface SeasonPassRewardUltimateCard {
  type: 'ultimateCard'
  cardClass: string
  count: number
}
type SeasonPassReward = SeasonPassRewardCarCard | SeasonPassRewardUltimateCard

export interface SeasonPassMission {
  tags: string[]
  mapNames: string[]
  solution: string
}

export interface Episode {
  order: number
  missions: SeasonPassMission[]
  rewards: SeasonPassReward[]
}

export interface SeasonPassCar {
  car_id: string
  nickName: string
}

export interface SeasonPass {
  featuredCars: SeasonPassCar[]
  server: GameServer
  name: string
  startTime: number
  endTime: number
  episodes: Episode[]
}
