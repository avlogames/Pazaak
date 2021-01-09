import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import createJoinRoom from "src/api/createJoinRoom"
import setAsyncStorage from "src/helpers/setAsyncStorage"

export default function useCreateJoinRoom() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const handleSubmit = async () => {
    await createJoinRoom(code)
    setAsyncStorage("code", code)
    navigate("Pazaak")
  }

  return [code, setCode, handleSubmit]
}
