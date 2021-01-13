import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import createJoinRoom from "src/api/createJoinRoom"
import { setAsyncStorage } from "src/helpers/asyncStorage"

export default function useCreateJoinRoom() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const handleSubmit = async () => {
    if (code.length === 4) {
      const success = await createJoinRoom(code)
      
      if (success) {
        setAsyncStorage("code", code)
        return navigate("Pazaak")
      }
    }
    return navigate("Join Error")
  }

  return [code, setCode, handleSubmit]
}
