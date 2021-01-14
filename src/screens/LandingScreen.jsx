import React from "react"
import { StyleSheet, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"
import Background from "src/atoms/Background"
import useCreateJoinRoom from "src/hooks/useCreateJoinRoom"

export default function LandingScreen() {
  const [code, setCode, handleSubmit] = useCreateJoinRoom()

  return (
    <Background>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Enter Room Code</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            editable
            value={code}
            onChangeText={(t) => setCode(t)}
            autoFocus
            autoCapitalize="characters"
            maxLength={4}
            returnKeyType="done"
            onSubmitEditing={() => handleSubmit}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>JOIN</Text>
          </TouchableOpacity>
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
  input: {
    width: responsiveWidth(80),
    backgroundColor: `#FFF`,
    fontSize: responsiveFontSize(4),
    textAlign: "center",
    marginTop: responsiveHeight(2),
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(2),
    marginBottom: responsiveHeight(2),
    borderRadius: responsiveWidth(4),
    fontWeight: `700`,
  },
  button: {
    borderWidth: 1,
    borderColor: `#fff`,
    width: responsiveWidth(80),
    paddingTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.5),
    alignItems: "center",
    borderRadius: responsiveWidth(4),
  },
  buttonText: {
    color: `#FFF`,
    fontWeight: `900`,
    fontSize: responsiveFontSize(2.5),
  },
  title: {
    color: `#FFF`,
    fontWeight: `900`,
    fontSize: responsiveFontSize(3),
    textTransform: `uppercase`,
  },
})
