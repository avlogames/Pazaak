import React from "react"
import { View as AniView } from "react-native-animatable"
import { StyleSheet, Text, View } from "react-native"
import Input from "react-native-smooth-pincode-input"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import HollowButton from "src/ui/atoms/HollowButton"

export default function RoomCodeInput({ code, onTextChange, onSubmit }) {
  return (
    <AniView style={styles.container} animation="bounceIn">
      <Text style={styles.title}>ENTER ROOM CODE</Text>
      <Input
        autoFocus
        value={code}
        onFocus={() => onTextChange("")}
        onTextChange={onTextChange}
        restrictToNumbers={false}
        keyboardType="default"
        cellStyle={styles.cellStyle}
        cellStyleFocused={styles.cellStyleFocused}
        textStyle={styles.textStyle}
      />
      <View style={styles.buttonWrapper}>
        {code.length === 4 && <HollowButton onPress={onSubmit} title="SUBMIT" animation="fadeIn" />}
      </View>
    </AniView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: `column`,
    alignItems: `center`,
  },
  title: {
    color: `#CCC`,
    fontWeight: `700`,
    fontSize: responsiveFontSize(2),
    textTransform: `uppercase`,
    marginBottom: responsiveHeight(2),
  },
  cellStyle: {
    borderWidth: responsiveFontSize(0.2),
    borderRadius: 50,
    borderColor: "#999",
    marginLeft: responsiveFontSize(1),
    marginRight: responsiveFontSize(1),
  },
  cellStyleFocused: {
    borderColor: "#008FFD",
  },
  textStyle: {
    fontSize: responsiveFontSize(4),
    color: "#FFF",
  },
  buttonWrapper: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    marginTop: responsiveHeight(4),
  },
})
