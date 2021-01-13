import React from "react"
import useInitializeApp from "src/hooks/useInitializeApp"
import JoinErrorScreen from "src/screens/JoinErrorScreen"
import LandingScreen from "src/screens/LandingScreen"
import PazaakScreen from "src/screens/PazaakScreen"

export default function Router() {
  const [Navigation, Navigator, Screen] = useInitializeApp()

  return (
    <Navigation>
      <Navigator initialRouteName="Landing" screenOptions={screenOptions}>
        <Screen name="Landing" component={LandingScreen} />
        <Screen name="Pazaak" component={PazaakScreen} />
        <Screen name="Join Error" component={JoinErrorScreen} />
      </Navigator>
    </Navigation>
  )
}

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
}
