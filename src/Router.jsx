import React, { useState } from "react"
import AppLoading from "expo-app-loading"
import useInitializeApp from "src/hooks/useInitializeApp"
import RoomNotFound from "src/screens/RoomNotFound"
import JoinRoomScreen from "src/screens/JoinRoomScreen"
import PazaakScreen from "src/screens/PazaakScreen"

export default function Router() {
  const [ready, setReady] = useState(false)
  const [Navigation, Navigator, Screen, setCache] = useInitializeApp()

  if (!ready) {
    return <AppLoading startAsync={setCache} onFinish={() => setReady(true)} onError={console.warn} />
  }

  return (
    <Navigation>
      <Navigator initialRouteName="join_room" screenOptions={screenOptions}>
        <Screen name="join_room" component={JoinRoomScreen} />
        <Screen name="pazaak" component={PazaakScreen} />
        <Screen name="room_not_found" component={RoomNotFound} />
      </Navigator>
    </Navigation>
  )
}

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
}
