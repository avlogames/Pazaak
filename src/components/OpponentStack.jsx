import React from "react"
import types from "prop-types"
import { StyleSheet, View } from "react-native"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import SmallCard from "src/atoms/SmallCard"
import SmallPlaceholder from "src/atoms/SmallPlaceholder"
import Scoreboard from "src/atoms/Scoreboard"

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
    width: responsiveWidth(60.5),
    flexDirection: `row`,
    flexWrap: `wrap`,
  },
})
