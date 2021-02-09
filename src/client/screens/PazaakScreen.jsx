import React from "react"
import pathOr from "ramda.pathor"
import { Button, Text } from "react-native"
import Background from "src/client/atoms/Background"
import TableRing from "src/client/atoms/TableRing"
import OpponentSideDeck from "src/client/components/OpponentSideDeck"
import OpponentStack from "src/client/components/OpponentStack"
import PlayerStack from "src/client/components/PlayerStack"
import PlayerSideDeck from "src/client/components/PlayerSideDeck"
import OpponentDetails from "src/client/components/OpponentDetails"
import PlayerDetails from "src/client/components/PlayerDetails"
import EndTurnStand from "src/client/components/EndTurnStand"
import LoadingSpinner from "src/client/components/LoadingSpinner"
import useOnSnapshot from "src/client/hooks/useOnSnapshot"
import PopupModal from "src/client/atoms/PopupModal"

export default function PazaakScreen() {
  const [code, pazaak, uuid, quitMatch] = useOnSnapshot()
  const waiting = pathOr(true, ["waitingForOpponent"], pazaak)

  if (waiting) {
    return (
      <Background>
        <LoadingSpinner label={`WAITING FOR OPPONENT`}>
          <Button onPress={quitMatch} title="Go Back" />
        </LoadingSpinner>
      </Background>
    )
  }

  if (!code || !uuid || !pazaak) {
    return (
      <Background>
        <LoadingSpinner label={`Loading game data...`}>
          <Button onPress={quitMatch} title="Go Back" />
        </LoadingSpinner>
      </Background>
    )
  }

  if (code && uuid && pazaak) {
    const uoid = Object.keys(pazaak.players).find((k) => k !== uuid)
    const winner = pazaak.winner
    const gameOver = pazaak.gameOver
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
          quitMatch={quitMatch}
        />
        <TableRing>
          <OpponentSideDeck sideDeck={opponent.sideDeck} />
          <OpponentStack stack={opponent.stack} score={opponent.score} standing={opponentStanding} wins={opponent.wins} />
          <PlayerStack stack={player.stack} score={player.score} standing={playerStanding} wins={player.wins} />
          <PlayerSideDeck sideDeck={player.sideDeck} turn={playerTurn} uoid={uoid} />
        </TableRing>
        <PlayerDetails turn={playerTurn} name={player.name} avatar={player.avatar} credits={player.credits} />
        <EndTurnStand turn={playerTurn} playerStanding={playerStanding} opponentStanding={opponentStanding} uoid={uoid} />
        {gameOver && (
          <PopupModal>
            <Text>{`${winner} WINS!`}</Text>
            <Button title="Exit" onPress={quitMatch} />
          </PopupModal>
        )}
      </Background>
    )
  }
}
