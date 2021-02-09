import React from "react"
import { StyleSheet, Image } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions"
import placeholder from "src/ui/assets/cards/placeholder.png"

export default function BigPlaceholder() {
  return <Image style={styles.card(12.4)} source={placeholder} />
}

const styles = StyleSheet.create({
  card: (w) => ({
    height: responsiveWidth(w * 1.3986013986),
    width: responsiveWidth(w),
    borderRadius: 5,
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(1)
  }),
})
