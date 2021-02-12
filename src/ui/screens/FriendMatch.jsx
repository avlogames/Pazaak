import React from "react"
import pathOr from "ramda.pathor"
import { Button, Text } from "react-native"
import Background from "src/ui/atoms/Background"
import TableRing from "src/ui/atoms/TableRing"
import OpponentSideDeck from "src/ui/components/OpponentSideDeck"
import OpponentStack from "src/ui/components/OpponentStack"
import PlayerStack from "src/ui/components/PlayerStack"
import PlayerSideDeck from "src/ui/components/PlayerSideDeck"
import OpponentDetails from "src/ui/components/OpponentDetails"
import PlayerDetails from "src/ui/components/PlayerDetails"
import EndTurnStand from "src/ui/components/EndTurnStand"
import useFriendMatch from "src/ui/hooks/useFriendMatch"
import PopupModal from "src/ui/atoms/PopupModal"
import WaitingForOpponent from "src/ui/components/WaitingForOpponent"

export default function CustomMatch() {
  const [code, pazaak, uuid, quitMatch] = useFriendMatch()
  const waiting = pathOr(true, ["waitingForOpponent"], pazaak)

  if (waiting) return <WaitingForOpponent message={`WAITING FOR OPPONENT`} quitMatch={quitMatch} />
  if (!code || !uuid || !pazaak) return <WaitingForOpponent message={`LOADING GAME DATA...`} quitMatch={quitMatch} />

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
            <Text>{`${pazaak.players[winner].name} WINS!`}</Text>
            <Button title="Exit" onPress={quitMatch} />
          </PopupModal>
        )}
      </Background>
    )
  }
}
