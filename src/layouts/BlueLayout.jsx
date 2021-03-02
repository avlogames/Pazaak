import React from "react"
import { StyleSheet, ImageBackground } from "react-native"
import { getStatusBarHeight } from "react-native-status-bar-height"
import space from "src/assets/images/space.jpg"

export default function SpaceLayout({ children }) {
  return (
    <ImageBackground source={space} style={styles.container}>
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: `column`,
    alignItems: "stretch",
    paddingTop: getStatusBarHeight(true) === 44 ? 44 : 20,
  },
})
