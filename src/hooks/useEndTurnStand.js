import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import updateDocument from "src/api/updateDocument"
import dealCard from "src/helpers/dealCard"
import initializeStack from "src/helpers/initializeStack"
import getAsyncStorage from "src/helpers/getAsyncStorage"

export default function useEndTurnStand(uoid) {
  const pazaak = useSelector((s) => s.pazaak)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    getAsyncStorage("uuid").then((u) => setUuid(u))
  }, [])

  const stand = () => {
    const newPazaak = pazaak
    const currentPlayer = pazaak.activePlayer
    const nextPlayer = currentPlayer === uuid ? uoid : uuid

    // Opponent is standing. (Both will be standing).
    if (pazaak.standing.includes(uoid)) {
      const playerScore = pazaak.players[uuid].score
      const opponentScore = pazaak.players[uoid].score
      if (playerScore > opponentScore && playerScore < 21) newPazaak.players[uuid].wins += 1
      if (opponentScore > playerScore && opponentScore < 21) newPazaak.players[uoid].wins += 1
      newPazaak.players[currentPlayer].stack = initializeStack(false)
      newPazaak.players[nextPlayer].stack = initializeStack(true)
      newPazaak.players[uuid].score = newPazaak.players[uuid].stack.reduce((a, v) => (a + v.value), 0)
      newPazaak.players[uoid].score = newPazaak.players[uoid].stack.reduce((a, v) => (a + v.value), 0)
      newPazaak.activePlayer = nextPlayer
      newPazaak.standing = []
      return updateDocument(newPazaak)
    }

    // Player is first to stand.
    if (!pazaak.standing.includes(uuid)) {
      newPazaak.standing.push(uuid)
      newPazaak.activePlayer = nextPlayer
      return updateDocument(newPazaak)
    }
  }

  const endTurn = () => {
    const newPazaak = pazaak
    const newCard = dealCard()
    
    // Opponent is standing.
    if (pazaak.standing.includes(uoid)) {
      const stack = newPazaak.players[uuid].stack
      stack[stack.findIndex((o) => o.type === "placeholder")] = newCard
      newPazaak.players[uuid].score = stack.reduce((a, v) => (a + v.value), 0)
      return updateDocument(newPazaak)
    }

    // No one is standing.
    const stack = newPazaak.players[uoid].stack
    stack[stack.findIndex((o) => o.type === "placeholder")] = newCard

    newPazaak.players[uoid].score = stack.reduce((a, v) => (a + v.value), 0)
    newPazaak.activePlayer = uoid
    console.log(newPazaak)
    return updateDocument(newPazaak)

  }

  return [endTurn, stand]
}
