import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import * as firestore from "src/lib/firestore"
import Storage from "src/lib/Storage"

/**
 * Hook For Initializing Friend Match
 */
export default function useFriendMatch() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const [code, setCode] = useState(null)
  const [uuid, setUuid] = useState(null)
  const pazaak = useSelector((s) => s.pazaak)

  /**
   * UseEffect: Component Mounted
   */
  useEffect(function () {
    Storage.get("code").then((code) => setCode(code))
    Storage.get("uuid").then((uuid) => setUuid(uuid))
  }, [])

  /**
   * UseEffect: Code Initialized
   */
  useEffect(function () {
    if (code) {
      // Subscribe To Snapshot And Update Redux
      const unsubscribe = firestore.subscribeToRoom(code, function (value) {
        return dispatch({ type: "hydrate", value })
      })

      // Unsubscribe From Listener On Unmount
      return () => unsubscribe
    }
  }, [code])

  /**
   * User Quits Match
   */
  async function onQuit() {
    // Delete Room
    firestore.deleteRoomDocument(code)

    // Remove Code From Storage
    Storage.remove("code")

    // Navigate To Home Screen
    return navigate("choose_game")
  }

  return [code, pazaak, uuid, onQuit]
}
