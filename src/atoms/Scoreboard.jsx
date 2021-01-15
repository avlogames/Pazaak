import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"

export default function Scoreboard({ score = 0, wins = 0 }) {
  const scoreColor = score === 20 ? ["#FF623C", "#92B059"] : ["#FF0048", "#FF7637"]
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.gradientWrapper}>
          <LinearGradient colors={scoreColor} style={styles.gradient}>
            <View style={styles.innerCircle}>
              <Text style={styles.score}>{score}</Text>
            </View>
          </LinearGradient>
        </View>
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
    </View>
  )
}

const styles = StyleSheet.create({
  paper: {
    height: responsiveWidth(12),
    width: responsiveWidth(9),
    borderRadius: responsiveWidth(1),
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
    margin: responsiveWidth(1.5),
  },
  gradientWrapper: {
    height: responsiveWidth(8),
    width: responsiveWidth(8),
    borderRadius: 20,
    overflow: `hidden`,
  },
  gradient: {
    flex: 1,
  },
  innerCircle: {
    margin: responsiveWidth(1),
    flex: 1,
    backgroundColor: `#1A244B`,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: responsiveFontSize(1.5)
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
    marginLeft: responsiveWidth(.5),
    marginRight: responsiveWidth(.5),
  },
})
