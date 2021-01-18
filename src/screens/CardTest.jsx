import React from "react"
import { StyleSheet, Image, View } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions"
import { CARDS } from "src/constants"

export default function CardTest({ type = "red", value = "-1" }) {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 50,
    justifyContent: "center",
  },
  cardWrapper: {

  },

})
