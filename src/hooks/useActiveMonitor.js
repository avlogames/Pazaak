import { useEffect } from "react"
import { AppState } from "react-native"
import { db } from "src/api/firebase"

export default function useActiveMonitor() {
  const handleAppState = (next) => {
    if (next === "active") {
      db.collection("matches").doc("TEST")
    }
  }

  useEffect(() => {
    AppState.addEventListener("change", handleAppState)
    return () => console.log("goodbye")
  })
}
