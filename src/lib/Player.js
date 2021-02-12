import Pazaak from "src/lib/Pazaak"

class Player {
  /**
   * Create New Player
   */
  static create = (avatar, draw, name, uuid) => {
    const stack = Pazaak.initializeStack(draw)
    const score = stack.reduce((a, v) => (a += v.value), 0)
    const sideDeck = Pazaak.initializeSideDeck()
    return { avatar, credits: 100, name, score, sideDeck, stack, uuid, wins: 0 }
  }
}

export default Player
