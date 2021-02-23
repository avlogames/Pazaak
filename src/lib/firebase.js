import "firebase/firestore"
import firebase from "firebase/app"
import { FIREBASE } from "src/config"

// Initialize App
firebase.initializeApp(FIREBASE)

// Firebase Module
export default firebase

// Firestore Module
export const firestore = firebase.firestore()
