import { db } from "src/api/firebase"

class Firestore {
  unsubscribe = null

  updateDocument = async (code, doc) => {
    await db.doc(`ROOMS/${code}`).set(doc, { merge: true })
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
      let last = {}
      this.unsubscribe = db.doc(`ROOMS/${code}`).onSnapshot((doc) => {
        const value = doc.data()
        if (value !== last) {
          last = value
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
}

export default new Firestore()
