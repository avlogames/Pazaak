import dealCard from "src/ui/helpers/dealCard"
import { PLACEHOLDER } from "src/ui/config"

export default function initializeStack(draw = false) {
  const stack = []
  let limit = draw ? 8 : 9

  if (draw) stack.push(dealCard())

  for (let i = 0; i < limit; i++) {
    stack.push(PLACEHOLDER)
  }
  
  return stack
}
