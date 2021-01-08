import React from "react"
import { StyleSheet, View } from "react-native"

export default function SmallPlaceholder() {
  return (
    <View style={styles.container}>
      <View style={styles.paper}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 40,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  paper: {
    height: 55,
    width: 40,
    borderRadius: 10,
    backgroundColor: `#141B36`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
  },
})
