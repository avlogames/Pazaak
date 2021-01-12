import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Audio } from "expo-av"
import { AUDIOLIBRARY } from "src/constants"

export default async function useAudio() {
  const dispatch = useDispatch()
  
  const loadSounds = () =>
    Object.entries(AUDIOLIBRARY).map(async ([key, val]) => {
      const { sound } = await Audio.Sound.createAsync(val)
      dispatch({ type: "audio", key, value: sound })
    })

  useEffect(() => {
    loadSounds()
  })
}
