import "react-native-gesture-handler"
import React from "react"
import { StatusBar } from "expo-status-bar"
import store, { Provider } from "src/redux/store"
import HomeScreen from "src/screens/HomeScreen"
import NewGameScreen from "src/screens/NewGameScreen"
import JoinGameScreen from "src/screens/JoinGameScreen"
import Pazaak from "src/screens/Pazaak"
import useStackNavigator from "src/hooks/useStackNavigator"

export default function Pazzak() {
  const [NavigationContainer, Navigator, Screen] = useStackNavigator()

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator initialRouteName="Pazaak">
          <Screen name="Home" component={HomeScreen} options={options.noHeader} />
          <Screen name="NewGame" component={NewGameScreen} />
          <Screen name="JoinGame" component={JoinGameScreen} />
          <Screen name="Pazaak" component={Pazaak} options={options.noHeader} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const options = {
  noHeader: { headerShown: false },
}
