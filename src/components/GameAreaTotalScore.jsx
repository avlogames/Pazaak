import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

export default function GameAreaTotalScore({ score = 9, wins = 1 }) {
  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.gradientWrapper}>
          <LinearGradient colors={["#FF0047", "#0090FF"]} style={styles.gradient}>
            <View style={styles.innerCircle}>
              <Text style={styles.score}>{score}</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.winRow}>
          <View style={styles.winWrapper}>
            <LinearGradient colors={["#FF0047", "#0090FF"]} style={styles.gradient} />
          </View>
          <View style={styles.winWrapper}>
            {/* <LinearGradient colors={["#FF0047", "#0090FF"]} style={styles.gradient} /> */}
          </View>
          <View style={styles.winWrapper}>
            {/* <LinearGradient colors={["#FF0047", "#0090FF"]} style={styles.gradient} /> */}
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
    justifyContent: `flex-start`,
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
  winRow: {
    flexDirection: `row`,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  winWrapper: {
    height: 5,
    width: 5,
    backgroundColor: `#141B36`,
    borderRadius: 5,
    overflow: "hidden",
    marginLeft: 2,
    marginRight: 2,
  },
})
