import { PLACEHOLDER } from "src/ui/config"

class Pazaak {
  static dealCard = () => {
    const cardPile = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const value = Math.floor(Math.random() * cardPile.length) + 1
    return { type: "green", value }
  }

  static initializeSideDeck = () => {
    const cards = []
    const allValues = [-6, -6, -5, -5, -4, -4, -3, -3, -2, -2, -1, -1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
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

  static sideDeckFloor = (cards) => {
    return cards.reduce((acc, { type, value }) => {
      return type === "red" ? (acc += value) : acc
    }, 0)
  }

  static sideDeckCeiling = (cards) => {
    return cards.reduce((acc, { type, value }) => {
      return type === "blue" ? (acc += value) : acc
    }, 0)
  }

  static smallestCombo = (cards, currScore, minScore) => {
    const filterCards = cards.map((val, i) => ({ ...val, index: i })).filter((c) => c.value !== 0)
    const result = []

    function buildCombinations(acc = [], array = filterCards) {
      array.map((val, i) => {
        result.push([...acc, val])
        buildCombinations([...acc, val], array.slice(i + 1))
      })
    }
    
    const bestCombo = result.reduce((acc, arr) => {
      const cardSum = arr.reduce((acc, val) => (acc += val.value), 0)
      const total = currScore + cardSum
      return total >= minScore && total <= 20 && arr.length <= acc.length && total >= acc.total
      ? { total, length: arr.length, arr: arr }
      : acc
    },{ total: 0, length: 4, arr: [] })
    
    buildCombinations([], filterCards)
    return bestCombo
  }
}

export default Pazaak
