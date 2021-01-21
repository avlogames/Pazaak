import React, { useState } from "react"
import AppLoading from "expo-app-loading"
import useInitializeApp from "src/hooks/useInitializeApp"
import JoinErrorScreen from "src/screens/JoinErrorScreen"
import LandingScreen from "src/screens/LandingScreen"
import PazaakScreen from "src/screens/PazaakScreen"
import CardTest from "src/screens/CardTest"

export default function Router() {
  const [ready, setReady] = useState(false)
  const [Navigation, Navigator, Screen, setCache] = useInitializeApp()

  if (!ready) {
    return <AppLoading startAsync={setCache} onFinish={() => setReady(true)} onError={console.warn} />
  }

  return (
    <Navigation>
      <Navigator initialRouteName="Landing" screenOptions={screenOptions}>
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
