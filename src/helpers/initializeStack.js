import dealCard from "src/helpers/dealCard"
import { PLACEHOLDER } from "src/constants"

export default function initializeStack(draw = false) {
  const stack = []
  let limit = draw ? 8 : 9
  if (draw) {
    const card = dealCard()
    stack.push(card)
  }
  for (let i = 0; i < limit; i++) {
    stack.push(PLACEHOLDER)
  }
  return stack
}
