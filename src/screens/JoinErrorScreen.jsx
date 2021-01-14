import React from "react"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Button, Text, View } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import Background from "src/atoms/Background"
import Player from "src/helpers/Player"

export default function JoinRoomError() {
  const { navigate } = useNavigation()

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Failed to join room, Please check your room code and try again.</Text>
        <Button
          style={styles.buttonText}
          onPress={() => {
            Player.playSound("buttonPress")
            navigate("Landing")
          }}
          title="Go Back"
        />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
  },
  text: {
    color: `#FFF`,
    fontWeight: `600`,
    fontSize: responsiveFontSize(3.5),
    paddingBottom: responsiveHeight(2),
  },
})
