import React from "react"
import { Button } from "react-native"
import BackgroundSplash from "src/atoms/BackgroundSplash"
import LoadingSpinner from "src/components/LoadingSpinner"

export default function WaitingForOpponent({ message, quit }) {
  return (
    <BackgroundSplash>
      <LoadingSpinner label={message}>
        <Button onPress={quit} title="Go Back" />
      </LoadingSpinner>
    </BackgroundSplash>
  )
}
