import { db } from "src/api/firebase"

class Firestore {
  constructor() {
    this.unsubscribe = null
  }

  subscribe = (code, callback) => {
    let last = {}
    this.unsubscribe = db.doc(`ROOMS/${code}`).onSnapshot((doc) => {
      const value = doc.data()
      if (value !== last) {
        last = value
        callback(value)
      }
    })
  }

  unsubscribe = () => this.unsubscribe()
}

export default new Firestore()
