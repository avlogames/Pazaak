import React, { useState, useEffect } from "react"
import AppLoading from "expo-app-loading"
import useInitializeApp from "src/hooks/useInitializeApp"
import RoomNotFound from "src/screens/RoomNotFound"
import EnterRoomCode from "src/screens/EnterRoomCode"
import FriendMatch from "src/screens/FriendMatch"
import RandomMatch from "src/screens/RandomMatch"
import ChooseGame from "src/screens/ChooseGame"
import Audio from "src/lib/Audio"

export default function Router() {
  const [ready, setReady] = useState(false)
  const [Navigation, Navigator, Screen, setCache] = useInitializeApp()

  useEffect(() => {
    if (ready) setTimeout(() => Audio.playTheme(), 1500)
  }, [ready])

  return !ready ? (
    <AppLoading startAsync={setCache} onFinish={() => setReady(true)} onError={console.warn} />
  ) : (
    <Navigation>
      <Navigator initialRouteName="choose_game" screenOptions={screenOptions}>
        <Screen name="choose_game" component={ChooseGame} />
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
