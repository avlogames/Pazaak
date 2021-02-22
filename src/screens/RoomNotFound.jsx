import React from "react"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import { rFont, rHeight, rWidth } from "src/helpers/responsive"
import Layout from "src/layouts/BlueLayout"
import Audio from "src/lib/Audio"

export default function RoomNotFound() {
  const { navigate } = useNavigation()

  const handlePress = () => {
    Audio.playSound("buttonPress")
    return navigate("enter_room_code")
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.text}>Failed to join room, Please check your room code and try again.</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: rWidth(5),
    paddingRight: rWidth(5),
  },
  button: {
    borderWidth: 1,
    borderColor: `#fff`,
    width: rWidth(90),
    paddingTop: rHeight(1.5),
    paddingBottom: rHeight(1.5),
    alignItems: "center",
    borderRadius: rWidth(4),
  },
  buttonText: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: rFont(2.5),
  },
  text: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: rFont(2.8),
    paddingBottom: rHeight(5),
    textTransform: `uppercase`,
  },
})
