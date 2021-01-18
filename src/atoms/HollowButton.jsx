import React from "react"
import { View } from "react-native-animatable"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"

export default function HollowButton({ animation, onPress, title }) {
  return (
    <View animation={animation}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
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
    fontWeight: `700`,
    fontSize: responsiveFontSize(2.5),
  },
})
