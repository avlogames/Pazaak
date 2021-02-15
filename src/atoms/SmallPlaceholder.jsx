import React from "react"
import { StyleSheet, View } from "react-native"
import { rHeight, rWidth } from "src/helpers/responsive"

export default function SmallPlaceholder() {
  return <View style={styles.paper}></View>
}

const styles = StyleSheet.create({
  paper: {
    height: rWidth(12.2),
    width: rWidth(9),
    borderRadius: rWidth(1),
    backgroundColor: `#141B36`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `flex-start`,
    overflow: `hidden`,
    marginLeft: rWidth(1.5),
    marginRight: rWidth(1.5),
    marginTop: rHeight(1),
    marginBottom: rHeight(.5),
  },
})
