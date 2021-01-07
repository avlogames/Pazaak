import React from "react"
import { StyleSheet, View } from "react-native"

export default function GameAreaPlaceholder() {
  return (
    <View style={styles.container}>
      <View style={styles.paper}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexBasis: 40,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  paper: {
    height: 50,
    width: 40,
    borderRadius: 10,
    backgroundColor: `#141B36`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
  },
})
