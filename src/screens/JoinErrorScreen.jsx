import React from "react"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Button, Text, View } from "react-native"
import Background from "src/atoms/Background"

export default function JoinRoomError() {
  const { navigate } = useNavigation()

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Failed to join room, Please check your room code and try again.</Text>
        <Button onPress={() => navigate("Landing")} title="Go Back" />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  text: {
    color: `#FFF`,
    fontWeight: `600`,
    fontSize: 24,
    paddingBottom: 20,
  },
})
