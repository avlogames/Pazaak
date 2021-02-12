import React from "react"
import pathOr from "ramda.pathor"
import { Button, Text } from "react-native"
import Background from "src/atoms/Background"
import TableRing from "src/atoms/TableRing"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"
import OpponentDetails from "src/components/OpponentDetails"
import PlayerDetails from "src/components/PlayerDetails"
import HitStand from "src/components/HitStand"
import useFriendMatch from "src/hooks/useFriendMatch"
import PopupModal from "src/atoms/PopupModal"
import WaitingForOpponent from "src/components/WaitingForOpponent"
import GameActions from "src/lib/GameActions"

export default function CustomMatch() {
  const [code, pazaak, uuid, quit] = useFriendMatch()
  const waiting = pathOr(true, ["waitingForOpponent"], pazaak)

  if (waiting) return <WaitingForOpponent message={`WAITING FOR OPPONENT`} quit={quit} />
  if (!code || !uuid || !pazaak) return <WaitingForOpponent message={`LOADING GAME DATA...`} quit={quit} />

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
    const stand = () => GameActions.stand(pazaak, uuid, uoid, true)
    const hit = () => GameActions.hit(pazaak, uuid, uoid, true)
    const playCard = (cardIndex) => GameActions.playSideDeckCard(pazaak, cardIndex, uuid, true)

    return (
      <Background>
        <OpponentDetails
          turn={opponentTurn}
          name={opponent.name}
          avatar={opponent.avatar}
          credits={opponent.credits}
          quit={quit}
        />
        <TableRing>
          <OpponentSideDeck sideDeck={opponent.sideDeck} />
          <OpponentStack stack={opponent.stack} score={opponent.score} standing={opponentStanding} wins={opponent.wins} />
          <PlayerStack stack={player.stack} score={player.score} standing={playerStanding} wins={player.wins} />
          <PlayerSideDeck playCard={playCard} sideDeck={player.sideDeck} turn={playerTurn} />
        </TableRing>
        <PlayerDetails turn={playerTurn} name={player.name} avatar={player.avatar} credits={player.credits} />
        <HitStand hit={hit} stand={stand} turn={playerTurn} />
        {gameOver && (
          <PopupModal>
            <Text>{`${pazaak.players[winner].name} WINS!`}</Text>
            <Button title="Exit" onPress={quit} />
          </PopupModal>
        )}
      </Background>
    )
  }
}
