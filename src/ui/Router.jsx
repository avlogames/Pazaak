import React, { useState } from "react"
import AppLoading from "expo-app-loading"
import useInitializeApp from "src/ui/hooks/useInitializeApp"
import RoomNotFound from "src/ui/screens/RoomNotFound"
import EnterRoomCode from "src/ui/screens/EnterRoomCode"
import FriendMatch from "src/ui/screens/FriendMatch"
import RandomMatch from "src/ui/screens/RandomMatch"

export default function Router() {
  const [ready, setReady] = useState(false)
  const [Navigation, Navigator, Screen, setCache] = useInitializeApp()

  return !ready ? (
    <AppLoading startAsync={setCache} onFinish={() => setReady(true)} onError={console.warn} />
  ) : (
    <Navigation>
      <Navigator initialRouteName="enter_room_code" screenOptions={screenOptions}>
        <Screen name="random_match" component={RandomMatch} />
        <Screen name="enter_room_code" component={EnterRoomCode} />
        <Screen name="friend_match" component={FriendMatch} />
        <Screen name="room_not_found" component={RoomNotFound} />
      </Navigator>
    </Navigation>
  )
}

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
}
