import updateDocument from "src/api/firebase/firestore/updateDocument"
import { PLACEHOLDER } from "src/ui/config"
import Pazaak from "src/lib/Pazaak"
import Firestore from "src/lib/Firestore"
import Room from "src/lib/Room"
import store from "src/api/redux"

class GameActions {
  /**
   * Create New Room
   */
  createNewRoom = async (code, uuid, useFirestore) => {
    const newRoom = Room.create(code, uuid)

    // Add New Pazaak To Firestore Or Redux
    if (useFirestore) Firestore.updateDocument(code, newRoom)
    else store.dispatch({ type: "hydrate", value: newRoom })
  }

  /**
   * Check For Player With 3 Wins
   */
  checkForWinner = (pazaak, useFirestore) => {
    const players = pazaak.players
    const playerKeys = Object.keys(players)
    const winner = playerKeys.find((k) => players[k].wins === 3)

    if (typeof winner !== "undefined") {
      const newPazaak = { ...pazaak, gameOver: true, winner }

      // Add New Pazaak To Firestore Or Redux
      if (useFirestore) updateDocument(newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })
    }
  }

  /**
   * Play Card From Side Deck
   */
  playSideDeckCard = (pazaak, cardIndex, pid, useFirestore) => {
    const newPazaak = pazaak
    const player = newPazaak.players[pid]
    const card = player.sideDeck[cardIndex]

    // Set Player Values
    player.stack[player.stack.findIndex((o) => o.type === "placeholder")] = card
    player.score = player.stack.reduce((a, o) => (a += o.value), 0)
    player.sideDeck[cardIndex] = PLACEHOLDER

    // Add New Pazaak To Firestore Or Redux
    if (useFirestore) updateDocument(newPazaak)
    else store.dispatch({ type: "hydrate", value: newPazaak })
  }

  /**
   * Hit New Card
   */
  hit = (pazaak, pid, oid, useFirestore) => {
    const newPazaak = pazaak
    const player = newPazaak.players[pid]
    const stack = player.stack
    const nextPlaceholder = stack.findIndex((o) => o.type === "placeholder")

    // Set Stack And Store
    stack[nextPlaceholder] = Pazaak.dealCard()
    player.score = stack.reduce((a, v) => (a += v.value), 0)

    // Add New Pazaak To Firestore Or Redux
    if (useFirestore) updateDocument(newPazaak)
    else store.dispatch({ type: "hydrate", value: newPazaak })

    // Return Auto-Stand (If 9 Cards) Or False
    if (Pazaak.stackLimit(stack)) {
      this.stand(newPazaak, pid, oid, useFirestore)
    }
  }

  /**
   * Stand At Current Score
   */
  stand = (pazaak, pid, oid, useFirestore) => {
    const newPazaak = pazaak

    // Player Stands On A Bust
    if (newPazaak.players[pid].score > 20) {
      // Reset Player Stack And Score
      newPazaak.players[pid].stack = Pazaak.initializeStack(false)
      newPazaak.players[pid].score = newPazaak.players[pid].stack.reduce((a, v) => a + v.value, 0)

      // Reset Opponent Stack And Score - Incriment Wins
      newPazaak.players[oid].wins += 1
      newPazaak.players[oid].stack = Pazaak.initializeStack(true)
      newPazaak.players[oid].score = newPazaak.players[oid].stack.reduce((a, v) => a + v.value, 0)

      // Reset Standing And Change Active Player
      newPazaak.standing = []
      newPazaak.activePlayer = oid

      // Add New Pazaak To Firestore Or Redux
      if (useFirestore) updateDocument(newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })
    }

    // Player Is First To Stand
    if (!pazaak.standing.includes(pid) && !pazaak.standing.includes(oid)) {
      const opponentStack = newPazaak.players[oid].stack
      const nextPlaceholder = opponentStack.findIndex((o) => o.type === "placeholder")

      // Deal Opponent A First Card And Update Score
      opponentStack[nextPlaceholder] = Pazaak.dealCard()
      newPazaak.players[oid].score = opponentStack.reduce((a, v) => a + v.value, 0)

      // Add User To Standing and Change Active Player
      newPazaak.standing.push(pid)
      newPazaak.activePlayer = oid

      // Add New Pazaak To Firestore Or Redux
      if (useFirestore) updateDocument(newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })
    }

    // Opponent Is Standing. (Both Will Be Standing)
    if (pazaak.standing.includes(oid)) {
      let playerScore = pazaak.players[pid].score
      let opponentScore = pazaak.players[oid].score

      // If Player Wins - Increment Score
      if ((opponentScore > 20 && playerScore < 21) || (playerScore > opponentScore && playerScore < 21)) {
        newPazaak.players[pid].wins += 1
      }

      // If Opponent Wins - Increment Score
      if ((playerScore > 20 && opponentScore < 21) || (opponentScore > playerScore && opponentScore < 21)) {
        newPazaak.players[oid].wins += 1
      }

      // Reinitialize Stacks
      newPazaak.players[pid].stack = Pazaak.initializeStack(false)
      newPazaak.players[oid].stack = Pazaak.initializeStack(true)

      // Reset Scores For Both Players
      pazaak.players[pid].score = newPazaak.players[pid].stack.reduce((a, v) => a + v.value, 0)
      pazaak.players[oid].score = newPazaak.players[oid].stack.reduce((a, v) => a + v.value, 0)

      // Reset Standing And Change Active Player
      newPazaak.standing = []
      newPazaak.activePlayer = oid

      // Add New Pazaak To Firestore Or Redux
      if (useFirestore) updateDocument(newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })
    }
  }
}

export default new GameActions()
