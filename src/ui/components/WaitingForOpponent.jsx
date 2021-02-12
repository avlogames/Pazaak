import React from "react"
import { Button } from "react-native"
import Background from "src/ui/atoms/Background"
import LoadingSpinner from "src/ui/components/LoadingSpinner"

export default function WaitingForOpponent({ quitMatch }) {
  return (
    <Background>
      <LoadingSpinner label={`WAITING FOR OPPONENT`}>
        <Button onPress={quitMatch} title="Go Back" />
      </LoadingSpinner>
    </Background>
  )
}
