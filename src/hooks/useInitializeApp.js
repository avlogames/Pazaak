import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { getAsyncStorage, setAsyncStorage } from "src/helpers/asyncStorage"
import { AUDIOLIBRARY } from "src/constants"
import Player from "src/helpers/Player"
import uuid from "uuid-random"

export default function useInitializeApp() {
  const { Navigator, Screen } = createStackNavigator()
  const sounds = Player.load(AUDIOLIBRARY)

  const setUuid = async () => {
    const currentUuid = await getAsyncStorage("uuid")
    if (!currentUuid) await setAsyncStorage("uuid", uuid())
  }

  useEffect(() => {
    Promise.all([setUuid(), ...sounds])
  }, [])

  return [NavigationContainer, Navigator, Screen]
}
