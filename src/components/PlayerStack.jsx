import React from "react"
import { StyleSheet, View } from "react-native"
import SmallCard from "src/atoms/SmallCard"
import SmallPlaceholder from "src/atoms/SmallPlaceholder"
import Scoreboard from "src/components/Scoreboard"

export default function PlayerStack() {
  return (
    <View style={styles.container}>
      <View style={styles.playerCards}>
        <Scoreboard score={10} />
        <SmallCard color="green" value="2" />
        <SmallCard color="green" value="4" />
        <SmallCard color="blue" value="+4" />
        <SmallPlaceholder />
        <SmallPlaceholder />
        <SmallPlaceholder />
        <SmallPlaceholder />
        <SmallPlaceholder />
        <SmallPlaceholder />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 2.5,
    borderTopColor: `#2E385A`,
    alignItems: "center",
    justifyContent: "center",
  },
  playerCards: {
    width: 240,
    flexDirection: `row`,
    flexWrap: `wrap`,
  },
})
