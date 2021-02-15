import React from "react"
import { rWidth } from "src/helpers/responsive"
import { StyleSheet, Image, TouchableOpacity } from "react-native"
import { CARDS } from "src/config"

export default function BigCard({ type = "green", value = "+1", playCard, turn, index }) {
  return (
    <TouchableOpacity style={styles.paper} onPress={() => (turn ? playCard(index) : {})}>
      <Image style={styles.card(12)} source={CARDS[`${type}${value}`]} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  paper: {
    marginLeft: rWidth(1.5),
    marginRight: rWidth(1.5),
  },
  card: (w) => ({
    height: rWidth(w * 1.3986013986),
    width: rWidth(w),
  }),
})
