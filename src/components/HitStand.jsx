import React, { Fragment } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { rFont, rHeight, rWidth } from "src/helpers/responsive"
import { getStatusBarHeight } from "react-native-status-bar-height"
import types from "prop-types"

export default function HitStand({ hit, stand, turn }) {
  return (
    <View style={styles.container}>
      <Fragment>
        {/* Hit Me */}
        <TouchableOpacity style={styles.button} onPress={hit} disabled={!turn}>
          <Text style={styles.text}>HIT ME</Text>
        </TouchableOpacity>

        {/* Stand */}
        <TouchableOpacity style={styles.button} onPress={stand} disabled={!turn}>
          <Text style={styles.text}>STAND</Text>
        </TouchableOpacity>
      </Fragment>
    </View>
  )
}

HitStand.defaultProps = {
  turn: false,
  standing: false,
}

HitStand.propTypes = {
  turn: types.bool,
  standing: types.bool,
}

const statusBar = getStatusBarHeight(true)
const styles = StyleSheet.create({
  container: {
    height: rHeight(6),
    marginBottom: statusBar === 44 ? 35 : 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingLeft: rWidth(5),
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.8)",
    borderWidth: 2,
    height: rHeight(5),
    marginRight: rWidth(5),
    shadowColor: `#000`,
    borderRadius: rWidth(4),
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  text: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: rFont(1.75),
  },
  waitingWrapper: {
    height: rHeight(5.5),
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  waitingText: {
    color: `#FFF`,
    fontWeight: `800`,
    fontSize: rFont(1.5),
  },
})
