import React from "react"
import { StyleSheet, View } from "react-native"
import PlayingCard from "src/components/PlayingCard"

export default function PazaakScreen() {
  return (
    <View style={styles.container}>
      <PlayingCard color="red" value="-1" />
      <PlayingCard color="red" value="-2" />
      <PlayingCard color="red" value="-3" />
      <PlayingCard color="red" value="-4" />
      <PlayingCard color="red" value="-5" />
      <PlayingCard color="red" value="-6" />
      <PlayingCard color="red" value="-7" />
      <PlayingCard color="red" value="-8" />
      <PlayingCard color="red" value="-9" />
      <PlayingCard color="red" value="-10" />
      <PlayingCard color="blue" value="+1" />
      <PlayingCard color="blue" value="+2" />
      <PlayingCard color="blue" value="+3" />
      <PlayingCard color="blue" value="+4" />
      <PlayingCard color="blue" value="+5" />
      <PlayingCard color="blue" value="+6" />
      <PlayingCard color="blue" value="+7" />
      <PlayingCard color="blue" value="+8" />
      <PlayingCard color="blue" value="+9" />
      <PlayingCard color="blue" value="+10" />
      <PlayingCard color="green" value="1" />
      <PlayingCard color="green" value="2" />
      <PlayingCard color="green" value="3" />
      <PlayingCard color="green" value="4" />
      <PlayingCard color="green" value="5" />
      <PlayingCard color="green" value="6" />
      <PlayingCard color="green" value="7" />
      <PlayingCard color="green" value="8" />
      <PlayingCard color="green" value="9" />
      <PlayingCard color="green" value="10" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
  },
})
