import React from "react"
import { StyleSheet, View } from "react-native"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"

export default function SmallPlaceholder() {
  return <View style={styles.paper}></View>
}

const styles = StyleSheet.create({
  paper: {
    height: responsiveWidth(12.2),
    width: responsiveWidth(9),
    borderRadius: responsiveWidth(1),
    backgroundColor: `#141B36`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
    marginLeft: responsiveWidth(1.5),
    marginRight: responsiveWidth(1.5),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(.5),
  },
})
