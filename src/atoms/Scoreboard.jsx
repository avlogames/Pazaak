import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function Scoreboard({ score = 0, wins = 0, standing = false }) {
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.gradientWrapper}>
          <LinearGradient colors={["#FF0044", "#FF623C"]} style={styles.gradient}>
            <View style={styles.innerCircle}>
              <Text style={standing ? styles.standingScore : styles.score}>{score}</Text>
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
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    overflow: `hidden`,
  },
  gradientWrapper: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: `yellow`,
    overflow: `hidden`,
  },
  gradient: {
    flex: 1,
  },
  innerCircle: {
    margin: 3,
    flex: 1,
    backgroundColor: `#1A244B`,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    color: `#FFF`,
    fontWeight: `900`,
  },
  standingScore: {
    color: `yellow`,
    fontSize: 18,
    fontWeight: `900`,
  },
  winRow: {
    flexDirection: `row`,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  winWrapper: {
    height: 7,
    width: 7,
    backgroundColor: `#141B36`,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 2,
    marginRight: 2,
  },
})
