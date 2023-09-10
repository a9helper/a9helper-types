import { GameServer } from "..";


export interface SeasonPassRewardCarCard
{
  type: 'carCard',
  car_id: string,
  count: number
}

export interface SeasonPassRewardUltimateCard{
  type: 'ultimateCard',
  cardClass: string,
  count: number
}
type SeasonPassReward= SeasonPassRewardCarCard | SeasonPassRewardUltimateCard


export interface SeasonPassMission{
  tags: string[]
  mapNames: string[]
  solution: string
}


export interface Episode{
  order: number
  missions: SeasonPassMission[]
  rewards: SeasonPassReward[]
}

export interface SeasonPass{
  mainCarId: string
  server: GameServer
  name: string
  startTime: number
  endTime: number
  episodes: Episode[]
}