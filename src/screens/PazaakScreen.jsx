import React from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import PazaakTable from "src/entities/PazaakTable"
import OpponentDetails from "src/entities/OpponentDetails"
import PlayerDetails from "src/entities/PlayerDetails"
import EndTurnStand from "src/entities/EndTurnStand"

export default function PazaakScreen() {
  return (
    <LinearGradient colors={["#131935", "#222E58", "#131935"]} style={styles.container}>
      <OpponentDetails />
      <PazaakTable />
      <PlayerDetails />
      <EndTurnStand />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: `column`,
    alignItems: "stretch",
    paddingTop: 60,
  },
})
