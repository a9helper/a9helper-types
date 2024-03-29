import { GameServer } from '..'

export interface SeasonPassRewardCarCard {
  car_id: string
  carClass: string
  nickName: string
  count: number
}

export interface SeasonPassRewardUltimateCard {
  carClass: string
  count: number
}

export interface SeasionPassMissionTrack {
  mapTrackId: string
  mapTrackName: string
  mapThemeName: string
}

export interface SeasonPassMission {
  tags: string[]
  mapTrackList: SeasionPassMissionTrack[]
  solution: string
}

export interface Episode {
  order: number
  missions: SeasonPassMission[]
  carCardRewards: SeasonPassRewardCarCard[]
  ultimateCardRewards: SeasonPassRewardUltimateCard[]
}

export interface SeasonPassCar {
  car_id: string
  nickName: string
  fullName: string
}

export interface SeasonPass {
  featuredCars: SeasonPassCar[]
  server: GameServer
  name: string
  startTime: number
  endTime: number
  episodes: Episode[]
}
