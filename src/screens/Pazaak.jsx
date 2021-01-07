import React from "react"
import { StyleSheet, View } from "react-native"
import PlayingCard from "src/components/PlayingCard"

export default function Pazaak() {
  return (
    <View style={styles.container}>
      <PlayingCard color="red" value="-7" />
      <PlayingCard color="blue" value="+4" />
      <PlayingCard color="green" value="8" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
})
