import React from "react"
import { StyleSheet, Image } from "react-native"
import { rWidth } from "src/helpers/responsive"
import placeholder from "src/assets/cards/placeholder.png"

export default function BigPlaceholder() {
  return <Image style={styles.card(12.4)} source={placeholder} />
}

const styles = StyleSheet.create({
  card: (w) => ({
    height: rWidth(w * 1.3986013986),
    width: rWidth(w),
    borderRadius: 5,
    marginLeft: rWidth(1),
    marginRight: rWidth(1)
  }),
})
