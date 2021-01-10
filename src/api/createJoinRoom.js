import { db } from "src/api/firebase"
import newRoomModel from "src/models/newRoomModel"
import newPlayerModel from "src/models/newPlayerModel"
import getAsyncStorage from "src/helpers/getAsyncStorage"

export default async function createJoinRoom(code) {
  const uuid = await getAsyncStorage("uuid")
  const roomDoc = await db.doc(`ROOMS/${code}`).get()

  // Create Room if no other players.
  if (!roomDoc.exists) {
    const room = newRoomModel(code, uuid)
    room.players[uuid] = newPlayerModel("fatman", true, "The Gentleman", uuid)
    await db.doc(`ROOMS/${code}`).set(room)
    return true
  }

  // Join room if one other player.
  if (roomDoc.exists) {
    const room = roomDoc.data()

    // Check if User Belongs to room already
    if (room.players[uuid]) {
      return true
    }

    // If space for more users add the user to the room.
    if (Object.keys(room.players).length === 1) {
      room.players[uuid] = newPlayerModel("fatwoman", false, "The Living Ham", uuid)
      room.waitingForOpponent = false
      await db.doc(`ROOMS/${code}`).set(room)
      return true
    }
  }

  // Fail if room is full.
  return false
}
