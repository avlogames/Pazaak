import React from "react"
import useInitializeApp from "src/hooks/useInitializeApp"
import useStackNavigator from "src/hooks/useStackNavigator"
import JoinErrorScreen from "src/screens/JoinErrorScreen"
import LandingScreen from "src/screens/LandingScreen"
import PazaakScreen from "src/screens/PazaakScreen"

export default function Router() {
  useInitializeApp()
  const [NavigationContainer, Navigator, Screen] = useStackNavigator()

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Landing" screenOptions={screenOptions}>
        <Screen name="Landing" component={LandingScreen} />
        <Screen name="Pazaak" component={PazaakScreen} />
        <Screen name="Join Error" component={JoinErrorScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
}
