import "react-native-gesture-handler"
import React from "react"
import { StatusBar } from "expo-status-bar"
import store, { Provider } from "src/redux/store"
import PazaakScreen from "src/screens/PazaakScreen"
import SmallCardsStory from "src/stories/SmallCardsStory"
import SideDeckStory from "src/stories/SideDeckStory"
import useStackNavigator from "src/hooks/useStackNavigator"

export default function Pazzak() {
  const [NavigationContainer, Navigator, Screen] = useStackNavigator()

  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator initialRouteName="Pazaak">
          {/* Screens */}
          <Screen name="Pazaak" component={PazaakScreen} options={options.noHeader} />

          {/* Stories */}
          <Screen name="SmallCardsStory" component={SmallCardsStory} options={options.noHeader} />
          <Screen name="SideDeckStory" component={SideDeckStory} options={options.noHeader} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const options = {
  noHeader: { headerShown: false },
}
