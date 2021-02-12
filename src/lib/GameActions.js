import store from "src/api/redux"
import Firestore from "src/lib/Firestore"
import Pazaak from "src/lib/Pazaak"
import { PLACEHOLDER } from "src/config"
import Storage from "src/lib/Storage"

class GameActions {
  constructor() {
    this.code = null
    Storage.get("code").then((code) => (this.code = code))
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
      if (useFirestore) Firestore.updateDocument(this.code, newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })

      return false
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
    if (useFirestore) Firestore.updateDocument(this.code, newPazaak)
    else store.dispatch({ type: "hydrate", value: newPazaak })

    return false
  }

  /**
   * Hit New Card
   */
  hit = (pazaak, pid, oid, useFirestore) => {
    try {
      const newPazaak = pazaak
      const player = newPazaak.players[pid]
      const stack = player.stack
      const nextPlaceholder = stack.findIndex((o) => o.type === "placeholder")

      // Set Stack And Store
      newPazaak.players[pid].stack[nextPlaceholder] = Pazaak.dealCard()
      player.score = stack.reduce((a, v) => (a += v.value), 0)

      // Add New Pazaak To Firestore Or Redux
      if (useFirestore) Firestore.updateDocument(this.code, newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })

      // Return Auto-Stand (If 9 Cards) Or False
      if (Pazaak.stackLimit(stack)) {
        this.stand(newPazaak, pid, oid, useFirestore)
      }

      return false
    } catch (err) {
      console.log(err)
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
      if (useFirestore) Firestore.updateDocument(this.code, newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })

      return false
    }

    // Player Is First To Stand
    if (!pazaak.standing.includes(pid) && !pazaak.standing.includes(oid)) {
      const opponentStack = newPazaak.players[oid].stack
      const nextPlaceholder = opponentStack.findIndex((o) => o.type === "placeholder")

      // Deal Opponent A First Card And Update Score
      newPazaak.players[oid].stack[nextPlaceholder] = Pazaak.dealCard()
      newPazaak.players[oid].score = opponentStack.reduce((a, v) => a + v.value, 0)

      // Add User To Standing and Change Active Player
      newPazaak.standing.push(pid)
      newPazaak.activePlayer = oid

      // Add New Pazaak To Firestore Or Redux
      if (useFirestore) Firestore.updateDocument(this.code, newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })

      return false
    }

    // Opponent Is Standing. (Both Will Be Standing)
    if (pazaak.standing.includes(oid)) {
      let playerScore = newPazaak.players[pid].score
      let opponentScore = newPazaak.players[oid].score

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
      newPazaak.players[pid].score = newPazaak.players[pid].stack.reduce((a, v) => a + v.value, 0)
      newPazaak.players[oid].score = newPazaak.players[oid].stack.reduce((a, v) => a + v.value, 0)

      // Reset Standing And Change Active Player
      newPazaak.standing = []
      newPazaak.activePlayer = oid

      // Add New Pazaak To Firestore Or Redux
      if (useFirestore) Firestore.updateDocument(this.code, newPazaak)
      else store.dispatch({ type: "hydrate", value: newPazaak })

      return false
    }
  }
}

export default new GameActions()
