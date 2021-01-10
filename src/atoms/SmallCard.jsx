import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View, Text } from "react-native"

const colors = {
  red: ["#FF6D3A", "#FF573F", "#FF4342", "#FD0043"],
  blue: ["#008EFD", "#0070D0", "#0059AD", "#004086"],
  green: ["#9FDD00", "#A5D600", "#97BD41", "#92B059"],
  gray: ["#CCCCCC", "#999999", "#777777", "#555555"],
}

export default function SmallCard({ type = "green", value = 1 }) {
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.topRound}>
          <LinearGradient colors={[colors[type][0], colors[type][1]]} style={styles.gradient}>
            <View style={styles.topArrow} />
          </LinearGradient>
          <View style={styles.numberStripe}>
            <Text style={styles.numberText}>{`${value > 0 && type !== "green"  ? "+" : ""}${value}`}</Text>
          </View>
          <LinearGradient colors={[colors[type][1], colors[type][2]]} style={styles.gradient}>
            <View style={styles.bottomArrow} />
          </LinearGradient>
        </View>
        <View style={styles.bottomRound}>
          <LinearGradient colors={[colors[type][2], colors[type][3]]} style={styles.gradient} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 40,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  paper: {
    height: 55,
    width: 40,
    borderRadius: 10,
    backgroundColor: `#FFF`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
  },
  topRound: {
    marginTop: `10%`,
    marginBottom: `10%`,
    flex: 3,
    width: `80%`,
    borderRadius: 5,
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
    fontSize: 10,
    marginTop: -1,
    marginRight: -1,
  },
  bottomRound: {
    flex: 1,
    width: `80%`,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: `hidden`,
  },
  topArrow: {
    height: 15,
    width: 15,
    transform: [{ rotate: `45deg` }],
    marginBottom: -20,
    backgroundColor: "#FFF",
  },
  bottomArrow: {
    height: 15,
    width: 15,
    transform: [{ rotate: `45deg` }],
    marginTop: -20,
    backgroundColor: "#FFF",
  },
})
