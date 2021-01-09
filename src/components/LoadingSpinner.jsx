import React from "react"
import types from "prop-types"
import { StyleSheet, ActivityIndicator, Text, View } from "react-native"

export default function LoadingSpinner({ label }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.spinner} size="large" color="#FFF" />
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

LoadingSpinner.defaultProps = {
  label: "",
}

LoadingSpinner.propTypes = {
  label: types.string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: `#FFF`,
    fontSize: 20,
    fontWeight: `700`,
  },
  spinner: {
    marginBottom: 20,
  },
})
