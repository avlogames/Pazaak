import React from "react"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import Background from "src/ui/atoms/Background"
import Audio from "src/lib/Audio"

export default function RoomNotFound() {
  const { navigate } = useNavigation()

  const handlePress = () => {
    Audio.playSound("buttonPress")
    return navigate("enter_room_code")
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Failed to join room, Please check your room code and try again.</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
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
  button: {
    borderWidth: 1,
    borderColor: `#fff`,
    width: responsiveWidth(90),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.5),
    alignItems: "center",
    borderRadius: responsiveWidth(4),
  },
  buttonText: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: responsiveFontSize(2.5),
  },
  text: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: responsiveFontSize(2.8),
    paddingBottom: responsiveHeight(5),
    textTransform: `uppercase`,
  },
})
