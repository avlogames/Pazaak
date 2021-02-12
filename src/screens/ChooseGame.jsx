import React from "react"
import { StyleSheet, Button, View } from "react-native"

export default function ChooseGame({ navigation }) {
  const friendMatch = () => navigation.navigate("enter_room_code")
  const randomMatch = () => navigation.navigate("random_match")

  return (
    <View style={styles.container}>
      <Button title="Create / Join Custom Game" onPress={friendMatch} />
      <Button title="Play Random Opponent" onPress={randomMatch} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
