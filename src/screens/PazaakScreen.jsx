import React from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import TableRing from "src/atoms/TableRing"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"
import OpponentDetails from "src/components/OpponentDetails"
import PlayerDetails from "src/components/PlayerDetails"
import EndTurnStand from "src/components/EndTurnStand"

export default function PazaakScreen() {
  return (
    <LinearGradient colors={["#131935", "#222E58", "#131935"]} style={styles.container}>
      <OpponentDetails />
      <TableRing>
        <OpponentSideDeck />
        <OpponentStack />
        <PlayerStack />
        <PlayerSideDeck />
      </TableRing>
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
