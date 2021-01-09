import { db } from "src/api/firebase"
import newRoomModel from "src/models/newRoomModel"
import newPlayerModel from "src/models/newPlayerModel"
import getUuidFromAsyncStorage from "src/helpers/getUuidFromAsyncStorage"

export default async function createJoinRoom(code) {
  const uuid = await getUuidFromAsyncStorage()
  const roomDoc = await db.doc(`ROOMS/${code}`).get()

  if (!roomDoc.exists) {
    const room = newRoomModel(code, uuid)
    room.players.push(newPlayerModel("src/assets/fat-man.jpg", "Dr. Sex", uuid))
    return await db.doc(`ROOMS/${code}`).set(room)
  }

  // What if there is already two people?
  if (roomDoc.exists) {
    const room = roomDoc.data()
    room.players.push(newPlayerModel("src/assets/fat-woman.jpg", "Madame Burger", uuid))
    room.waitingForOpponent = false
    return await db.doc(`ROOMS/${code}`).set(room)
  }
}
