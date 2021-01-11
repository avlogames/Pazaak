import React from "react"
import types from "prop-types"
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import creditIcon from "src/assets/credit-icon.png"
import man from "src/assets/man.png"
import woman from "src/assets/woman.png"

export default function OpponentDetails({ turn, name, avatar, credits, cancel }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.quitButton} onPress={cancel}>
        <Text style={styles.quitText}>{`FORFEIT GAME`}</Text>
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        {name.length && <Text style={styles.name}>{name}</Text>}
        {credits > -1 && (
          <View style={styles.creditsContainer}>
            <Image style={styles.icon} source={creditIcon} />
            <Text style={styles.creditsText}>{credits}</Text>
          </View>
        )}
        <View style={styles.activeWrapper}>
          {turn && <LinearGradient style={styles.activeGradient} colors={["#FF0044", "#FF623C"]} />}
          {avatar.length && (
            <View style={styles.profileBorderWrapper}>
              <LinearGradient style={styles.profileBorderGradient} colors={["#008EFE", "#004289"]} />
              <View style={styles.profileImageWrapper}>
                <Image style={styles.profileImageAvatar} source={avatar === "man" ? man : woman} />
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

OpponentDetails.defaultProps = {
  avatar: null,
  cancel: () => {},
  credits: null,
  name: null,
  turn: false,
}

OpponentDetails.propTypes = {
  avatar: types.string,
  cancel: types.func,
  credits: types.number,
  name: types.string,
  turn: types.bool,
}

const styles = StyleSheet.create({
  container: {
    flexBasis: 40,
    zIndex: 100,
  },
  quitButton: {
    position: "absolute",
    left: 20,
    top: -10,
    width: 55,
    zIndex: 1000,
  },
  quitText: {
    color: `#FFF`,
    fontWeight: `800`,
    fontSize: 12,
    textAlign: `center`,
  },
  detailsContainer: {
    marginTop: -10,
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
