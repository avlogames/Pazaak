import { useEffect } from "react"
import { useSelector } from "react-redux"
import Redux from "src/lib/Redux"

export default function useRandomMatch() {
  const pazaak = useSelector((s) => s.pazaak)
  const ready = Object.keys(pazaak).length > 0

  useEffect(() => {
    const timeout = Math.floor(Math.random() * 5000)
    setTimeout(() => {
      Redux.createFakeRoom()
    }, timeout)
  }, [])

  const quit = async () => {
    Firestore.deleteRoom(code)
    Storage.remove("code")
    return navigate("enter_room_code")
  }

  return [pazaak, ready, quit]
}
