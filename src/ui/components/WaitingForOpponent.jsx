import React from "react"
import { Button } from "react-native"
import Background from "src/ui/atoms/Background"
import LoadingSpinner from "src/ui/components/LoadingSpinner"

export default function WaitingForOpponent({ message, quitMatch }) {
  return (
    <Background>
      <LoadingSpinner label={message}>
        <Button onPress={quitMatch} title="Go Back" />
      </LoadingSpinner>
    </Background>
  )
}
