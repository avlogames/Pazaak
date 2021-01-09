import React from "react"
import { StyleSheet, View } from "react-native"
import SmallCard from "src/atoms/SmallCard"
import SmallPlaceholder from "src/atoms/SmallPlaceholder"

export default function OpponentSideDeck({ sideDeck = [] }) {
  return (
    <View style={styles.container}>
      {sideDeck.map((val, i) => {
        if (val.type === "placeholder") return <SmallPlaceholder key={`o-place-${i}`} />
        return <SmallCard key={`o-card-${i}`} type="gray" value="" />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: `row`,
    justifyContent: `center`,
    backgroundColor: `#2E385A`,
    width: `100%`,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: `1%`,
    paddingBottom: `1%`,
    marginTop: `12%`,
  },
})
