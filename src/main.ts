export function serveCoffe(order: CustomerOrder): string {
  let serveMessage = ""

  switch (order.drink) {
    case drinkType.Coffe:
      serveMessage += 'C'
      break
    case drinkType.Tea:
      serveMessage += 'T'
      break
    case drinkType.Chocolate:
      serveMessage += 'H'
      break
  }

  serveMessage += order.sugar === 0 ? '::' : `:${order.sugar}:0`


  return serveMessage
}

export const drinkType = {
  Coffe: 'C',
  Tea: 'T',
  Chocolate: 'H'
} as const

export type DrinkType = (typeof drinkType)[keyof typeof drinkType]

export type CustomerOrder = {
  drink: DrinkType,
  sugar: number
}