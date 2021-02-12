import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Modal, View } from "react-native"

export default function PopupModal({ children, visible = true }) {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <LinearGradient colors={["#FF6D3A", "#FF573F", "#FF4342", "#FD0043"]} style={styles.modalRing}>
            <View style={styles.fabricWrapper}>
              <LinearGradient style={styles.fabric} colors={["#24305B", "#1A244B"]} style={styles.modalRing}>
                <View style={styles.content}>{children}</View>
              </LinearGradient>
            </View>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,0.6)`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingRight: 20,
    paddingLeft: 20,
  },
  modalContainer: {
    width: `100%`,
    minHeight: 200,
    borderRadius: 15,
    backgroundColor: `red`,
    overflow: `hidden`,
  },
  modalRing: {
    flex: 1,
  },
  fabricWrapper: {
    margin: 2,
    flex: 1,
    borderRadius: 15,
    overflow: `hidden`,
  },
  fabric: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
})
