import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Storage from "src/lib/Storage"
import Firestore from "src/lib/Firestore"

export default function useRoomCode() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const onTextChange = (newCode) => {
    if (newCode.length < 5) setCode(newCode.toUpperCase())
  }

  const onSubmit = async () => {
    try {
      if (await Firestore.createJoinRoom(code)) {
        Storage.set("code", code)
        return navigate("friend_match")
      }
      return navigate("room_not_found")
    } catch (err) {
      console.error(err)
      return navigate("room_not_found")
    }
  }

  return [code, onTextChange, onSubmit]
}
