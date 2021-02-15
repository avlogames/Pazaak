import { Audio as AV } from "expo-av"

let themeSound = null
const soundObjects = {}

class Audio {
  static load = (library) => {
    const promisedSoundObjects = []
    for (const name in library) {
      soundObjects[name] = new AV.Sound()
      promisedSoundObjects.push(soundObjects[name].loadAsync(library[name]))
      if (name === "theme") themeSound = soundObjects[name]
    }
    return promisedSoundObjects
  }

  static playSound = async (name) => {
    if (soundObjects[name]) await soundObjects[name].replayAsync()
  }

  static playTheme = async () => {
    await soundObjects.theme.setIsLoopingAsync(true)
    await soundObjects.theme.replayAsync()
  }

  static pauseTheme = async () => {
    await soundObjects["theme"].pauseAsync()
  }

  static resumeTheme = async () => {
    await soundObjects["theme"].playAsync()
  }
}

export default Audio
