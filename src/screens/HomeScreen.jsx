import React from "react"
import { View } from "react-native"
import { Link } from "@react-navigation/native"

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link to="/NewGame">New Game</Link>
      <Link to="/JoinGame">Join Game</Link>
    </View>
  )
}
