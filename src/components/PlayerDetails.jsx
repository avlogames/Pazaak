import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"
import creditIcon from "src/assets/credit-icon.png"

export default function PlayerDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.activePlayerWrapper}></View>
        <Text style={styles.name}>Haytherecharlie</Text>
        <View style={styles.creditsContainer}>
          <Image style={styles.icon} source={creditIcon} />
          <Text style={styles.creditsText}>2,756</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 50,
  },
  detailsContainer: {
    marginTop: -80,
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
    paddingTop: 7
  },
  creditsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  creditsText: {
    color: `#CCC`,
    fontWeight: `900`,
    textTransform: `uppercase`,
  },
})
