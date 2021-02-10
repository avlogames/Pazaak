import { db } from "src/api/firebase"
import Pazaak from "src/lib/Pazaak"
import Storage from "src/lib/Storage"

function createPlayer(avatar, draw, name, uuid) {
  const stack = Pazaak.initializeStack(draw)
  const score = stack.reduce((a, v) => (a += v.value), 0)
  const sideDeck = Pazaak.initializeSideDeck()
  return { avatar, credits: 100, name, score, sideDeck, stack, uuid, wins: 0 }
}

export default async function createJoinRoom(code) {
  const uuid = await Storage.get("uuid")
  const roomDoc = await db.doc(`ROOMS/${code}`).get()

  // Create Room if no other players.
  if (!roomDoc.exists) {
    await db.doc(`ROOMS/${code}`).set({
      activePlayer: uuid,
      gameOver: false,
      players: { [uuid]: createPlayer("man", true, "Dr. Colossus", uuid) },
      roomCode: code,
      standing: [],
      waitingForOpponent: true,
      winner: null,
    })

    return true
  }

  // Join room if one other player.
  if (roomDoc.exists) {
    const room = roomDoc.data()

    // Check if User Belongs to room already
    if (room.players[uuid]) return true

    // If space for more users add the user to the room.
    if (Object.keys(room.players).length === 1) {
      await db.doc(`ROOMS/${code}`).set({
        ...room,
        players: { ...room.players, [uuid]: createPlayer("woman", false, "Nibbler", uuid) },
        waitingForOpponent: false,
      })

      return true
    }
  }

  // Fail if room is full.
  return false
}
