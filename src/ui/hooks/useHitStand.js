import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import updateDocument from "src/api/controllers/updateDocument"
import dealCard from "src/ui/helpers/dealCard"
import initializeStack from "src/ui/helpers/initializeStack"
import { getAsyncStorage } from "src/ui/helpers/asyncStorage"

export default function useHitStand(uoid) {
  const pazaak = useSelector((s) => s.pazaak)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    getAsyncStorage("uuid").then((u) => setUuid(u))
  }, [])

  const stand = () => {
    const newPazaak = pazaak

    // Player Stands on a Bust.
    if (newPazaak.players[uuid].score > 20) {
      newPazaak.players[uoid].wins += 1
      newPazaak.players[uuid].stack = initializeStack(false)
      newPazaak.players[uoid].stack = initializeStack(true)
      newPazaak.players[uuid].score = newPazaak.players[uuid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.players[uoid].score = newPazaak.players[uoid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.activePlayer = uoid
      newPazaak.standing = []
      return updateDocument(newPazaak)
    }

    // Player is first to stand.
    if (!pazaak.standing.includes(uuid) && !pazaak.standing.includes(uoid)) {
      const newCard = dealCard()
      const stack = newPazaak.players[uoid].stack
      stack[stack.findIndex((o) => o.type === "placeholder")] = newCard
      newPazaak.players[uoid].score = stack.reduce((a, v) => a + v.value, 0)
      newPazaak.standing.push(uuid)
      newPazaak.activePlayer = uoid
      return updateDocument(newPazaak)
    }

    // Opponent is standing. (Both will be standing).
    if (pazaak.standing.includes(uoid)) {
      const playerScore = pazaak.players[uuid].score
      const opponentScore = pazaak.players[uoid].score
      if ((opponentScore > 20 && playerScore < 21) || (playerScore > opponentScore && playerScore < 21))
        newPazaak.players[uuid].wins += 1
      if ((playerScore > 20 && opponentScore < 21) || (opponentScore > playerScore && opponentScore < 21))
        newPazaak.players[uoid].wins += 1
      newPazaak.players[uuid].stack = initializeStack(false)
      newPazaak.players[uoid].stack = initializeStack(true)
      newPazaak.players[uuid].score = newPazaak.players[uuid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.players[uoid].score = newPazaak.players[uoid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.activePlayer = uoid
      newPazaak.standing = []
      return updateDocument(newPazaak)
    }
  }

  const hitMe = () => {
    const newPazaak = pazaak
    const newCard = dealCard()
    const stack = newPazaak.players[uuid].stack
    stack[stack.findIndex((o) => o.type === "placeholder")] = newCard
    newPazaak.players[uuid].score = stack.reduce((a, v) => a + v.value, 0)
    return updateDocument(newPazaak)
  }

  return [hitMe, stand]
}
