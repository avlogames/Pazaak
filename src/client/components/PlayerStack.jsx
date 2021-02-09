import React from "react"
import types from "prop-types"
import { StyleSheet, View } from "react-native"
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import SmallCard from "src/client/atoms/SmallCard"
import Scoreboard from "src/client/atoms/Scoreboard"

export default function PlayerStack({ score, stack, standing, wins }) {
  return (
    <View style={styles.container}>
      <View style={styles.playerCards}>
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

PlayerStack.defaultProps = {
  score: null,
  stack: [],
  standing: false,
  wins: 0,
}

PlayerStack.propTypes = {
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
    borderTopWidth: responsiveHeight(0.75),
    borderTopColor: `#2E385A`,
    alignItems: "center",
    justifyContent: "center",
  },
  playerCards: {
    width: responsiveWidth(61),
    flexDirection: `row`,
    flexWrap: `wrap`,
  },
})
