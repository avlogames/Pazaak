import { PLACEHOLDER } from "src/ui/config"

class Pazaak {
  /**
   * Deal Card From Pile
   */
  static dealCard = () => {
    const value = Math.floor(Math.random() * 10) + 1
    return { type: "green", value }
  }

  /**
   * Initialize Side Deck
   */
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

  /**
   * Initialize Stack
   */
  static initializeStack = (deal = false, stack = []) => {
    let limit = deal ? 8 : 9
    if (deal) stack.push(this.dealCard())
    for (let i = 0; i < limit; i++) stack.push(PLACEHOLDER)
    return stack
  }

  /**
   * Side Deck Lowest Possible Combo
   */
  static sideDeckFloor = (cards) => {
    return cards.reduce((acc, { type, value }) => {
      return type === "red" ? (acc += value) : acc
    }, 0)
  }

  /**
   * Side Deck Highest Possible Combo
   */
  static sideDeckCeiling = (cards) => {
    return cards.reduce((acc, { type, value }) => {
      return type === "blue" ? (acc += value) : acc
    }, 0)
  }

  /**
   * Limit Of 9 Cards On Stack
   */
  stackLimit = (stack) => {
    const cardLimit = stack.filter((card) => card.type !== "placeholder")
    return cardLimit.length === 9
  }

  /**
   * Smallest Winning Combo
   */
  static smallestCombo = (cards, currScore, opponentScore) => {
    const minScore = opponentScore >= 17 ? opponentScore : 17
    const filterCards = cards.map((val, i) => ({ ...val, index: i })).filter((c) => c.value !== 0)
    const result = []

    function buildCombinations(acc, array) {
      array.map((val, i) => {
        result.push([...acc, val])
        buildCombinations([...acc, val], array.slice(i + 1))
      })
    }

    buildCombinations([], filterCards)
    return result.reduce((acc, arr) => {
      const cardSum = arr.reduce((acc, val) => (acc += val.value), 0)
      const total = currScore + cardSum
      if (total >= minScore && total <= 20 && arr.length <= acc.length && total >= acc.total) {
        return { total, length: arr.length, arr: arr }
      }
      return acc
    }, { total: 0, length: 4, arr: [] })
  }
}

export default Pazaak
