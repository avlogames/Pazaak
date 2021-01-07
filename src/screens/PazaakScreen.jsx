import React from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import PazaakTable from "src/components/PazaakTable"
import PazaakTableContent from "src/components/PazaakTableContent"
import EndTurnStand from "src/components/EndTurnStand"

export default function PazaakScreen() {
  return (
    <LinearGradient colors={["#131935", "#222E58", "#131935"]} style={styles.container}>
      <PazaakTable>
        <PazaakTableContent />
      </PazaakTable>
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
  header: {
    flexBasis: 60,
    backgroundColor: "yellow",
  },
})
