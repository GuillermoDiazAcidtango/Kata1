export function serveCoffe(order: CustomerOrder): string {
  let serveMessage = ""

  switch (order.drink) {
    case 'Coffee':
      serveMessage += 'C'
      break
    case 'Tea':
      serveMessage += 'T'
      break
    case 'Chocolate':
      serveMessage += 'H'
      break
  }

  serveMessage += order.sugar === 0 ? '::' : `:${order.sugar}:0`


  return serveMessage
}

export type CustomerOrder = {
  drink: string,
  sugar: number
}