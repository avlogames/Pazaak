import React from "react"
import { responsiveWidth } from "react-native-responsive-dimensions"
import { StyleSheet, Image, TouchableOpacity } from "react-native"
import { CARDS } from "src/constants"

export default function BigCard({ type = "green", value = "+1", playCard, turn, index }) {
  return (
    <TouchableOpacity style={styles.paper} onPress={() => (turn ? playCard(index) : {})}>
      <Image style={styles.card(12)} source={CARDS[`${type}${value}`]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  paper: {
    borderWidth: 1,
    borderColor: `#CCC`,
    borderRadius: 5,
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(1)
  },
  card: (w) => ({
    height: responsiveWidth(w * 1.3986013986),
    width: responsiveWidth(w),
  }),
})
