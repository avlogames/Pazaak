import { db } from "src/api/firebase"
import Storage from "src/lib/Storage"
import GameActions from "src/lib/GameActions"

export default async function createJoinRoom(code, useFirestore) {
  const uuid = await Storage.get("uuid")
  const roomDoc = await db.doc(`ROOMS/${code}`).get()

  // Create Room if no other players.
  if (!roomDoc.exists) {
    await GameActions.createNewRoom(code, uuid, useFirestore)
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
