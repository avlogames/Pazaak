import React from "react"
import { StyleSheet, Image, View } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions"

import RedOne from "src/assets/cards/blue-four.png"

export default function CardTest() {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card(20)} source={RedOne} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    borderWidth: 1,
    borderColor: `#CCC`,
    borderRadius: 5,
  },
  card: (w) => ({
    height: responsiveWidth(w * 1.3986013986),
    width: responsiveWidth(w),
  }),
})
