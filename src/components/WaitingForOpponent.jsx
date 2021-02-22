import React from "react"
import { Button } from "react-native"
import Layout from "src/layouts/SpaceLayout"
import LoadingSpinner from "src/components/LoadingSpinner"

export default function WaitingForOpponent({ message, quit }) {
  return (
    <Layout>
      <LoadingSpinner label={message}>
        <Button onPress={quit} title="Go Back" />
      </LoadingSpinner>
    </Layout>
  )
}
