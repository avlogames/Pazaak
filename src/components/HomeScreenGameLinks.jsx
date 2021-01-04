import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useLinkTo } from "@react-navigation/native"

export default function HomeScreenGameLinks() {
  const linkTo = useLinkTo()

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.coloredButton} onPress={() => linkTo("/NewGame")}>
        <Text style={styles.linkWhite}>{`New Game`}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.whiteButton} onPress={() => linkTo("/JoinGame")}>
        <Text style={styles.linkColor}>{`Join Game`}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { flex: 2, alignItems: "center", justifyContent: "space-around" },
  whiteButton: {
    backgroundColor: "#FFF",
    borderColor: "#B8ECFB",
    borderWidth: 2,
    borderRadius: 20,
    width: `80%`,
  },
  coloredButton: {
    backgroundColor: "#8CABEB",
    borderColor: "#B8ECFB",
    borderWidth: 2,
    borderRadius: 20,
    width: `80%`,
  },
  linkWhite: {
    width: `100%`,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: `#FFF`,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  linkColor: {
    width: `100%`,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    color: `#8CABEB`,
    fontWeight: "900",
    textTransform: "uppercase",
  },
})
