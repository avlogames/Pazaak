import React from "react"
import { Text as Atext, Image as Aimage } from "react-native-animatable"
import { StyleSheet, KeyboardAvoidingView, Platform, TextInput, View } from "react-native"
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"
import Background from "src/atoms/Background"
import HollowButton from "src/atoms/HollowButton"
import useCreateJoinRoom from "src/hooks/useCreateJoinRoom"

const iOS = Platform.OS === "ios"
export default function LandingScreen() {
  const [code, setCode, handleSubmit] = useCreateJoinRoom()

  return (
    <Background>
      <KeyboardAvoidingView behavior={iOS ? "padding" : null} style={styles.container}>
        <View style={styles.wrapper}>
          <Aimage
            iterationCount="infinite"
            iterationDelay={3000}
            animation="pulse"
            style={styles.logo}
            source={require("src/assets/images/pazaak.png")}
          />
          <Atext style={styles.title} animation="bounceInDown">
            Enter Room Code
          </Atext>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            editable
            value={code}
            onChangeText={(t) => setCode(t)}
            autoFocus
            autoCapitalize="characters"
            maxLength={4}
            returnKeyType="join"
            onSubmitEditing={handleSubmit}
          />
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
  input: {
    width: responsiveWidth(80),
    backgroundColor: `rgba(255, 255, 255, 0.05)`,
    borderColor: `#008FFE`,
    borderWidth: 1,
    color: `#008FFE`,
    fontSize: responsiveFontSize(4),
    textAlign: "center",
    marginTop: responsiveHeight(1),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(10),
    fontWeight: `700`,
  },
  title: {
    color: `rgba(255, 255, 255, 0.7)`,
    fontWeight: `700`,
    fontSize: responsiveFontSize(2),
    textTransform: `uppercase`,
  },
})
