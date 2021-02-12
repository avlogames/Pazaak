import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Storage from "src/lib/Storage"
import createJoinRoom from "src/api/firebase/firestore/createJoinRoom"

export default function useRoomCode(useFirestore) {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const onTextChange = (newCode) => {
    if (newCode.length < 5) setCode(newCode.toUpperCase())
  }

  const onSubmit = async () => {
    try {
      if (await createJoinRoom(code, useFirestore)) {
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
