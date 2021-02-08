import React from "react"
import { Image } from "react-native-animatable"
import { StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, View } from "react-native"
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"
import EnterRoomCode from "src/ui/components/EnterRoomCode"
import wallpaper from "src/ui/assets/images/wallpaper.jpg"

const iOS = Platform.OS === "ios"
export default function LandingScreen() {
  return (
    <ImageBackground source={wallpaper} style={styles.imageBackground}>
      <KeyboardAvoidingView behavior={iOS ? "padding" : null} style={styles.container}>
        <View style={styles.wrapper}>
          <Image animation="bounceIn" style={styles.logo} source={require("src/ui/assets/images/pazaak.png")} />
          <EnterRoomCode />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: `100%`,
    width: `100%`,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
  },
  logo: {
    width: responsiveWidth(80),
    height: responsiveHeight(10),
    marginBottom: 20,
  },
})
