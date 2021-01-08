import React from "react"
import { useSelector } from "react-redux"
import { StyleSheet, View } from "react-native"
import BigCard from "src/atoms/BigCard"

export default function Name() {
  const { playerSideDeck } = useSelector((s) => s.pazaak)

  return (
    <View style={styles.container}>
      {playerSideDeck.map((val, i) => {
        if (val.type === "placeholder") return <SmallPlaceholder key={`o-place-${i}`} />
        return <BigCard key={`o-card-${i}`} {...val} />
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
    paddingTop: `1%`,
    paddingBottom: `1%`,
    marginBottom: `15%`,
  },
})
