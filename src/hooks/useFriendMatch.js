import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import Firestore from "src/lib/Firestore"
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
  useEffect(() => {
    if (code) {
      // Subscribe To Snapshot And Update Redux
      Firestore.subscribe(code, function (value) {
        return dispatch({ type: "hydrate", value })
      })

      // Unsubscribe From Listener On Unmount
      return Firestore.unsubscribe
    }
  }, [code])

  /**
   * User Quits Match
   */
  async function onQuit() {
    // Delete Room
    Firestore.deleteRoom(code)

    // Remove Code From Storage
    Storage.remove("code")

    // Navigate To Home Screen
    return navigate("choose_game")
  }

  return [code, pazaak, uuid, onQuit]
}
