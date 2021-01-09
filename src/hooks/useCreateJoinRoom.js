import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import createJoinRoom from "src/api/createJoinRoom"

export default function useCreateJoinRoom() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const handleSubmit = async () => {
    await createJoinRoom(code)
    navigate("Pazaak")
  }

  return [code, setCode, handleSubmit]
}
