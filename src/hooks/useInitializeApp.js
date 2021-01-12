import uuid from "uuid-random"
import { useEffect } from "react"
import Player from "src/helpers/Player"
import { getAsyncStorage, setAsyncStorage } from "src/helpers/asyncStorage"
import { AUDIOLIBRARY } from "src/constants"

export default function useInitializeApp() {
  const setUuid = async () => {
    const currentUuid = await getAsyncStorage("uuid")
    if (!currentUuid) await setAsyncStorage("uuid", uuid())
  }

  useEffect(() => {
    const sounds = Player.load(AUDIOLIBRARY)
    Promise.all([setUuid(), ...sounds])
  }, [])
}
