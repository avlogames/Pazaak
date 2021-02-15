import React from "react"
import { Image } from "react-native-animatable"
import { StyleSheet, Button, ImageBackground } from "react-native"
import { rHeight, rWidth } from "src/helpers/responsive"
import wallpaper from "src/assets/images/wallpaper.jpg"

export default function ChooseGame({ navigation }) {
  const friendMatch = () => navigation.navigate("enter_room_code")
  const randomMatch = () => navigation.navigate("random_match")

  return (
    <ImageBackground source={wallpaper} style={styles.imageBackground}>
      <Image animation="zoomInDown" duration={2000} delay={500} style={styles.logo} source={require("src/assets/images/pazaak.png")} />
      <Button title="Create / Join Custom Game" onPress={friendMatch} />
      <Button title="Play Random Opponent" onPress={randomMatch} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: `100%`,
    width: `100%`,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: rWidth(100),
    height: rHeight(15),
    marginBottom: rHeight(2),
  },
})
