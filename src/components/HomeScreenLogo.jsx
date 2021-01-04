import React from "react"
import { StyleSheet, Image, View } from "react-native"
import pazzak from "src/assets/pazzak.png"

export default function HomeScreenLogo() {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.logo} source={pazzak} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    height: 125,
    width: `100%`,
  },
})
