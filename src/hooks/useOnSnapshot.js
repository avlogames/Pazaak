import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { db } from "src/api/firebase"
import getAsyncStorage from "src/helpers/getAsyncStorage"

export default function useOnSnapshot() {
  const dispatch = useDispatch()
  const pazaak = useSelector((s) => s.pazaak)
  const [code, setCode] = useState(null)
  const [uuid, setUuid] = useState(null)

  const getCode = async () => {
    const value = await getAsyncStorage("code")
    return setCode(value)
  }

  const getUuid = async () => {
    const value = await getAsyncStorage("uuid")
    return setUuid(value)
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

  return [code, pazaak, uuid]
}
