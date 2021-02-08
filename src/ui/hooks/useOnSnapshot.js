import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { db } from "src/firebase/config/firebase"
import { getAsyncStorage } from "src/ui/helpers/asyncStorage"

export default function useOnSnapshot() {
  const dispatch = useDispatch()
  const { navigate } = useNavigation()
  const [code, setCode] = useState(null)
  const [uuid, setUuid] = useState(null)

  const pazaak = useSelector((s) => s.pazaak)

  const getCode = async () => {
    const value = await getAsyncStorage("code")
    return setCode(value)
  }

  const getUuid = async () => {
    const value = await getAsyncStorage("uuid")
    return setUuid(value)
  }

  const cancel = async () => {
    await db.doc(`ROOMS/${code}`).delete()
    return navigate("join_room")
  }

  useEffect(() => {
    getCode()
    getUuid()
  }, [])

  useEffect(() => {
    if (code) {
      let last = {}
      const unsubscribe = db.doc(`ROOMS/${code}`).onSnapshot((doc) => {
        const value = doc.data()
        if (value !== last) {
          last = value
          dispatch({ type: "hydrate", value })
        }
      })
      return () => unsubscribe()
    }
  }, [code])

  return [code, pazaak, uuid, cancel]
}
