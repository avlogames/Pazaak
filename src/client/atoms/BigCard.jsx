import React from "react"
import { responsiveWidth } from "react-native-responsive-dimensions"
import { StyleSheet, Image, TouchableOpacity } from "react-native"
import { CARDS } from "src/client/config"

export default function BigCard({ type = "green", value = "+1", playCard, turn, index }) {
  return (
    <TouchableOpacity style={styles.paper} onPress={() => (turn ? playCard(index) : {})}>
      <Image style={styles.card(12)} source={CARDS[`${type}${value}`]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  paper: {
    marginLeft: responsiveWidth(1.5),
    marginRight: responsiveWidth(1.5),
  },
  card: (w) => ({
    height: responsiveWidth(w * 1.3986013986),
    width: responsiveWidth(w),
  }),
})
