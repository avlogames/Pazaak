import React from "react"
import { StyleSheet, ImageBackground, View } from "react-native"
import background from "src/assets/home-background.jpg"

export default function HomeScreenBackground({ children }) {
  return (
    <ImageBackground source={background} style={styles.imageBackground}>
      <View style={styles.paddingTop} />
      {children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  paddingTop: {
    flex: 5,
  },
})
