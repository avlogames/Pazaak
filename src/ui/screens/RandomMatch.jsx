import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import Pazaak from "src/lib/Pazaak"

export default function TestSQL() {
  useEffect(() => {
    const sideDeck = Pazaak.initializeSideDeck()
    const sideDeckFloor = Pazaak.sideDeckFloor(sideDeck)
    const sideDeckCeiling = Pazaak.sideDeckCeiling(sideDeck)
    const smallestCombo = Pazaak.smallestCombo(sideDeck, 14, 17)
    console.log(smallestCombo)
  }, [])

  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
