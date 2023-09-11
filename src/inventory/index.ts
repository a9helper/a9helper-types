export interface SubInventory {
  name: string
  content: string
  carIds: string[]
}

interface Inventory {
  name: string
  count: number
  content: string
  abstract: string
  subInventories: SubInventory[]
}

export default Inventory
