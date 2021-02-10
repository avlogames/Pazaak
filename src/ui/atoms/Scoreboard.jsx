import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { StyleSheet, ImageBackground, Platform, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import blueHex from "src/ui/assets/images/blue-hex.png"
import redHex from "src/ui/assets/images/red-hex.png"
import updateDocument from "src/api/firebase/firestore/updateDocument"

export default function Scoreboard({ score = 0, wins = 0 }) {
  const pazaak = useSelector((s) => s.pazaak)
  useEffect(() => {
    if (wins === 3) {
      const winner = Object.keys(pazaak.players).find((k) => {
        return pazaak.players[k].wins === 3
      })
      updateDocument({ ...pazaak, gameOver: true, winner })
    }
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
    height: responsiveWidth(w * 1.395256917),
    width: responsiveWidth(w),
    alignItems: "center",
    justifyContent: "center",
    marginLeft: responsiveWidth(1.25),
    marginRight: responsiveWidth(1.25),
    marginTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(0.5),
  }),
  imageBackground: {
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    color: `#FFF`,
    fontWeight: `700`,
    paddingLeft: iOS ? 2 : 0,
    fontSize: responsiveFontSize(1.5),
  },
  winRow: {
    flexDirection: `row`,
    alignItems: "center",
    justifyContent: "center",
    marginTop: responsiveHeight(1),
  },
  winWrapper: {
    height: responsiveWidth(1.8),
    width: responsiveWidth(1.8),
    backgroundColor: `#141B36`,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: responsiveWidth(0.5),
    marginRight: responsiveWidth(0.5),
  },
  gradient: {
    height: `100%`,
    width: `100%`,
  },
})
