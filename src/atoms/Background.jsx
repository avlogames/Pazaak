import React from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { getStatusBarHeight } from "react-native-status-bar-height"

const statusBar = getStatusBarHeight(true)
export default function Background({ children }) {
  return (
    <LinearGradient colors={["#131935", "#222E58", "#131935"]} style={styles.container}>
      {children}
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: `column`,
    alignItems: "stretch",
    paddingTop: statusBar,
  },
})
