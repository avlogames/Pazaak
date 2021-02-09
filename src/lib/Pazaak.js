import { PLACEHOLDER } from "src/ui/config"

class Pazaak {
  static dealCard = () => {
    const cardPile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const value = Math.floor(Math.random() * cardPile.length) + 1
    return { type: "green", value }
  }

  static initializeSideDeck = () => {
    const cards = []
    const allValues = [-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]
    for (let x = 0; x < 4; x++) {
      const index = Math.floor(Math.random() * allValues.length)
      const value = allValues[index]
      const type = value > 0 ? "blue" : "red"
      allValues.splice(index, 1)
      cards.push({ type, value })
    }
    return cards
  }

  static initializeStack = (deal = false, stack = []) => {
    let limit = deal ? 8 : 9
    if (deal) stack.push(this.dealCard())
    for (let i = 0; i < limit; i++) stack.push(PLACEHOLDER)
    return stack
  }

  static sideDeckFloor = () => {}

  static sideDeckCeiling = () => {}

  static smallestCombo = () => {}
}

export default Pazaak
