import React from "react"
import pathOr from "ramda.pathor"

import { Text } from "react-native"
import Background from "src/atoms/Background"
import TableRing from "src/atoms/TableRing"
import useOnSnapshot from "src/hooks/useOnSnapshot"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"
import OpponentDetails from "src/components/OpponentDetails"
import PlayerDetails from "src/components/PlayerDetails"
import EndTurnStand from "src/components/EndTurnStand"
import WaitingForOpponent from "src/components/WaitingForOpponent"

export default function PazaakScreen() {
  const [code, pazaak, uuid] = useOnSnapshot()
  const waiting = pathOr(true, ["waitingForOpponent"], pazaak)

  if (waiting) {
    return (
      <Background>
        <WaitingForOpponent />
      </Background>
    )
  }

  if (!code || !uuid || !pazaak) {
    return (
      <Background>
        <Text>Loading...</Text>
      </Background>
    )
  }

  if (code && uuid && pazaak) {
    return (
      <Background>
        <OpponentDetails />
        <TableRing>
          <OpponentSideDeck />
          <OpponentStack />
          <PlayerStack />
          <PlayerSideDeck />
        </TableRing>
        <PlayerDetails />
        <EndTurnStand />
      </Background>
    )
  }
}
