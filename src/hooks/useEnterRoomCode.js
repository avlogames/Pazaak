import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Storage from "src/lib/Storage"
import Firestore from "src/lib/Firestore"

export default function useEnterRoomCode() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  useEffect(() => {
    Storage.get("code").then((c) => (c ? navigate("friend_match") : null))
  }, [])

  const onTextChange = (c) => (c.length < 5 ? setCode(c.toUpperCase()) : null)

  const onSubmit = async () => {
    const roomFound = await Firestore.createJoinRoom(code)
    if (!roomFound) return navigate("room_not_found")
    Storage.set("code", code)
    return navigate("friend_match")
  }

  return { code, onTextChange, onSubmit }
}
