import React from "react"
import types from "prop-types"
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native"
import { rFont, rHeight, rWidth } from "src/helpers/responsive"
import { LinearGradient } from "expo-linear-gradient"
import creditIcon from "src/assets/images/credit-icon.png"
import man from "src/assets/images/man.png"
import woman from "src/assets/images/woman.png"
import LeaveMatch from "src/atoms/LeaveMatch"

export default function OpponentDetails({ turn, name, avatar, credits, quit }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.quitButton} onPress={quit}>
        <LeaveMatch />
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
  quit: () => {},
  credits: null,
  name: null,
  turn: false,
}

OpponentDetails.propTypes = {
  avatar: types.string,
  quit: types.func,
  credits: types.number,
  name: types.string,
  turn: types.bool,
}

const styles = StyleSheet.create({
  container: {
    flexBasis: rHeight(6),
    zIndex: 100,
    marginTop: rHeight(1),
  },
  detailsContainer: {
    position: `absolute`,
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
  quitButton: {
    width: rWidth(16),
    marginTop: rHeight(0.5),
    marginLeft: rWidth(5),
    zIndex: 100,
  },
  quitText: {
    color: `#FFF`,
    fontWeight: `700`,
    fontSize: rFont(1.8),
    textTransform: `uppercase`,
    textAlign: "center",
  },
})
