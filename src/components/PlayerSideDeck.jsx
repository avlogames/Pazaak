import React from "react"
import { StyleSheet, View } from "react-native"
import BigCard from "src/atoms/BigCard"

export default function Name() {
  return (
    <View style={styles.container}>
      <BigCard color="blue" value="+1" />
      <BigCard color="red" value="-3" />
      <BigCard color="red" value="-1" />
      <BigCard color="blue" value="+5" />
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
