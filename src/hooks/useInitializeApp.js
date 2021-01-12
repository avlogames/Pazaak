import uuid from "uuid-random"
import { useEffect } from "react"
import { setAudio } from "src/helpers/audio"
import { getAsyncStorage, setAsyncStorage } from "src/helpers/asyncStorage"

export default function useInitializeApp() {
  const setUuid = async () => {
    const currentUuid = await getAsyncStorage("uuid")
    if (!currentUuid) await setAsyncStorage("uuid", uuid())
  }

  useEffect(() => {
    Promise.all([setAudio(), setUuid()])
  }, [])
}
