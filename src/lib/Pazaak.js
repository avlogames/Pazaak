import { PLACEHOLDER, SIDE_DECK_COLLECTION } from "src/ui/config"

class Pazaak {
  /**
   * Deal Card From Pile
   */
  static dealCard = () => {
    return { type: "green", value: Math.floor(Math.random() * 10) + 1 }
  }

  /**
   * Initialize Side Deck
   */
  static initializeSideDeck = (cards = []) => {
    const allValues = SIDE_DECK_COLLECTION

    // Loop 4 Cards
    for (let x = 0; x < 4; x++) {
      const value = allValues[Math.floor(Math.random() * allValues.length)]
      const type = value > 0 ? "blue" : "red"

      // Splice From Collection And Push To Card Array
      allValues.splice(index, 1)
      cards.push({ type, value })
    }

    // Return Cards Array
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
  static smallestCombo = (cards, currentScore, opponentScore) => {
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
        const total = currentScore + cardSum
        const currentOrMin = currentScore > 20 ? minScore - 1 : currentScore
        if (total >= minScore && total <= 20 && total > currentOrMin && arr.length <= acc.length && total >= acc.total) {
          return { total, length: arr.length, arr: arr }
        }
        return acc
      }, { total: 0, length: 4, arr: [] })
  }
}

export default Pazaak
