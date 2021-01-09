import "react-native-gesture-handler"
import React from "react"
import { StatusBar } from "expo-status-bar"
import useUuid from "src/hooks/useUuid"
import useStackNavigator from "src/hooks/useStackNavigator"
import store, { Provider } from "src/redux/store"
import LandingScreen from "src/screens/LandingScreen"
import PazaakScreen from "src/screens/PazaakScreen"

export default function Pazzak() {
  useUuid()
  const [NavigationContainer, Navigator, Screen] = useStackNavigator()

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Screen name="Landing" component={LandingScreen} />
          <Screen name="Pazaak" component={PazaakScreen} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}
