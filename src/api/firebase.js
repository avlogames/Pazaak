import "firebase/firestore"
import firebase from "firebase/app"

firebase.initializeApp({
  apiKey: "AIzaSyCDKAsrnbp9uhChMRN34wFNB3_KW-LeSjc",
  authDomain: "pazaak-5c7bb.firebaseapp.com",
  projectId: "pazaak-5c7bb",
  storageBucket: "pazaak-5c7bb.appspot.com",
  messagingSenderId: "142303170236",
  appId: "1:142303170236:web:584e81a006aaf4c06b8ab9",
  measurementId: "G-YJ2XN1NZ0R",
})

export const db = firebase.firestore()
