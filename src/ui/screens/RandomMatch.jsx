import React from "react"
import { StyleSheet, View } from "react-native"
import useRandomMatch from "src/ui/hooks/useRandomMatch"
import WaitingForOpponent from "src/ui/components/WaitingForOpponent"

export default function RandomMatch() {
  const [pazaak, ready, quit] = useRandomMatch()

  if (!ready) return <WaitingForOpponent message={`WAITING FOR OPPONENT`} quit={quit} />

  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
