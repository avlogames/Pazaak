import React from "react"
import { View } from "react-native-animatable"
import { StyleSheet, Image } from "react-native"
import { responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"
import { CARDS } from "src/ui/config"

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
    marginLeft: responsiveWidth(1.25),
    marginRight: responsiveWidth(1.25),
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(0.5),
  },
  card: (w) => ({
    height: responsiveWidth(w * 1.395256917),
    width: responsiveWidth(w),
  }),
})
