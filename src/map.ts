export interface MapTheme {
  order: number
  nameGLCN: string
  nameGLEN: string
  nameALCN: string
}

export type MapTrackLength = 30 | 60 | 90 | 120

export interface MapTrack {
  length: MapTrackLength | null
}
