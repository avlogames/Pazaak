import game from "src/lib/game"

/**
 * Create New Player
 */
export function create(avatar, draw, name, uuid) {
  const stack = game.initializeStack(draw)
  const score = stack.reduce((a, v) => (a += v.value), 0)
  const sideDeck = game.initializeSideDeck()
  return { avatar, credits: 100, name, score, sideDeck, stack, uuid, wins: 0 }
}
