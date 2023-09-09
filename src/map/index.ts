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
  mapThemeOrder: number
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
  Race = 1,
  Time,
  Attack,
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
  server: GameServer
  careerSeasonOrder: number
  mapTrackName: string
}
