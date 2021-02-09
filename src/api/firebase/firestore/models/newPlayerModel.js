import Pazaak from "src/lib/Pazaak"

export default function newPlayerModel(avatar, draw, name, uuid) {
  const stack = Pazaak.initializeStack(draw)
  const score = stack.reduce((a, v) => (a += v.value), 0)
  return {
    avatar,
    credits: 100,
    name,
    score,
    sideDeck: Pazaak.initializeSideDeck(),
    stack,
    uuid,
    wins: 0,
  }
}
