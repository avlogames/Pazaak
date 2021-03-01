import { firestore } from "src/lib/firebase"
import Storage from "src/lib/Storage"
import Room from "src/lib/Room"

/**
 * Update Room Document
 */
export async function updateRoomDocument(code, doc) {
  // Async Update Document
  await firestore.doc(`ROOMS/${code}`).set(doc, { merge: true })
}

/**
 * Delete Room Document
 */
export async function deleteRoomDocument(code) {
  // Delete Room Document
  await db.doc(`ROOMS/${code}`).delete()
}

/**
 * Create Or Join Room
 */
export async function createOrJoinRoom(code) {
  const uuid = await Storage.get("uuid")
  const roomDoc = await firestore.doc(`ROOMS/${code}`).get()

  // Room Doesn't Exist
  if (!roomDoc.exists) {
    // Create New Room And Add Instigator
    updateRoomDocument(code, Room.create(code, uuid))
    return true
  }

  // Room Already Exists
  if (roomDoc.exists) {
    const room = roomDoc.data()

    // Challenger Already Belongs To Room
    if (room.players[uuid]) return true

    // If No Challenger In Room
    if (Object.keys(room.players).length === 1) {
      // Add Challenger To Room
      updateRoomDocument(code, Room.addOpponent(room, uuid))
      return true
    }
  }
}

/**
 * Subscribe To Room Snapshots
 */
export async function subscribeToRoom(code, callback) {
  let previous = {}

  // Create And Return Snapshot Listener
  return firestore.doc(`ROOMS/${code}`).onSnapshot((doc) => {
    // Get Doc Data
    const value = doc.data()

    // If Value Has Changed
    if (value !== previous) {
      // Update Previous Value
      previous = value

      // Run Callback
      callback(value)
    }
  })
}
