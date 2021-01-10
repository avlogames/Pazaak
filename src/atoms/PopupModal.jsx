import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Modal, Text, View } from "react-native"

export default function PopupModal() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      // onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <LinearGradient colors={["#FF6D3A", "#FF573F", "#FF4342", "#FD0043"]} style={styles.modalRing} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,0.4)`,
    flexDirection: `row`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  modalContainer: {
    height: 200,
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 15,
    backgroundColor: `red`,
    overflow: `hidden`
  },
  modalRing: {
    flex: 1,
  },
})
