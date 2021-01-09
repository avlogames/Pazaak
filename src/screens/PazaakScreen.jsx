import React from "react"
import { useSelector } from "react-redux"
import Background from "src/atoms/Background"
import TableRing from "src/atoms/TableRing"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"
import OpponentDetails from "src/components/OpponentDetails"
import PlayerDetails from "src/components/PlayerDetails"
import EndTurnStand from "src/components/EndTurnStand"
import useOnSnapshot from "src/hooks/useOnSnapshot"

export default function PazaakScreen() {
  useOnSnapshot()
  const pazaak = useSelector((s) => s.pazaak)

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
