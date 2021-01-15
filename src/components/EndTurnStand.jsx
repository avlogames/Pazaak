import React, { Fragment } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import { getStatusBarHeight } from "react-native-status-bar-height"
import { LinearGradient } from "expo-linear-gradient"
import types from "prop-types"
import useEndTurnStand from "src/hooks/useEndTurnStand"

export default function EndTurnStand({ turn, playerStanding, opponentStanding, uoid }) {
  const [endTurn, stand] = useEndTurnStand(uoid)

  return (
    <View style={styles.container}>
      {turn ? (
        playerStanding ? (
          <View style={styles.waitingWrapper}>
            <Text style={styles.waitingText}>Standing...</Text>
          </View>
        ) : (
          <Fragment>
            {/* End Turn */}
            <TouchableOpacity style={styles.button} onPress={endTurn} disabled={!turn || playerStanding}>
              <LinearGradient style={styles.gradient} colors={["#2B336C", "#131B37"]}>
                <Text style={styles.text}>{opponentStanding ? `HIT ME` : `NEXT`}</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Stand */}
            <TouchableOpacity style={styles.button} onPress={stand}>
              <LinearGradient style={styles.gradient} colors={["#2B336C", "#131B37"]}>
                <Text style={styles.text}>STAND</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Fragment>
        )
      ) : (
        <View style={styles.waitingWrapper}>
          <Text style={styles.waitingText}>Waiting for opponent...</Text>
        </View>
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

const statusBar = getStatusBarHeight(true)
const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(6),
    marginBottom: statusBar === 44 ? 35 : 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: responsiveWidth(5),
  },
  button: {
    flex: 1,
    marginRight: responsiveWidth(5),
    shadowColor: `#000`,
    borderRadius: responsiveWidth(4),
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  gradient: {
    alignItems: `center`,
    justifyContent: `center`,
    borderRadius: responsiveWidth(4),
    height: `100%`,
  },
  text: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: responsiveFontSize(1.5),
  },
  waitingWrapper: {
    height: responsiveHeight(5.5),
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  waitingText: {
    color: `#FFF`,
    fontWeight: `800`,
    fontSize: responsiveFontSize(1.5),
  },
})
