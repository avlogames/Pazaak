import React from "react"
import { View as Aview } from "react-native-animatable"
import { StyleSheet, Image, Text, View } from "react-native"
import { rFont, rHeight, rWidth } from "src/helpers/responsive"
import { LinearGradient } from "expo-linear-gradient"
import types from "prop-types"
import creditIcon from "src/assets/images/credit-icon.png"
import man from "src/assets/images/man.png"
import woman from "src/assets/images/woman.png"

export default function PlayerDetails({ turn, name, avatar, credits }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.activeWrapper}>
          {turn && (
            <Aview>
              <LinearGradient style={styles.activeGradient} colors={["#FF0044", "#FF623C"]} />
            </Aview>
          )}
          {avatar.length && (
            <View style={styles.profileBorderWrapper}>
              <LinearGradient style={styles.profileBorderGradient} colors={["#008EFE", "#004289"]} />
              <View style={styles.profileImageWrapper}>
                <Image style={styles.profileImageAvatar} source={avatar === "man" ? man : woman} />
              </View>
            </View>
          )}
        </View>
        {name.length && <Text style={styles.name}>{name}</Text>}
        {credits > -1 && (
          <View style={styles.creditsContainer}>
            <Image style={styles.icon} source={creditIcon} />
            <Text style={styles.creditsText}>{credits}</Text>
          </View>
        )}
      </View>
    </View>
  )
}

PlayerDetails.defaultProps = {
  avatar: null,
  credits: null,
  name: null,
  turn: "00",
}

PlayerDetails.propTypes = {
  avatar: types.string,
  credits: types.number,
  name: types.string,
  turn: types.bool,
}

const styles = StyleSheet.create({
  container: {
    flexBasis: rHeight(6),
    marginBottom: rHeight(3),
  },
  detailsContainer: {
    position: `absolute`,
    bottom: rHeight(0.5),
    width: `100%`,
    alignItems: `center`,
  },
  activeWrapper: {
    height: rWidth(18),
    width: rWidth(18),
    borderRadius: 100,
    overflow: `hidden`,
  },
  activeGradient: {
    height: `100%`,
    width: `100%`,
    position: "absolute",
  },
  profileBorderWrapper: {
    margin: rWidth(1),
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
    margin: rWidth(1),
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
    fontWeight: `700`,
    fontSize: rFont(1.8),
    textTransform: `uppercase`,
    paddingTop: rHeight(0.5),
  },
  creditsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: rWidth(1),
  },
  creditsText: {
    color: `#CCC`,
    fontWeight: `700`,
    fontSize: rFont(1.5),
    textTransform: `uppercase`,
  },
})
