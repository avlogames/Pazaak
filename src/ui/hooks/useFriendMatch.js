import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { db } from "src/api/firebase"
import Firestore from "src/lib/Firestore"
import Storage from "src/lib/Storage"

export default function useFriendMatch() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const [code, setCode] = useState(null)
  const [uuid, setUuid] = useState(null)

  const pazaak = useSelector((s) => s.pazaak)

  const getCode = async () => {
    const value = await Storage.get("code")
    return setCode(value)
  }

  const getUuid = async () => {
    const value = await Storage.get("uuid")
    return setUuid(value)
  }

  const cancel = async () => {
    await db.doc(`ROOMS/${code}`).delete()
    return navigate("enter_room_code")
  }

  useEffect(() => {
    getCode()
    getUuid()
  }, [])

  useEffect(() => {
    if (code) {
      Firestore.subscribe(code, (value) => dispatch({ type: "hydrate", value }))
      return Firestore.unsubscribe
    }
  }, [code])

  return [code, pazaak, uuid, cancel]
}
