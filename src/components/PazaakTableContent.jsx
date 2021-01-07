import React from "react"
import { StyleSheet, View } from "react-native"

export default function PazaakTableContent() {
  return (
    <View style={styles.container}>
      <View style={styles.innerRingWrapper}>
        <View style={styles.innerRing}></View>
      </View>
      {/* <View style={styles.playerStripe}></View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerRingWrapper: {
    height: `100%`,
    width: `100%`,
    position: `absolute`,
  },
  innerRing: {
    flex: 1,
    margin: 20,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: `rgba(255, 255, 255, 0.05)`,
  },
  playerStripe: {
    backgroundColor: `rgba(255, 255, 255, 0.3)`,
    width: `100%`,
    height: 100,
  },
})
