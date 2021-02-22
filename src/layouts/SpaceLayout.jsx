import React from "react"
import { StyleSheet, ImageBackground } from "react-native"
import wallpaper from "src/assets/images/wallpaper.jpg"

export default function SpaceLayout({ children }) {
  return (
    <ImageBackground source={wallpaper} style={styles.background}>
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
