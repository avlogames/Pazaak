import React from "react"
import types from "prop-types"
import { StyleSheet, View } from "react-native"
import BigCard from "src/atoms/BigCard"
import BigPlaceholder from "src/atoms/BigPlaceholder"

export default function PlayerSideDeck({ sideDeck }) {
  return (
    <View style={styles.container}>
      {sideDeck.map((val, i) => {
        if (val.type === "placeholder") return <BigPlaceholder key={`o-place-${i}`} />
        return <BigCard key={`o-card-${i}`} {...val} index={i} />
      })}
    </View>
  )
}

PlayerSideDeck.defaultProps = {
  sideDeck: [],
}

PlayerSideDeck.propTypes = {
  sideDeck: types.arrayOf(
    types.exact({
      type: types.string.isRequired,
      value: types.number.isRequired,
    })
  ),
}

const styles = StyleSheet.create({
  container: {
    flexDirection: `row`,
    justifyContent: `center`,
    backgroundColor: `#2E385A`,
    width: `100%`,
    paddingTop: `1%`,
    paddingBottom: `1%`,
    marginBottom: `15%`,
  },
})
