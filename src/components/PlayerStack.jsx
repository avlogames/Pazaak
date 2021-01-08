import React from "react"
import { useSelector } from "react-redux"
import { StyleSheet, View } from "react-native"
import SmallCard from "src/atoms/SmallCard"
import SmallPlaceholder from "src/atoms/SmallPlaceholder"
import Scoreboard from "src/atoms/Scoreboard"

export default function PlayerStack() {
  const { playerStack, playerScore } = useSelector((s) => s.pazaak)
  return (
    <View style={styles.container}>
      <View style={styles.playerCards}>
        <Scoreboard score={playerScore} />
        {playerStack.map((val, i) => {
          if (val.type === "placeholder") return <SmallPlaceholder key={`o-place-${i}`} />
          return <SmallCard key={`o-card-${i}`} {...val} />
        })}
      </View>
    </View>
  )
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
