import React from "react"
import { StyleSheet, View } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions"

export default function BigPlaceholder() {
  return <View style={styles.paper}></View>
}

const styles = StyleSheet.create({
  paper: {
    height: responsiveWidth(15),
    width: responsiveWidth(11),
    borderRadius: responsiveWidth(2),
    backgroundColor: `#141B36`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
    margin: responsiveWidth(2),
  },
})
