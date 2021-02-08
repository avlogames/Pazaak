import "firebase/firestore"
import firebase from "firebase/app"
import fb from "src/firebase/config/initialization"

firebase.initializeApp({
  apiKey: fb.apiKey,
  authDomain: fb.authDomain,
  projectId: fb.projectId,
  storageBucket: fb.storageBucket,
  messagingSenderId: fb.messagingSenderId,
  appId: fb.appId,
  measurementId: fb.measurementId,
})

export const db = firebase.firestore()
