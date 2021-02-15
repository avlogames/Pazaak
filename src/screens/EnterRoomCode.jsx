import React from "react"
import { Image } from "react-native-animatable"
import { StyleSheet, ImageBackground, KeyboardAvoidingView, Platform, View } from "react-native"
import { rWidth, rHeight } from "src/helpers/responsive"
import RoomCodeInput from "src/components/RoomCodeInput"
import useEnterRoomCode from "src/hooks/useEnterRoomCode"
import wallpaper from "src/assets/images/wallpaper.jpg"

const iOS = Platform.OS === "ios"
export default function EnterRoomCode() {
  const roomCodeProps = useEnterRoomCode()

  return (
    <ImageBackground source={wallpaper} style={styles.imageBackground}>
      <KeyboardAvoidingView behavior={iOS ? "padding" : null} style={styles.container}>
        <View style={styles.wrapper}>
          <Image animation="bounceIn" style={styles.logo} source={require("src/assets/images/pazaak.png")} />
          <RoomCodeInput {...roomCodeProps} />
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
    width: rWidth(80),
    height: rHeight(10),
    marginBottom: 20,
  },
})
