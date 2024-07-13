import type { CarMeta } from '@/car'
import { GameServer } from '..'

export interface SeasonPassRewardCarCard {
  carMeta: CarMeta
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

export interface SeasonPassNormalMission {
  type: string
  count: number
}

export interface Episode {
  order: number
  mapMissions: SeasonPassMission[]
  normalMissions: SeasonPassNormalMission[]
  carCardRewards: SeasonPassRewardCarCard[]
  ultimateCardRewards: SeasonPassRewardUltimateCard[]
}

// export interface SeasonPassCar {
//   car_id: string
//   nickName: string
//   fullName: string
// }

export interface SeasonPass {
  featuredCars: CarMeta[]
  server: GameServer
  name: string
  startTime: number
  endTime: number
  episodes: Episode[]
}
