import { db } from "src/api/firebase"
import Storage from "src/lib/Storage"
import Room from "src/lib/Room"

class Firestore {
  unsubscribe = null
  last = {}

  /**
   * Create Room
   */
  createJoinRoom = async (code) => {
    const uuid = await Storage.get("uuid")
    const roomDoc = await db.doc(`ROOMS/${code}`).get()

    // Room Doesn't Exist
    if (!roomDoc.exists) {
      // Create New Room
      this.updateDocument(code, Room.create(code, uuid))
      return true
    }

    // Room Already Exists
    if (roomDoc.exists) {
      const room = roomDoc.data()

      // Challenger Already Belongs To Room
      if (room.players[uuid]) return true

      // If No Opponent - Add Them To Room
      if (Object.keys(room.players).length === 1) {
        this.updateDocument(code, Room.addOpponent(room, uuid))
        return true
      }
    }
  }

  /**
   * Delete Room From Firestore
   */
  deleteRoom = async (code) => {
    try {
      await db.doc(`ROOMS/${code}`).delete()
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Subscribe To Room Document
   */
  subscribe = (code, callback) => {
    try {
      this.unsubscribe = db.doc(`ROOMS/${code}`).onSnapshot((doc) => {
        const value = doc.data()
        if (value !== this.last) {
          this.last = value
          callback(value)
        }
      })
    } catch (err) {
      console.error(err)
    }
  }

  /**
   * Unsubscribe From Room
   */
  unsubscribe = () => {
    return this.unsubscribe()
  }

  /**
   * Update Document
   */
  updateDocument = async (code, doc) => {
    await db.doc(`ROOMS/${code}`).set(doc, { merge: true })
  }
}

export default new Firestore()
