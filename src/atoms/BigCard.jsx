import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

const colors = {
  red: ["#FF6D3A", "#FF573F", "#FF4342", "#FD0043"],
  blue: ["#008EFD", "#0070D0", "#0059AD", "#004086"],
  green: ["#9FDD00", "#A5D600", "#97BD41", "#92B059"],
  gray: ["#CCCCCC", "#999999", "#777777", "#555555"],
}

export default function BigCard({ type = "green", value = "+1", playCard, turn, index }) {
  return (
    <TouchableOpacity style={styles.paper} onPress={() => (turn ? playCard(index) : {})}>
      <View style={styles.topRound}>
        <LinearGradient colors={[colors[type][0], colors[type][1]]} style={styles.gradient}>
          <View style={styles.topArrow} />
        </LinearGradient>
        <View style={styles.numberStripe}>
          <Text style={styles.numberText}>{value}</Text>
        </View>
        <LinearGradient colors={[colors[type][1], colors[type][2]]} style={styles.gradient}>
          <View style={styles.bottomArrow} />
        </LinearGradient>
      </View>
      <View style={styles.bottomRound}>
        <LinearGradient colors={[colors[type][2], colors[type][3]]} style={styles.gradient} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  paper: {
    height: responsiveWidth(15),
    width: responsiveWidth(11),
    borderRadius: responsiveWidth(2),
    backgroundColor: `#FFF`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
    margin: responsiveWidth(2),
  },
  topRound: {
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(0.5),
    flex: 3,
    width: responsiveWidth(9),
    borderRadius: responsiveWidth(2),
    overflow: `hidden`,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  numberStripe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontWeight: `900`,
    fontSize: responsiveFontSize(1.5),
    marginTop: responsiveFontSize(-0.3),
  },
  bottomRound: {
    flex: 1,
    width: responsiveWidth(9),
    borderTopLeftRadius: responsiveWidth(2),
    borderTopRightRadius: responsiveWidth(2),
    overflow: `hidden`,
  },
  topArrow: {
    height: responsiveHeight(2),
    width: responsiveHeight(2),
    transform: [{ rotate: `45deg` }],
    marginBottom: responsiveHeight(-2.75),
    backgroundColor: "#FFF",
  },
  bottomArrow: {
    height: responsiveHeight(2),
    width: responsiveHeight(2),
    transform: [{ rotate: `45deg` }],
    marginTop: responsiveHeight(-2.75),
    backgroundColor: "#FFF",
  },
})
