import { GameServer } from '@/common'

export interface MapTheme {
  order: number
  nameGLCN: string
  nameGLEN: string
  nameALCN: string
}

export type MapTrackLength = 30 | 60 | 90 | 120

export interface MapTrack {
  length: MapTrackLength
  mapThemeId: string
  nameGLCN: string
  nameGLEN: string
  nameALCN: string

  // redundant
  mapThemeNameGLCN: string
  mapThemeNameALCN: string
}

export interface CareerSeason {
  chapter: number
  order: number
  server: GameServer
  name: string
}

export enum CareerRaceType {
  Attack = 'attack',
  Time = 'time',
  Race = 'race',
}

export interface CareerRace {
  order: number
  type: CareerRaceType
  limitCarId: string
  careerSeasonId: string
  mapTrackId: string


  // redundant

  careerSeasonName: string
  careerSeasonChapter: number
  careerSeasonServer: GameServer
  careerSeasonOrder: number
  mapTrackNameGLCN: string
  mapTrackNameALCN: string
}
