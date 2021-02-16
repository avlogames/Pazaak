import React from "react"
import { StyleSheet, ImageBackground } from "react-native"

export default function BackgroundSplash({ children }) {
  return (
    <ImageBackground source={require("src/assets/images/wallpaper.jpg")} style={styles.background}>
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    height: `100%`,
    width: `100%`,
    alignItems: "center",
    justifyContent: "center",
  },
})
