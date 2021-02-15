import React from "react"
import { StyleSheet, View } from "react-native"
import { rWidth, rHeight } from "src/helpers/responsive"
import { LinearGradient } from "expo-linear-gradient"

export default function TableRing({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.tableShadow}>
        <View style={styles.tableWrapper}>
          <LinearGradient style={styles.tableRing} colors={["#008EFE", "#004187"]}>
            <View style={styles.fabricWrapper}>
              <LinearGradient style={styles.tableFabric} colors={["#24305B", "#1A244B"]}>
                <View style={styles.tableContent}>
                  <View style={styles.innerRingWrapper}>
                    <View style={styles.innerRing}></View>
                  </View>
                  {children}
                </View>
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: rWidth(5),
    paddingRight: rWidth(5),
    paddingBottom: rHeight(2.5),
    paddingTop: rHeight(2.5),
    alignItems: "stretch",
  },
  tableShadow: {
    flex: 1,
    backgroundColor: "orange",
    borderRadius: 200,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  tableWrapper: {
    flex: 1,
    borderRadius: 200,
    overflow: "hidden",
  },
  tableRing: {
    flex: 1,
    padding: rHeight(2.5),
  },
  fabricWrapper: {
    flex: 1,
    borderRadius: 200,
    overflow: `hidden`,
  },
  tableFabric: {
    flex: 1,
  },
  tableContent: {
    flex: 1,
    overflow: "hidden",
  },
  innerRingWrapper: {
    height: `100%`,
    width: `100%`,
    position: `absolute`,
  },
  innerRing: {
    flex: 1,
    margin: rHeight(3),
    borderRadius: 200,
    borderWidth: rHeight(1),
    borderColor: `rgba(255, 255, 255, 0.05)`,
  },
})
