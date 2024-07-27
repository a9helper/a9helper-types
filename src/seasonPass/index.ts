import type { CarMeta } from '@/car'
import { GameServer, type IDParams } from '..'
import type { MapTrack } from '@/map'

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
  tags: string //空格隔开
  mapTrackList: (MapTrack & IDParams)[]
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
  carCardReward: {
    carMeta: CarMeta
    count: number
  } //SeasonPassRewardCarCard[]
  ultimateCardReward: {
    carClass: string
    count: number
  }
  //   SeasonPassRewardUltimateCard[]
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
