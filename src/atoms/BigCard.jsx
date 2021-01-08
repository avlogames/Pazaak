import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { PLACEHOLDER } from "src/constants"

const colors = {
  red: ["#FF6D3A", "#FF573F", "#FF4342", "#FD0043"],
  blue: ["#008EFD", "#0070D0", "#0059AD", "#004086"],
  green: ["#9FDD00", "#A5D600", "#97BD41", "#92B059"],
  gray: ["#CCCCCC", "#999999", "#777777", "#555555"],
}

export default function BigCard({ type = "green", value = "+1", index }) {
  const dispatch = useDispatch()
  const { playerStack, playerSideDeck } = useSelector((s) => s.pazaak)

  const playCard = () => {
    const sideDeck = playerSideDeck
    const stack = playerStack
    sideDeck[index] = PLACEHOLDER
    stack[playerStack.indexOf(PLACEHOLDER)] = { type, value }
    dispatch({ type: "player-play-card", sideDeck, stack })
  }

  return (
    <TouchableOpacity style={styles.paper} onPress={playCard}>
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
    height: 70,
    width: 50,
    borderRadius: 10,
    backgroundColor: `#FFF`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    margin: 5,
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
