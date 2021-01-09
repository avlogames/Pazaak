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
    room.players.push(newPlayerModel("src/assets/fat-man.jpg", "Dr. Sex", uuid))
    await db.doc(`ROOMS/${code}`).set(room)
    return true
  }

  // Join room if one other player.
  if (roomDoc.exists) {
    const room = roomDoc.data()
    if (room.players.length === 1) {
      // Ensure the player isn't already me.
      if (room.players[0].uuid !== uuid) {
        room.players.push(newPlayerModel("src/assets/fat-woman.jpg", "Madame Burger", uuid))
        room.waitingForOpponent = false
        await db.doc(`ROOMS/${code}`).set(room)
      }
      return true
    }
  }

  // Fail if room is full.
  return false
}
