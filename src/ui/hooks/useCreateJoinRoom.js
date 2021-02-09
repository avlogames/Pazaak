import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Storage from "src/lib/Storage"
import createJoinRoom from "src/api/firebase/firestore/controllers/createJoinRoom"

export default function useCreateJoinRoom() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const onTextChange = (newCode) => {
    if (newCode.length < 5) setCode(newCode.toUpperCase())
  }

  const onSubmit = async () => {
    try {
      if (await createJoinRoom(code)) {
        Storage.set("code", code)
        return navigate("pazaak")
      }
      return navigate("room_not_found")
    } catch (err) {
      console.error(err)
      return navigate("room_not_found")
    }
  }

  return [code, onTextChange, onSubmit]
}
