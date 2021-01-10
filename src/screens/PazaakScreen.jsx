import React from "react"
import pathOr from "ramda.pathor"
import { Button } from "react-native"
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
import LoadingSpinner from "src/components/LoadingSpinner"

export default function PazaakScreen() {
  const [code, pazaak, uuid, cancel] = useOnSnapshot()
  const waiting = pathOr(true, ["waitingForOpponent"], pazaak)

  if (waiting) {
    return (
      <Background>
        <LoadingSpinner label={`Waiting for Opponent`}>
          <Button onPress={cancel} title="Go Back" />
        </LoadingSpinner>
      </Background>
    )
  }

  if (!code || !uuid || !pazaak) {
    return (
      <Background>
        <LoadingSpinner label={`Loading game data...`}>
          <Button onPress={cancel} title="Go Back" />
        </LoadingSpinner>
      </Background>
    )
  }

  if (code && uuid && pazaak) {
    const player = pazaak.players[uuid]
    const opponent = Object.values(pazaak.players).find((o) => o.uuid !== uuid)
    const playerTurn = pazaak.activePlayer === player.uuid
    const opponentTurn = pazaak.activePlayer === opponent.uuid

    return (
      <Background>
        <OpponentDetails turn={opponentTurn} name={opponent.name} avatar={opponent.avatar} credits={opponent.credits} />
        <TableRing>
          <OpponentSideDeck sideDeck={opponent.sideDeck} />
          <OpponentStack stack={opponent.stack} score={opponent.score} />
          <PlayerStack stack={player.stack} score={player.score} />
          <PlayerSideDeck sideDeck={player.sideDeck} />
        </TableRing>
        <PlayerDetails turn={playerTurn} name={player.name} avatar={player.avatar} credits={player.credits} />
        <EndTurnStand turn={playerTurn} stand={player.stand} />
      </Background>
    )
  }
}
