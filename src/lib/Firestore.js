import { firestore } from "src/lib/firebase"
import * as storage from "src/lib/storage"
import * as room from "src/lib/room"

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
  const uuid = await storage.get("uuid")
  const roomDoc = await firestore.doc(`ROOMS/${code}`).get()

  // Room Doesn't Exist
  if (!roomDoc.exists) {
    // Create New Room And Add Instigator
    updateRoomDocument(code, room.create(code, uuid))
    return true
  }

  // Room Already Exists
  if (roomDoc.exists) {
    const roomData = roomDoc.data()

    // Challenger Already Belongs To Room
    if (roomData.players[uuid]) return true

    // If No Challenger In Room
    if (Object.keys(roomData.players).length === 1) {
      // Add Challenger To Room
      updateRoomDocument(code, room.addOpponent(roomData, uuid))
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
    const docData = doc.data()

    // If Value Has Changed
    if (docData !== previous) {
      // Update Previous Value
      previous = docData

      // Run Callback
      callback(docData)
    }
  })
}
