import { describe, expect, it } from "vitest"
import { CustomerOrder, serveCoffe } from "./main.js"

describe("Serve coffe test", () => {
  it("serve coffe and no sugar", () => {
    const customerOrder: CustomerOrder = {
      drink: "Coffee",
      sugar: 0
    }
    const result = serveCoffe(customerOrder)
    expect(result).toBe("C::")
  })


  it("serve tea with 2 sugar", () => {
    const customerOrder: CustomerOrder = {
      drink: "Tea",
      sugar: 2
    }

    const result = serveCoffe(customerOrder)
    expect(result).toBe("T:2:0")

  })

})
