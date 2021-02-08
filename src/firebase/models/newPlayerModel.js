import initializeSideDeck from "src/ui/helpers/initializeSideDeck"
import initializeStack from "src/ui/helpers/initializeStack"

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