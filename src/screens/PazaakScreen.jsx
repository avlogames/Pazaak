import React from "react"
import pathOr from "ramda.pathor"
import { Button } from "react-native"
import Background from "src/atoms/Background"
import TableRing from "src/atoms/TableRing"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"
import OpponentDetails from "src/components/OpponentDetails"
import PlayerDetails from "src/components/PlayerDetails"
import EndTurnStand from "src/components/EndTurnStand"
import LoadingSpinner from "src/components/LoadingSpinner"
import useOnSnapshot from "src/hooks/useOnSnapshot"
import PopupModal from "src/atoms/PopupModal"

export default function PazaakScreen() {
  const [code, pazaak, uuid, cancel] = useOnSnapshot()
  const waiting = pathOr(true, ["waitingForOpponent"], pazaak)

  if (waiting) {
    return (
      <Background>
        <LoadingSpinner label={`WAITING FOR OPPONENT`}>
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
    const uoid = Object.keys(pazaak.players).find((k) => k !== uuid)
    const player = pazaak.players[uuid]
    const opponent = pazaak.players[uoid]
    const playerTurn = pazaak.activePlayer === player.uuid
    const opponentTurn = pazaak.activePlayer === opponent.uuid
    const playerStanding = pazaak.standing.includes(uuid)
    const opponentStanding = pazaak.standing.includes(uoid)

    return (
      <Background>
        <OpponentDetails
          turn={opponentTurn}
          name={opponent.name}
          avatar={opponent.avatar}
          credits={opponent.credits}
          cancel={cancel}
        />
        <TableRing>
          <OpponentSideDeck sideDeck={opponent.sideDeck} />
          <OpponentStack stack={opponent.stack} score={opponent.score} standing={opponentStanding} wins={opponent.wins} />
          <PlayerStack stack={player.stack} score={player.score} standing={playerStanding} wins={player.wins} />
          <PlayerSideDeck sideDeck={player.sideDeck} turn={playerTurn} uoid={uoid} />
        </TableRing>
        <PlayerDetails turn={playerTurn} name={player.name} avatar={player.avatar} credits={player.credits} />
        {/* <EndTurnStand turn={playerTurn} playerStanding={playerStanding} opponentStanding={opponentStanding} uoid={uoid} /> */}
        {/* <PopupModal ></PopupModal> */}
      </Background>
    )
  }
}
