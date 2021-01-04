import { useEffect } from "react"
import { Audio } from "expo-av"
import { useDispatch, useSelector } from "react-redux"
import muzakM4a from "src/assets/muzzak.m4a"

export default function useAudio() {
  const dispatch = useDispatch()
  const { muzak } = useSelector((s) => s.audio)

  const loadAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(muzakM4a)
    return dispatch({ type: "setMuzak", value: sound })
  }

  const playAudio = async (muzak) => {
    muzak.playAsync()
    return () => muzak.unloadAsync()
  }

  useEffect(() => {
    loadAudio()
  }, [])

  useEffect(() => {
    if (muzak) playAudio(muzak)
  }, [muzak])
}
