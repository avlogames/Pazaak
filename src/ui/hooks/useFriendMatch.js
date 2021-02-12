import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { db } from "src/api/firebase"
import Firestore from "src/lib/Firestore"
import Storage from "src/lib/Storage"

export default function useFriendMatch() {
  const dispatch = useDispatch()
  const pazaak = useSelector((s) => s.pazaak)
  const { navigate } = useNavigation()
  const [code, setCode] = useState(null)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    Storage.get("code").then((code) => setCode(code))
    Storage.get("uuid").then((uuid) => setUuid(uuid))
  }, [])

  useEffect(() => {
    if (code) {
      Firestore.subscribe(code, (value) => dispatch({ type: "hydrate", value }))
      return Firestore.unsubscribe
    }
  }, [code])

  const cancel = async () => {
    Firestore.deleteRoom(code)
    return navigate("enter_room_code")
  }

  return [code, pazaak, uuid, cancel]
}
