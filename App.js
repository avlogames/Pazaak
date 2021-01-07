import "react-native-gesture-handler"
import React from "react"
import { StatusBar } from "expo-status-bar"
import store, { Provider } from "src/redux/store"
import HomeScreen from "src/screens/HomeScreen"
import NewGameScreen from "src/screens/NewGameScreen"
import JoinGameScreen from "src/screens/JoinGameScreen"
import PazaakScreen from "src/screens/PazaakScreen"
import AllCardsStory from "src/stories/AllCardsStory"
import SideDeckStory from "src/stories/SideDeckStory"
import useStackNavigator from "src/hooks/useStackNavigator"

export default function Pazzak() {
  const [NavigationContainer, Navigator, Screen] = useStackNavigator()

  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Navigator initialRouteName="SideDeckStory">
          {/* Screens */}
          <Screen name="Home" component={HomeScreen} options={options.noHeader} />
          <Screen name="NewGame" component={NewGameScreen} />
          <Screen name="JoinGame" component={JoinGameScreen} />
          <Screen name="Pazaak" component={PazaakScreen} options={options.noHeader} />

          {/* Stories */}
          <Screen name="AllCardsStory" component={AllCardsStory} options={options.noHeader} />
          <Screen name="SideDeckStory" component={SideDeckStory} options={options.noHeader} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const options = {
  noHeader: { headerShown: false },
}
