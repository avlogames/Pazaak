import React from "react"
import Background from "src/atoms/Background"
import TableRing from "src/atoms/TableRing"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"
import OpponentDetails from "src/components/OpponentDetails"
import PlayerDetails from "src/components/PlayerDetails"
import EndTurnStand from "src/components/EndTurnStand"

export default function PazaakScreen() {
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
