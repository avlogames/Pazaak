import React, { useEffect, useState } from "react"
import { Audio } from "expo-av"
import muzzak from "src/assets/muzzak.m4a"
import HomeScreenBackground from "src/components/HomeScreenBackground"
import HomeScreenLogo from "src/components/HomeScreenLogo"
import HomeScreenGameLinks from "src/components/HomeScreenGameLinks"
import HomeScreenFooter from "src/components/HomeScreenFooter"

export default function HomeScreen() {
  const [sound, setSound] = useState(null)

  useEffect(() => {
    Audio.Sound.createAsync(muzzak).then(({ sound }) => setSound(sound))
  }, [])

  useEffect(() => {
    if (sound) {
      sound.setIsLoopingAsync(true)
      sound.playAsync()
      return () => sound.unloadAsync()
    }
  }, [sound])

  return (
    <HomeScreenBackground>
      <HomeScreenLogo />
      <HomeScreenGameLinks />
      <HomeScreenFooter />
    </HomeScreenBackground>
  )
}
