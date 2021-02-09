import { Audio as AV } from "expo-av"

const soundObjects = {}

class Audio {
  static load = (library) => {
    const promisedSoundObjects = []
    for (const name in library) {
      soundObjects[name] = new AV.Sound()
      promisedSoundObjects.push(soundObjects[name].loadAsync(library[name]))
    }
    return promisedSoundObjects
  }

  static playSound = async (name) => {
    try {
      if (soundObjects[name]) {
        await soundObjects[name].replayAsync()
      }
    } catch (error) {
      console.warn(error)
    }
  }
}

export default Audio
