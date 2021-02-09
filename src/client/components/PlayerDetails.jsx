import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import { LinearGradient } from "expo-linear-gradient"
import types from "prop-types"
import creditIcon from "src/client/assets/images/credit-icon.png"
import man from "src/client/assets/images/man.png"
import woman from "src/client/assets/images/woman.png"

export default function PlayerDetails({ turn, name, avatar, credits }) {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
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
    flexBasis: responsiveHeight(6),
    marginBottom: responsiveHeight(3),
  },
  detailsContainer: {
    position: `absolute`,
    bottom: responsiveHeight(0.5),
    width: `100%`,
    alignItems: `center`,
  },
  activeWrapper: {
    height: responsiveWidth(18),
    width: responsiveWidth(18),
    borderRadius: 100,
    overflow: `hidden`,
  },
  activeGradient: {
    height: `100%`,
    width: `100%`,
    position: "absolute",
  },
  profileBorderWrapper: {
    margin: responsiveWidth(1),
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
    margin: responsiveWidth(1),
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
    fontSize: responsiveFontSize(1.8),
    textTransform: `uppercase`,
    paddingTop: responsiveHeight(0.5),
  },
  creditsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: responsiveWidth(1),
  },
  creditsText: {
    color: `#CCC`,
    fontWeight: `700`,
    fontSize: responsiveFontSize(1.5),
    textTransform: `uppercase`,
  },
})
