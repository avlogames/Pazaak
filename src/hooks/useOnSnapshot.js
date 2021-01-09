import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { db } from "src/api/firebase"
import getAsyncStorage from "src/helpers/getAsyncStorage"

export default function useOnSnapshot() {
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
  })

  useEffect(() => {
    if (code) {
      const unsubscribe = db.doc(`ROOMS/${code}`).onSnapshot((snapshot) => {
        console.log(snapshot.data())
      })
      return () => unsubscribe()
    }
  }, [code])

  return [pazaak]
}
