import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Redux from "src/lib/Redux"
import Storage from "src/lib/Storage"

export default function useRandomMatch() {
  const [uuid, setUuid] = useState(null)
  const pazaak = useSelector((s) => s.pazaak)
  const ready = Object.keys(pazaak).length > 0 && uuid

  useEffect(() => {
    const timeout = Math.floor(Math.random() * 5000)
    setTimeout(() => Redux.createFakeRoom(), 0)
    Storage.get("uuid").then((uuid) => setUuid(uuid))
  }, [])

  const quit = async () => {
    Firestore.deleteRoom(code)
    Storage.remove("code")
    return navigate("enter_room_code")
  }

  return [pazaak, ready, uuid, quit]
}
