import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { StyleSheet, ImageBackground, Platform, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { rFont, rHeight, rWidth } from "src/helpers/responsive"
import blueHex from "src/assets/images/blue-hex.png"
import redHex from "src/assets/images/red-hex.png"
import GameActions from "src/lib/GameActions"

export default function Scoreboard({ score = 0, wins = 0 }) {
  const pazaak = useSelector((s) => s.pazaak)
  useEffect(() => {
    GameActions.checkForWinner(pazaak, true)
  }, [wins])

  return (
    <View style={styles.paper(9.6)}>
      <ImageBackground style={styles.imageBackground} source={score === 20 ? redHex : blueHex}>
        <Text style={styles.score}>{score}</Text>
      </ImageBackground>
      <View style={styles.winRow}>
        <View style={styles.winWrapper}>
          {wins > 0 && <LinearGradient colors={["#FF0044", "#FF623C"]} style={styles.gradient} />}
        </View>
        <View style={styles.winWrapper}>
          {wins > 1 && <LinearGradient colors={["#FF0044", "#FF623C"]} style={styles.gradient} />}
        </View>
        <View style={styles.winWrapper}>
          {wins > 2 && <LinearGradient colors={["#FF0044", "#FF623C"]} style={styles.gradient} />}
        </View>
      </View>
    </View>
  )
}

const iOS = Platform.OS === "ios"
const styles = StyleSheet.create({
  paper: (w) => ({
    height: rWidth(w * 1.395256917),
    width: rWidth(w),
    alignItems: "center",
    justifyContent: "center",
    marginLeft: rWidth(1.25),
    marginRight: rWidth(1.25),
    marginTop: rHeight(0.5),
    marginBottom: rHeight(0.5),
  }),
  imageBackground: {
    height: rWidth(9),
    width: rWidth(9),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    color: `#FFF`,
    fontWeight: `700`,
    paddingLeft: iOS ? 2 : 0,
    fontSize: rFont(1.5),
  },
  winRow: {
    flexDirection: `row`,
    alignItems: "center",
    justifyContent: "center",
    marginTop: rHeight(1),
  },
  winWrapper: {
    height: rWidth(1.8),
    width: rWidth(1.8),
    backgroundColor: `#141B36`,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: rWidth(0.5),
    marginRight: rWidth(0.5),
  },
  gradient: {
    height: `100%`,
    width: `100%`,
  },
})
