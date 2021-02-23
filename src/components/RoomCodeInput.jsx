import React from "react"
import { View as AniView } from "react-native-animatable"
import { StyleSheet, Text, View } from "react-native"
import Input from "react-native-smooth-pincode-input"
import { rFont, rHeight, rWidth } from "src/helpers/responsive"
import HollowButton from "src/atoms/HollowButton"

export default function RoomCodeInput({ code, onCodeChange, onSubmitCode }) {
  return (
    <AniView style={styles.container} animation="bounceIn">
      <Text style={styles.title}>ENTER ROOM CODE</Text>
      <Input
        autoFocus
        value={code}
        onFocus={() => onCodeChange("")}
        onTextChange={onCodeChange}
        restrictToNumbers={false}
        keyboardType="default"
        cellStyle={styles.cellStyle}
        cellStyleFocused={styles.cellStyleFocused}
        textStyle={styles.textStyle}
      />
      <View style={styles.buttonWrapper}>
        {code.length === 4 && <HollowButton onPress={onSubmitCode} title="SUBMIT" animation="fadeIn" />}
      </View>
    </AniView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: `column`,
    alignItems: `center`,
    height: rHeight(11),
  },
  title: {
    color: `#CCC`,
    fontWeight: `700`,
    fontSize: rFont(2),
    textTransform: `uppercase`,
    marginBottom: rHeight(2),
  },
  cellStyle: {
    borderWidth: rFont(0.2),
    borderRadius: 50,
    borderColor: "#999",
    marginLeft: rFont(1),
    marginRight: rFont(1),
  },
  cellStyleFocused: {
    borderColor: "#008FFD",
  },
  textStyle: {
    fontSize: rFont(4),
    color: "#FFF",
  },
  buttonWrapper: {
    height: rHeight(6),
    width: rWidth(80),
    marginTop: rHeight(4),
  },
})
