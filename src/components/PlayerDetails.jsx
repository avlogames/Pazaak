import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import creditIcon from "src/assets/credit-icon.png"

export default function PlayerDetails({ turn = "00", uuid = "0", name = null, avatar = null, credits = null }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.activeWrapper}>
          {turn === uuid && <LinearGradient style={styles.activeGradient} colors={["#FF0044", "#FF623C"]} />}
          {avatar && (
            <View style={styles.profileBorderWrapper}>
              <LinearGradient style={styles.profileBorderGradient} colors={["#008EFE", "#004289"]} />
              <View style={styles.profileImageWrapper}>
                <Image style={styles.profileImageAvatar} source={avatar} />
              </View>
            </View>
          )}
        </View>
        {name && <Text style={styles.name}>{name}</Text>}
        {credits && (
          <View style={styles.creditsContainer}>
            <Image style={styles.icon} source={creditIcon} />
            <Text style={styles.creditsText}>2,756</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 60,
  },
  detailsContainer: {
    marginTop: -70,
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
    paddingTop: 5,
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
