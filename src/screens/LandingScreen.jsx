import React from "react"
import { StyleSheet, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import Background from "src/atoms/Background"
import PazaakLogo from "src/atoms/PazaakLogo"
import useCreateJoinRoom from "src/hooks/useCreateJoinRoom"

export default function LandingScreen() {
  const [code, setCode, handleSubmit] = useCreateJoinRoom()

  return (
    <Background>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.wrapper}>
          <PazaakLogo />
          <TextInput
            style={styles.input}
            editable
            value={code}
            onChangeText={(t) => setCode(t)}
            autoFocus
            autoCapitalize="characters"
            maxLength={4}
            returnKeyType="go"
            onSubmitEditing={() => handleSubmit}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>JOIN</Text>
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
    justifyContent: "flex-start",
    marginTop: 100,
  },
  wrapper: {
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 75,
    backgroundColor: `#FFF`,
    fontSize: 60,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: `#fff`,
    width: 250,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  text: {
    color: `#FFF`,
    fontWeight: `800`,
    fontSize: 16,
  },
})
