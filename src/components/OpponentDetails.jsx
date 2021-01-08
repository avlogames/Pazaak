import React from "react"
import { useSelector } from "react-redux"
import { StyleSheet, Image, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import creditIcon from "src/assets/credit-icon.png"
import avatar from "src/assets/fat-woman.jpg"

export default function OpponentDetails() {
  const { activeTurn, opponentUserId, opponentName } = useSelector((s) => s.pazaak)
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{opponentName}</Text>
        <View style={styles.creditsContainer}>
          <Image style={styles.icon} source={creditIcon} />
          <Text style={styles.creditsText}>1,326</Text>
        </View>
        <View style={styles.activeWrapper}>
          {activeTurn === opponentUserId && <LinearGradient style={styles.activeGradient} colors={["#FF0044", "#FF623C"]} />}
          <View style={styles.profileBorderWrapper}>
            <LinearGradient style={styles.profileBorderGradient} colors={["#008EFE", "#004289"]} />
            <View style={styles.profileImageWrapper}>
              <Image style={styles.profileImageAvatar} source={avatar} />
            </View>
          </View>
        </View>
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
    marginTop: -20,
    width: `100%`,
    alignItems: `center`,
  },
  activeWrapper: {
    height: 75,
    width: 75,
    borderRadius: 100,
    overflow: `hidden`,
  },
  activeGradient: {
    height: `100%`,
    width: `100%`,
    position: "absolute",
  },
  profileBorderWrapper: {
    margin: 5,
    backgroundColor: `green`,
    flex: 1,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#24305B",
  },
  profileBorderGradient: {
    height: `100%`,
    width: `100%`,
    position: "absolute",
  },
  profileImageWrapper: {
    margin: 5,
    flex: 1,
    backgroundColor: "red",
    borderRadius: 100,
    overflow: "hidden",
  },
  profileImageAvatar: {
    height: `100%`,
    width: `100%`,
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
    paddingBottom: 5,
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
