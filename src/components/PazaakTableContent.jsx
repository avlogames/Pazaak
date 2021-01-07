import React from "react"
import { StyleSheet, View } from "react-native"
import GameAreaCard from "src/components/GameAreaCard"
import SideDeckCard from "src/components/SideDeckCard"

export default function PazaakTableContent() {
  return (
    <View style={styles.container}>
      {/* Inner Ring */}
      <View style={styles.innerRingWrapper}>
        <View style={styles.innerRing}></View>
      </View>

      {/* Opponent Side Deck */}
      <View style={styles.opponentStripe}>
        <SideDeckCard color="gray" value="" />
        <SideDeckCard color="gray" value="" />
        <SideDeckCard color="gray" value="" />
        <SideDeckCard color="gray" value="" />
      </View>

      {/* Opponent Game Area */}
      <View style={styles.opponentGameArea}>
        <View style={styles.opponentCards}>
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="2" />
          <GameAreaCard color="green" value="4" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="blue" value="+4" />
          <GameAreaCard color="red" value="-3" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="3" />
        </View>
      </View>

      {/* Player Game Area */}
      <View style={styles.playerGameArea}>
        <View style={styles.playerCards}>
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="2" />
          <GameAreaCard color="green" value="4" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="blue" value="+4" />
          <GameAreaCard color="red" value="-3" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="3" />
          <GameAreaCard color="green" value="3" />
        </View>
      </View>

      {/* Player Side Deck */}
      <View style={styles.playerStripe}>
        <SideDeckCard color="blue" value="+1" />
        <SideDeckCard color="red" value="-3" />
        <SideDeckCard color="red" value="-1" />
        <SideDeckCard color="blue" value="+5" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  innerRingWrapper: {
    height: `100%`,
    width: `100%`,
    position: `absolute`,
  },
  innerRing: {
    flex: 1,
    margin: 20,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: `rgba(255, 255, 255, 0.05)`,
  },
  playerStripe: {
    flexDirection: `row`,
    justifyContent: `center`,
    backgroundColor: `#2E385A`,
    width: `100%`,
    paddingTop: `2%`,
    paddingBottom: `2%`,
    marginBottom: `15%`,
  },
  playerGameArea: {
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

  opponentGameArea: {
    flex: 1,
    borderBottomWidth: 2.5,
    borderBottomColor: `#2E385A`,
    alignItems: "center",
    justifyContent: "center",
  },
  opponentCards: {
    width: 240,
    flexDirection: `row`,
    flexWrap: `wrap`,
  },
  opponentStripe: {
    flexDirection: `row`,
    justifyContent: `center`,
    backgroundColor: `#2E385A`,
    width: `100%`,
    paddingTop: `1%`,
    paddingBottom: `1%`,
    marginTop: `15%`,
  },
})
