import React from "react"
import types from "prop-types"
import { StyleSheet, View } from "react-native"
import { responsiveHeight } from "react-native-responsive-dimensions"
import BigCard from "src/ui/atoms/BigCard"
import BigPlaceholder from "src/ui/atoms/BigPlaceholder"
import usePlayCard from "src/ui/hooks/usePlayCard"

export default function PlayerSideDeck({ sideDeck, turn, uoid }) {
  const [playCard] = usePlayCard(uoid)

  return (
    <View style={styles.container}>
      {sideDeck.map((val, i) => {
        if (val.type === "placeholder") return <BigPlaceholder key={`o-place-${i}`} />
        return <BigCard playCard={playCard} key={`o-card-${i}`} {...val} turn={turn} index={i} />
      })}
    </View>
  )
}

PlayerSideDeck.defaultProps = {
  sideDeck: [],
  turn: false,
  uoid: null,
}

PlayerSideDeck.propTypes = {
  sideDeck: types.arrayOf(
    types.exact({
      type: types.string.isRequired,
      value: types.number.isRequired,
    })
  ),
  turn: types.bool,
  uoid: types.string,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: `row`,
    justifyContent: `center`,
    backgroundColor: `#2E385A`,
    width: `100%`,
    marginBottom: responsiveHeight(6),
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
  },
})
