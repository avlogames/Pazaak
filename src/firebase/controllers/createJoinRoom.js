import { db } from "src/firebase/config/firebase"
import { getAsyncStorage } from "src/ui/helpers/asyncStorage"
import newRoomModel from "src/firebase/models/newRoomModel"
import newPlayerModel from "src/firebase/models/newPlayerModel"

export default async function createJoinRoom(code) {
  const uuid = await getAsyncStorage("uuid")
  const roomDoc = await db.doc(`ROOMS/${code}`).get()

  // Create Room if no other players.
  if (!roomDoc.exists) {
    await db.doc(`ROOMS/${code}`).set({
      ...newRoomModel(code, uuid),
      players: { [uuid]: newPlayerModel("man", true, "Dr. Colossus", uuid) },
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
        players: { ...room.players, [uuid]: newPlayerModel("woman", false, "Nibbler", uuid) },
        waitingForOpponent: false,
      })

      return true
    }
  }

  // Fail if room is full.
  return false
}
