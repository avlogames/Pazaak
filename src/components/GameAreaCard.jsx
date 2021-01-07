import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View, Text } from "react-native"

const c = {
  red: ["#FF6D3A", "#FF573F", "#FF4342", "#FD0043"],
  blue: ["#008EFD", "#0070D0", "#0059AD", "#004086"],
  green: ["#9FDD00", "#A5D600", "#97BD41", "#92B059"],
  gray: ["#CCCCCC", "#999999", "#777777", "#555555"],
}

export default function GameAreaCard({ color = "green", value = "+1" }) {
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.topRound}>
          <LinearGradient colors={[c[color][0], c[color][1]]} style={styles.gradient}>
            <View style={styles.topArrow} />
          </LinearGradient>
          <View style={styles.numberStripe}>
            <Text style={styles.numberText}>{value}</Text>
          </View>
          <LinearGradient colors={[c[color][1], c[color][2]]} style={styles.gradient}>
            <View style={styles.bottomArrow} />
          </LinearGradient>
        </View>
        <View style={styles.bottomRound}>
          <LinearGradient colors={[c[color][2], c[color][3]]} style={styles.gradient} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexBasis: 40,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  paper: {
    height: 50,
    width: 40,
    borderRadius: 10,
    backgroundColor: `#FFF`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`
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
