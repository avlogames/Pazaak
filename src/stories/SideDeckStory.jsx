import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import BigCard from "src/atoms/BigCard"
import getSideDeck from "src/library/getSideDeck"

export default function SideDeckStory() {
  const [sideDecks] = useState(getSideDeck())

  return (
    <View style={styles.container}>
      {/* Player */}
      <Text>Player</Text>
      <View style={styles.cards}>
        {sideDecks.player.map((card) => (
          <BigCard key={`player${card.value}`} {...card} />
        ))}
      </View>

      {/* Opponent*/}
      <Text>Opponent</Text>
      <View style={styles.cards}>
        {sideDecks.opponent.map((card) => (
          <BigCard key={`opponent${card.value}`} {...card} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: `column`,
    alignItems: "center",
    justifyContent: `center`,
  },
  cards: {
    flex: 1,
    paddingTop: 60,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
  },
})
