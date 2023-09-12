import { GameServer } from '..'

export interface Version {
  server: GameServer
  version: string // like 1.0
  name: string
  order: number
  startTime: number
  endTime: number
}
