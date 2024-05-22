export interface IDParams {
  _id: string
}

export enum CarQuality {
  Uncommon = 'uncommon',
  Rare = 'rare',
  Epic = 'epic',
  Legendary = 'legendary',
}

export enum GameServer {
  AL = 'al',
  GL = 'gl',
  NS = 'ns',
}

export type CarClass = 'D' | 'C' | 'B' | 'A' | 'S' | 'R'

export enum WorldLeague {
  Bronze = 'bronze',
  Silver = 'silver',
  Gold = 'gold',
  Platinum = 'platinum',
  Legend = 'legend',
  Diamond = 'diamond',
}

export const getWorldLeagueName = (league: WorldLeague) =>
  ({
    [WorldLeague.Bronze]: '青铜',
    [WorldLeague.Silver]: '白银',
    [WorldLeague.Gold]: '黄金',
    [WorldLeague.Platinum]: '白金',
    [WorldLeague.Legend]: '传奇',
    [WorldLeague.Diamond]: '钻石',
  }[league])
