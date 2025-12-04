import { describe, expect, it } from "vitest"
import { CustomerOrder, serveCoffe } from "./main.js"

describe("Serve coffe test", () => {
  it("serve coffe and no sugar", () => {
    const customerOrder: CustomerOrder = {
      drink: "coffee",
      sugar: 0
    }
    const result = serveCoffe(customerOrder)
    expect(result).toBe("C::")
  })
})
