import React from "react"
import useInitializeApp from "src/hooks/useInitializeApp"
import JoinErrorScreen from "src/screens/JoinErrorScreen"
import LandingScreen from "src/screens/LandingScreen"
import PazaakScreen from "src/screens/PazaakScreen"
import CardTest from 'src/screens/CardTest'

export default function Router() {
  const [Navigation, Navigator, Screen] = useInitializeApp()

  return (
    <Navigation>
      <Navigator initialRouteName="Card Test" screenOptions={screenOptions}>
        <Screen name="Landing" component={LandingScreen} />
        <Screen name="Pazaak" component={PazaakScreen} />
        <Screen name="Join Error" component={JoinErrorScreen} />
        <Screen name="Card Test" component={CardTest} />
      </Navigator>
    </Navigation>
  )
}

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
}
