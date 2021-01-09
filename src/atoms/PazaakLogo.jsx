import React from "react"
import { StyleSheet, Image } from "react-native"
import logo from "src/assets/pazaak.png"

export default function PazaakLogo() {
  return <Image style={styles.logo} source={logo} />
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 60,
  },
})
