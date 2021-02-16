import React from "react"
import { Image } from "react-native-animatable"
import BackgroundSplash from "src/atoms/BackgroundSplash"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import { rHeight, rWidth, rFont } from "src/helpers/responsive"

export default function ChooseGame({ navigation }) {
  const friendMatch = () => navigation.navigate("enter_room_code")
  const randomMatch = () => navigation.navigate("random_match")

  return (
    <BackgroundSplash>
      <View style={styles.topSpacer} />
      <View style={styles.imageWrapper}>
        <Image
          animation="zoomInDown"
          duration={2000}
          delay={500}
          style={styles.logo}
          source={require("src/assets/images/pazaak.png")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={friendMatch}>
          <Text style={styles.buttonText}>PRIVATE MATCH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={randomMatch}>
          <Text style={styles.buttonText}>ONLINE MATCHMAKER</Text>
        </TouchableOpacity>
      </View>
    </BackgroundSplash>
  )
}

const styles = StyleSheet.create({
  topSpacer: {
    flex: 1,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: rWidth(100),
    height: rHeight(15),
    marginBottom: rHeight(5),
  },
  button: {
    borderWidth: 1,
    borderColor: `#FFF`,
    width: rWidth(90),
    paddingTop: rHeight(1.5),
    paddingBottom: rHeight(1.5),
    alignItems: "center",
    borderRadius: rWidth(4),
    marginBottom: rHeight(3),
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  buttonText: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: rFont(2.5),
  },
})
