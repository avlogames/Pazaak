import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import createJoinRoom from "src/api/createJoinRoom"
import { setAsyncStorage } from "src/helpers/asyncStorage"

export default function useCreateJoinRoom() {
  const { navigate } = useNavigation()
  const [code, setCode] = useState("")

  const onTextChange = async (newCode) => {
    if (newCode.length !== 4) {
      return setCode(newCode.toUpperCase())
    }

    try {
      if (await createJoinRoom(newCode)) {
        setCode(newCode.toUpperCase())
        setAsyncStorage("code", newCode)
        return navigate("Pazaak")
      }

      return navigate("Join Error")
    } catch (err) {
      console.error(err)
    }
  }

  return [code, onTextChange]
}
