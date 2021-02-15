import React from "react"
import { View } from "react-native-animatable"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { rFont, rWidth, rHeight } from "src/helpers/responsive"

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
    width: rWidth(80),
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
})
