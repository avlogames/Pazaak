import initializeSideDeck from "src/lib/initializeSideDeck"
import initializeStack from "src/lib/initializeStack"

export default function newPlayerModel(avatar, draw, name, uuid) {
  const stack = initializeStack(draw)
  const score = stack.reduce((a, v) => (a += v.value), 0)
  return {
    avatar,
    credits: 100,
    name,
    score,
    sideDeck: initializeSideDeck(),
    stack,
    uuid,
    wins: 0,
  }
}
