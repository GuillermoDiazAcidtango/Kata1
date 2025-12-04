export function serveCoffe(order: CustomerOrder): string {
  let serveMessage = ""

  serveMessage += drinkType

  return ""
}

export type CustomerOrder = {
  drink: string,
  sugar: number
}

const drinkType = {
  C: 'Coffee',
  T: 'Tea',
  H: 'Chocolate'
} as const

type DrinkType = (typeof drinkType)[keyof typeof drinkType]
