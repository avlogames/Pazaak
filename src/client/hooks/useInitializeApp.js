import { NavigationContainer as Navigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Asset } from "expo-asset"
import { AUDIO, CARDS, IMAGES } from "src/client/config"
import { getAsyncStorage, setAsyncStorage } from "src/client/helpers/asyncStorage"
import Player from "src/client/helpers/Player"
import uuid from "uuid-random"

export default function useInitializeApp() {
  const { Navigator, Screen } = createStackNavigator()
  const sounds = Player.load(AUDIO)

  const setUuid = async () => {
    const currentUuid = await getAsyncStorage("uuid")
    if (!currentUuid) await setAsyncStorage("uuid", uuid())
  }

  const setCache = async () => {
    const cacheAssets = Object.values({ ...CARDS, ...IMAGES }).map((asset) => {
      return Asset.fromModule(asset).downloadAsync()
    })
    return Promise.all([setUuid(), ...cacheAssets, ...sounds])
  }

  return [Navigation, Navigator, Screen, setCache]
}
