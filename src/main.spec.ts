import { describe, expect, it } from "vitest"
import { CustomerOrder, serveCoffe } from "./main.js"
import { drinkType } from "./main.js"

describe("Serve coffe test", () => {
  it("serve coffe and no sugar", () => {
    const customerOrder: CustomerOrder = {
      drink: drinkType.Coffe,
      sugar: 0
    }
    const result = serveCoffe(customerOrder)
    expect(result).toBe("C::")
  })


  it("serve tea with 2 sugar", () => {
    const customerOrder: CustomerOrder = {
      drink: drinkType.Tea,
      sugar: 2
    }

    const result = serveCoffe(customerOrder)
    expect(result).toBe("T:2:0")

  })

  it("serve chocolate with 2 sugar", () => {
    const customerOrder: CustomerOrder = {
      drink: drinkType.Chocolate,
      sugar: 1
    }

    const result = serveCoffe(customerOrder)
    expect(result).toBe("H:1:0")

  })

})
