import "react-native-gesture-handler"
import React from "react"
import { Provider } from "react-redux"
import { StatusBar } from "expo-status-bar"
import { store } from "src/lib/redux"
import Router from "src/Router"

export default function Pazaak() {
  return (
    <Provider store={store}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <Router />
    </Provider>
  )
}
