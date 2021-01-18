import React from "react"
import { Image } from "react-native-animatable"
import { StyleSheet, KeyboardAvoidingView, Platform, View } from "react-native"
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"
import Background from "src/atoms/Background"
import CodeInput from "src/atoms/CodeInput"

const iOS = Platform.OS === "ios"
export default function LandingScreen() {
  return (
    <Background>
      <KeyboardAvoidingView behavior={iOS ? "padding" : null} style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            animation="bounceIn"
            style={styles.logo}
            source={require("src/assets/images/pazaak.png")}
          />
          <CodeInput />
          {/* <HollowButton animation="zoomInLeft" title="JOIN" onPress={handleSubmit} /> */}
        </View>
      </KeyboardAvoidingView>
    </Background>
  )
}

const styles = StyleSheet.create({
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
