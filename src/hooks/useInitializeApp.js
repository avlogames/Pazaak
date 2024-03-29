import { Asset } from "expo-asset"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { AUDIO, CARDS, IMAGES } from "src/config"
import * as audio from "src/lib/audio"
import * as storage from "src/lib/storage"
import * as sqlite from "src/lib/sqlite"
import uuid from "uuid-random"

export default function useInitializeApp() {
  const { Navigator, Screen } = createStackNavigator()
  const sounds = audio.load(AUDIO)
  const database = sqlite.load()

  const setUuid = async () => {
    const currentUuid = await storage.get("uuid")
    if (!currentUuid) await storage.set("uuid", uuid())
  }

  const setCache = async () => {
    const cacheItems = Object.values({ ...CARDS, ...IMAGES })
    const cacheAssets = cacheItems.map((ass) => Asset.fromModule(ass).downloadAsync())
    return Promise.all([setUuid(), ...cacheAssets, ...sounds, database])
  }

  return [NavigationContainer, Navigator, Screen, setCache]
}
