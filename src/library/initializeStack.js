import { PLACEHOLDER } from "src/constants"

export default function initializeStack() {
  const stack = []
  for (let i = 0; i < 9; i++) {
    stack.push(PLACEHOLDER)
  }
  return stack
}
