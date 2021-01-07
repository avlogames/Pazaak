import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"
import creditIcon from "src/assets/credit-icon.png"

export default function OpponentDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Haytrix</Text>
        <View style={styles.creditsContainer}>
          <Image style={styles.icon} source={creditIcon} />
          <Text style={styles.creditsText}>1,457</Text>
        </View>
        <View style={styles.activePlayerWrapper}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 30,
    zIndex: 100,
  },
  detailsContainer: {
    marginTop: -10,
    width: `100%`,
    alignItems: `center`,
  },
  activePlayerWrapper: {
    height: 75,
    width: 75,
    borderRadius: 100,
    backgroundColor: "orange",
  },
  name: {
    color: `#FFF`,
    fontWeight: `900`,
    fontSize: 16,
    textTransform: `uppercase`,
  },
  creditsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7
  },
  icon: {
    marginRight: 5,
  },
  creditsText: {
    color: `#CCC`,
    fontWeight: `900`,
    fontSize: 13,
    textTransform: `uppercase`,
  },
})
