import React from "react"
import { View } from "react-native-animatable"
import { StyleSheet, Text } from "react-native"
import Input from "react-native-smooth-pincode-input"
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions"
import useCreateJoinRoom from "src/hooks/useCreateJoinRoom"
import HollowButton from "src/atoms/HollowButton"

export default function CodeInput() {
  const [code, onTextChange, onSubmit] = useCreateJoinRoom()

  return (
    <View style={styles.container} animation="bounceIn">
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
      {code.length === 4 && <HollowButton onPress={onSubmit} title="SUBMIT" animation="fadeIn" />}
    </View>
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
})
