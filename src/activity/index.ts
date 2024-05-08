import { GameServer } from '..'

export interface Version {
  server: GameServer
  version: string // like 1.0
  name: string
  order: number
  startTime: number
  endTime: number
}

export interface UpdateSeason {
  server: GameServer
  season: number // like 10.1 10.2 10.3
  startTime: number
  endTime: number
  name: string
  // order: number
}

// 在赛事中，用season和name来显示预告赛事。
