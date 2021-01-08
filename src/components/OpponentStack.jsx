import React from "react"
import { useSelector } from "react-redux"
import { StyleSheet, View } from "react-native"
import SmallCard from "src/atoms/SmallCard"
import SmallPlaceholder from "src/atoms/SmallPlaceholder"
import Scoreboard from "src/atoms/Scoreboard"

export default function OpponentStack() {
  const { opponentStack, opponentScore } = useSelector((s) => s.pazaak)

  return (
    <View style={styles.container}>
      <View style={styles.opponentCards}>
        <Scoreboard score={opponentScore} />
        {opponentStack.map((val, i) => {
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
})
