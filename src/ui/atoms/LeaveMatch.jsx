import React from 'react'
import { StyleSheet, Image } from 'react-native'
import leaveMatch from 'src/ui/assets/images/leave-match.png'

export default function LeaveMatch() {
  return <Image style={styles.leave} source={leaveMatch} />
}

const styles = StyleSheet.create({
  leave: {
    marginTop: -3,
    height: 35,
    width: 60
  }
})