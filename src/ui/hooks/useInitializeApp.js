import { Asset } from "expo-asset"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { AUDIO, CARDS, IMAGES } from "src/ui/config"
import Storage from "src/lib/Storage"
import Audio from "src/lib/Audio"
import SQLite from "src/api/sqlite"
import uuid from "uuid-random"

export default function useInitializeApp() {
  const { Navigator, Screen } = createStackNavigator()
  const sounds = Audio.load(AUDIO)
  const sqlite = SQLite.load()

  const setUuid = async () => {
    const currentUuid = await Storage.get("uuid")
    if (!currentUuid) await Storage.set("uuid", uuid())
  }

  const setCache = async () => {
    const cacheItems = Object.values({ ...CARDS, ...IMAGES })
    const cacheAssets = cacheItems.map((ass) => Asset.fromModule(ass).downloadAsync())
    return Promise.all([setUuid(), ...cacheAssets, ...sounds, sqlite])
  }

  return [NavigationContainer, Navigator, Screen, setCache]
}
