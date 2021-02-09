import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import getAllData from "src/api/sqlite/queries/getAllData"

export default function TestSQL() {
  useEffect(() => {
    getAllData(14, 0, 1, 1)
  }, [])

  return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
