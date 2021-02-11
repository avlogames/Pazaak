import Pazaak from "src/lib/Pazaak"
import updateDocument from "src/api/firebase/firestore/updateDocument"
import store from "src/api/redux"

class GameActions {
  /**
   * Hit New Card
   */
  hit = (pazaak, pid, oid, useFirebase) => {
    const newPazaak = pazaak
    const player = newPazaak.players[pid]
    const stack = player.stack
    const nextPlace = stack.findIndex((o) => o.type === "placeholder")

    // Set stack and store.
    stack[nextPlace] = Pazaak.dealCard()
    player.score = stack.reduce((a, v) => (a += v.value), 0)

    // Add newPazaak to firebase or redux
    if (useFirebase) updateDocument(newPazaak)
    else store.dispatch({ type: "hydrate", value: newPazaak })

    // Return auto stand (if 9 cards) or false
    const cardLimit = stack.filter((card) => card.type !== "placeholder")
    return cardLimit.length === 9 ? this.stand(newPazaak, pid, oid, useFirebase) : false
  }

  /**
   * Stand At Current Score
   */
  stand = (pazaak, pid, oid, useFirebase) => {
    const newPazaak = pazaak

    // Player Stands on a Bust.
    if (newPazaak.players[pid].score > 20) {
      newPazaak.players[oid].wins += 1
      newPazaak.players[pid].stack = Pazaak.initializeStack(false)
      newPazaak.players[oid].stack = Pazaak.initializeStack(true)
      newPazaak.players[pid].score = newPazaak.players[pid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.players[oid].score = newPazaak.players[oid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.activePlayer = oid
      newPazaak.standing = []
      return useFirebase ? updateDocument(newPazaak) : store.dispatch({ type: "hydrate", value: newPazaak })
    }

    // Player is first to stand.
    if (!pazaak.standing.includes(pid) && !pazaak.standing.includes(oid)) {
      const stack = newPazaak.players[oid].stack
      stack[stack.findIndex((o) => o.type === "placeholder")] = Pazaak.dealCard()
      newPazaak.players[oid].score = stack.reduce((a, v) => a + v.value, 0)
      newPazaak.standing.push(pid)
      newPazaak.activePlayer = oid
      return useFirebase ? updateDocument(newPazaak) : store.dispatch({ type: "hydrate", value: newPazaak })
    }

    // Opponent is standing. (Both will be standing).
    if (pazaak.standing.includes(oid)) {
      const playerScore = pazaak.players[pid].score
      const opponentScore = pazaak.players[oid].score
      if ((opponentScore > 20 && playerScore < 21) || (playerScore > opponentScore && playerScore < 21))
        newPazaak.players[pid].wins += 1
      if ((playerScore > 20 && opponentScore < 21) || (opponentScore > playerScore && opponentScore < 21))
        newPazaak.players[oid].wins += 1
      newPazaak.players[pid].stack = Pazaak.initializeStack(false)
      newPazaak.players[oid].stack = Pazaak.initializeStack(true)
      newPazaak.players[pid].score = newPazaak.players[pid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.players[oid].score = newPazaak.players[oid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.activePlayer = oid
      newPazaak.standing = []
      return useFirebase ? updateDocument(newPazaak) : store.dispatch({ type: "hydrate", value: newPazaak })
    }
  }
}

export default new GameActions()
