import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import createJoinRoom from "src/api/createJoinRoom"
import setAsyncStorage from "src/helpers/setAsyncStorage"

export default function useCreateJoinRoom() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const handleSubmit = async () => {
    const success = await createJoinRoom(code)
    if (success) {
      setAsyncStorage("code", code)
      return navigate("Pazaak")
    }
    return navigate("Join Error")
  }

  return [code, setCode, handleSubmit]
}
