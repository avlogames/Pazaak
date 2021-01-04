import React from "react"
import HomeScreenBackground from "src/components/HomeScreenBackground"
import HomeScreenLogo from "src/components/HomeScreenLogo"
import HomeScreenGameLinks from "src/components/HomeScreenGameLinks"
import HomeScreenFooter from "src/components/HomeScreenFooter"

export default function HomeScreen() {
  return (
    <HomeScreenBackground>
      <HomeScreenLogo />
      <HomeScreenGameLinks />
      <HomeScreenFooter />
    </HomeScreenBackground>
  )
}
