import React from "react"
import TableRing from "src/atoms/TableRing"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"

export default function PazaakTable() {
  return (
    <TableRing>
      <OpponentSideDeck />
      <OpponentStack />
      <PlayerStack />
      <PlayerSideDeck />
    </TableRing>
  )
}
