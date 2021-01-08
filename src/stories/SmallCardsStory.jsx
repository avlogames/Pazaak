import React from "react"
import { StyleSheet, View } from "react-native"
import SmallCard from "src/atoms/SmallCard"


export default function AllCardsStory() {
  return (
    <View style={styles.container}>
      <SmallCard color="red" value="-1" />
      <SmallCard color="red" value="-2" />
      <SmallCard color="red" value="-3" />
      <SmallCard color="red" value="-4" />
      <SmallCard color="red" value="-5" />
      <SmallCard color="red" value="-6" />
      <SmallCard color="red" value="-7" />
      <SmallCard color="red" value="-8" />
      <SmallCard color="red" value="-9" />
      <SmallCard color="red" value="-10" />
      <SmallCard color="blue" value="+1" />
      <SmallCard color="blue" value="+2" />
      <SmallCard color="blue" value="+3" />
      <SmallCard color="blue" value="+4" />
      <SmallCard color="blue" value="+5" />
      <SmallCard color="blue" value="+6" />
      <SmallCard color="blue" value="+7" />
      <SmallCard color="blue" value="+8" />
      <SmallCard color="blue" value="+9" />
      <SmallCard color="blue" value="+10" />
      <SmallCard color="green" value="1" />
      <SmallCard color="green" value="2" />
      <SmallCard color="green" value="3" />
      <SmallCard color="green" value="4" />
      <SmallCard color="green" value="5" />
      <SmallCard color="green" value="6" />
      <SmallCard color="green" value="7" />
      <SmallCard color="green" value="8" />
      <SmallCard color="green" value="9" />
      <SmallCard color="green" value="10" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    flexDirection: `row`,
    flexWrap: `wrap`,
    justifyContent: `center`,
  },
})
