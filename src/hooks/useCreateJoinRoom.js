import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { setAsyncStorage } from "src/helpers/asyncStorage"
import createJoinRoom from "src/api/createJoinRoom"

export default function useCreateJoinRoom() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const onTextChange = (newCode) => {
    if (newCode.length < 5) setCode(newCode.toUpperCase())
  }

  const onSubmit = async () => {
    try {
      if (await createJoinRoom(code)) {
        setAsyncStorage("code", code)
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
