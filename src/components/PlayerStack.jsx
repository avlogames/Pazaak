import React from "react"
import types from "prop-types"
import { StyleSheet, View } from "react-native"
import SmallCard from "src/atoms/SmallCard"
import SmallPlaceholder from "src/atoms/SmallPlaceholder"
import Scoreboard from "src/atoms/Scoreboard"

export default function PlayerStack({ score, stack, standing }) {
  return (
    <View style={styles.container}>
      <View style={styles.playerCards}>
        {score > -1 && <Scoreboard score={score} standing={standing} />}
        {stack.map((val, i) => {
          if (val.type === "placeholder") return <SmallPlaceholder key={`o-place-${i}`} />
          return <SmallCard key={`o-card-${i}`} {...val} />
        })}
      </View>
    </View>
  )
}

PlayerStack.defaultProps = {
  score: null,
  stack: [],
  standing: false,
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 2.5,
    borderTopColor: `#2E385A`,
    alignItems: "center",
    justifyContent: "center",
  },
  playerCards: {
    width: 240,
    flexDirection: `row`,
    flexWrap: `wrap`,
  },
})
