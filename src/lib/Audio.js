import { Audio as AV } from "expo-av"

let themeSound = null
const soundObjects = {}

/**
 * Load Sound Library
 */
export function load(library) {
  const promisedSoundObjects = []
  for (const name in library) {
    soundObjects[name] = new AV.Sound()
    promisedSoundObjects.push(soundObjects[name].loadAsync(library[name]))
    if (name === "theme") themeSound = soundObjects[name]
  }
  return promisedSoundObjects
}

/**
 * Play Sound From Library
 */
export async function playSound(name) {
  if (soundObjects[name]) await soundObjects[name].replayAsync()
}

/**
 * Play Theme
 */
export async function playTheme() {
  await soundObjects.theme.setIsLoopingAsync(true)
  await soundObjects.theme.replayAsync()
}

/**
 * Pause Theme
 */
export async function pauseTheme() {
  await soundObjects["theme"].pauseAsync()
}

/**
 * Resume Theme
 */
export async function resumeTheme() {
  await soundObjects["theme"].playAsync()
}
