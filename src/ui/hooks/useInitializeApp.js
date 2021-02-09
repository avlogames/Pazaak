import { NavigationContainer as Navigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Asset } from "expo-asset"
import { AUDIO, CARDS, IMAGES } from "src/ui/config"
import { getAsyncStorage, setAsyncStorage } from "src/ui/helpers/asyncStorage"
import Player from "src/ui/helpers/Player"
import SQLite from 'src/api/sqlite'
import uuid from "uuid-random"

export default function useInitializeApp() {
  const { Navigator, Screen } = createStackNavigator()
  const sounds = Player.load(AUDIO)
  const sqlite = SQLite.load()

  const setUuid = async () => {
    const currentUuid = await getAsyncStorage("uuid")
    if (!currentUuid) await setAsyncStorage("uuid", uuid())
  }

  const setCache = async () => {
    const cacheAssets = Object.values({ ...CARDS, ...IMAGES }).map((asset) => {
      return Asset.fromModule(asset).downloadAsync()
    })
    return Promise.all([setUuid(), ...cacheAssets, ...sounds, sqlite])
  }

  return [Navigation, Navigator, Screen, setCache]
}
