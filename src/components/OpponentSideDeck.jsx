import React from "react"
import types from "prop-types"
import { StyleSheet, View } from "react-native"
import { rHeight } from "src/helpers/responsive"
import SmallCard from "src/atoms/SmallCard"

export default function OpponentSideDeck({ sideDeck }) {
  return (
    <View style={styles.container}>
      {sideDeck.map((val, i) => (
        <SmallCard key={`o-card-${i}`} type={val.type === "placeholder" ? "placeholder" : "grey"} value="" />
      ))}
    </View>
  )
}

OpponentSideDeck.defaultProps = {
  sideDeck: [],
}

OpponentSideDeck.propTypes = {
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
    marginTop: rHeight(5),
  },
})
