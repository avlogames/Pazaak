import "react-native-gesture-handler"
import React from "react"
import { StatusBar } from "expo-status-bar"
import store, { Provider } from "src/redux/store"
import HomeScreen from "src/screens/HomeScreen"
import NewGameScreen from "src/screens/NewGameScreen"
import JoinGameScreen from "src/screens/JoinGameScreen"
import useStackNavigator from "src/hooks/useStackNavigator"

export default function Pazzak() {
  const [NavigationContainer, Navigator, Screen] = useStackNavigator()

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator>
          <Screen name="Home" component={HomeScreen} options={options.home} />
          <Screen name="NewGame" component={NewGameScreen} />
          <Screen name="JoinGame" component={JoinGameScreen} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const options = {
  home: { headerShown: false },
}
