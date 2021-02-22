import React from "react"
import { Image } from "react-native-animatable"
import Layout from "src/layouts/SpaceLayout"
import { StyleSheet, Button, KeyboardAvoidingView, Platform, View } from "react-native"
import { rWidth, rHeight } from "src/helpers/responsive"
import RoomCodeInput from "src/components/RoomCodeInput"
import useEnterRoomCode from "src/hooks/useEnterRoomCode"

const iOS = Platform.OS === "ios"
export default function EnterRoomCode({ navigation }) {
  const roomCodeProps = useEnterRoomCode()

  return (
    <Layout>
      <KeyboardAvoidingView behavior={iOS ? "padding" : null} style={styles.container}>
        <View style={styles.buttonWrapper}>
          <Button title="< back" onPress={() => navigation.navigate("choose_game")} />
        </View>
        <View style={styles.wrapper}>
          <Image animation="bounceIn" style={styles.logo} source={require("src/assets/images/pazaak.png")} />
          <RoomCodeInput {...roomCodeProps} />
        </View>
      </KeyboardAvoidingView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    paddingTop: rHeight(5),
    paddingLeft: rWidth(5),
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: rWidth(100),
    height: rHeight(15),
    marginBottom: rHeight(2),
  },
})
