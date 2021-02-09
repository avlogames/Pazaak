import React from "react"
import types from "prop-types"
import { StyleSheet, View } from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions"
import SmallCard from "src/ui/atoms/SmallCard"
import Scoreboard from "src/ui/atoms/Scoreboard"

export default function OpponentStack({ score, stack, standing, wins }) {
  return (
    <View style={styles.container}>
      <View style={styles.opponentCards}>
        <Scoreboard score={score} standing={standing} wins={wins} />
        {stack.map((val, i) => (
          <SmallCard
            key={`o-card-${i}`}
            type={val.type === "placeholder" ? "placeholder" : val.type}
            value={val.type === "placeholder" ? "" : val.value}
          />
        ))}
      </View>
    </View>
  )
}

OpponentStack.defaultProps = {
  score: null,
  stack: [],
  standing: false,
  wins: 0,
}

OpponentStack.propTypes = {
  score: types.number,
  stack: types.arrayOf(
    types.exact({
      type: types.string.isRequired,
      value: types.number.isRequired,
    })
  ),
  standing: types.bool,
  wins: types.number,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: `#2E385A`,
    alignItems: "center",
    justifyContent: "center",
  },
  opponentCards: {
    width: responsiveWidth(61),
    flexDirection: `row`,
    flexWrap: `wrap`,
  },
})
