import React from "react"
import { View } from "react-native-animatable"
import { StyleSheet, Image } from "react-native"
import { rWidth, rHeight } from "src/helpers/responsive"
import { CARDS } from "src/config"

export default function SmallCard({ type = "green", value = 1 }) {
  return (
    <View style={styles.paper} animation="bounceIn">
      <Image style={styles.card(9.6)} source={CARDS[`${type}${value}`]} />
    </View>
  )
}

const styles = StyleSheet.create({
  paper: {
    overflow: `hidden`,
    marginLeft: rWidth(1.25),
    marginRight: rWidth(1.25),
    marginTop: rHeight(0.5),
    marginBottom: rHeight(0.5),
  },
  card: (w) => ({
    height: rWidth(w * 1.395256917),
    width: rWidth(w),
  }),
})
