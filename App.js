import "react-native-gesture-handler"
import React from "react"
import { StatusBar } from "expo-status-bar"
import store, { Provider } from "src/firebase/redux"
import Router from "src/ui/Router"

export default function Pazaak() {
  return (
    <Provider store={store}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Router />
    </Provider>
  )
}
