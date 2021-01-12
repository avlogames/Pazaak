import { Audio } from "expo-av"
import store from "src/redux/store"
import { AUDIOLIBRARY } from "src/constants"

export function setAudio() {
  return Object.entries(AUDIOLIBRARY).map(([key, val]) => {
    Audio.Sound.createAsync(val).then(({ sound }) => {
      store.dispatch({ type: "audio", key, value: sound })
    })
  })
}

export async function playAudio(key) {
  const { audio } = store.getState()
  return await audio[key].playAsync()
}
