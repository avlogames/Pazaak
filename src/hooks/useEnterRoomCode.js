import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Storage from "src/lib/Storage"
import Firestore from "src/lib/Firestore"

export default function useEnterRoomCode() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  useEffect(function () {
    Storage.get("code").then((c) => (c ? navigate("friend_match") : null))
  }, [])

  // Update Room Code Text
  function onCodeChange(c) {
    // If Code Is 4 Digits Or Less
    if (c.length < 5) {
      setCode(c.toUpperCase())
    }
  }

  // Submit Room Code
  async function onSubmitCode() {
    // Try To Create / Join Room And Get Boolean Response
    const roomReady = await Firestore.createJoinRoom(code)

    // Room Is Available
    if (roomReady) {
      Storage.set("code", code)
      return navigate("friend_match")
    }

    // Room Unavailable
    return navigate("room_not_found")
  }

  return { code, onSubmitCode, onCodeChange }
}
