import React from "react"
import types from "prop-types"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import useEndTurnStand from "src/hooks/useEndTurnStand"

export default function EndTurnStand({ turn, standing, uoid }) {
  const [endTurn, stand] = useEndTurnStand(uoid)
  return (
    <View style={styles.container}>
      {/* End Turn */}
      <TouchableOpacity style={styles.button} onPress={endTurn} disabled={!turn || standing}>
        <LinearGradient style={styles.gradient} colors={["#2B336C", "#131B37"]}>
          <Text style={styles.text}>END TURN</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Stand */}
      {standing ? (
        <TouchableOpacity style={styles.button} onPress={stand} disabled>
          <LinearGradient style={styles.gradient} colors={["#2B336C", "#2B336C"]}>
            <Text style={styles.text}>STAND</Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={stand}>
          <LinearGradient style={styles.gradient} colors={["#2B336C", "#131B37"]}>
            <Text style={styles.text}>STAND</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </View>
  )
}

EndTurnStand.defaultProps = {
  turn: false,
  standing: false,
}

EndTurnStand.propTypes = {
  turn: types.bool,
  standing: types.bool,
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 100,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: 20,
  },
  button: {
    height: 50,
    flex: 1,
    position: "relative",
    marginRight: 20,
    shadowColor: `#000`,
    borderRadius: 8,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  gradient: {
    height: `100%`,
    width: `100%`,
    alignItems: `center`,
    justifyContent: `center`,
    borderRadius: 8,
  },
  text: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: 12,
  },
})
