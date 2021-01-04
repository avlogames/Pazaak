import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default function HomeScreenFooter() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.copyright}>{`© 2021 Haytrix Games`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  copyright: {
    color: `#FFF`,
    fontWeight: "900",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.65)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
})
