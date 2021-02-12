import React from "react"
import { OFFLINE_OPPONENT } from "src/ui/config"
import useRandomMatch from "src/ui/hooks/useRandomMatch"
import Background from "src/ui/atoms/Background"
import TableRing from "src/ui/atoms/TableRing"
import OpponentSideDeck from "src/ui/components/OpponentSideDeck"
import OpponentStack from "src/ui/components/OpponentStack"
import PlayerStack from "src/ui/components/PlayerStack"
import PlayerSideDeck from "src/ui/components/PlayerSideDeck"
import OpponentDetails from "src/ui/components/OpponentDetails"
import PlayerDetails from "src/ui/components/PlayerDetails"
import HitStand from "src/ui/components/HitStand"
import PopupModal from "src/ui/atoms/PopupModal"
import WaitingForOpponent from "src/ui/components/WaitingForOpponent"
import GameActions from "src/lib/GameActions"

export default function RandomMatch() {
  const [pazaak, ready, uuid, quit] = useRandomMatch()

  if (!ready) return <WaitingForOpponent message={`WAITING FOR OPPONENT`} quit={quit} />

  if (ready) {
    const uoid = OFFLINE_OPPONENT
    const winner = pazaak.winner
    const gameOver = pazaak.gameOver
    const player = pazaak.players[uuid]
    const opponent = pazaak.players[uoid]
    const playerTurn = pazaak.activePlayer === player.uuid
    const opponentTurn = pazaak.activePlayer === opponent.uuid
    const playerStanding = pazaak.standing.includes(uuid)
    const opponentStanding = pazaak.standing.includes(uoid)
    const stand = () => GameActions.stand(pazaak, uuid, uoid, false)
    const hit = () => GameActions.hit(pazaak, uuid, uoid, false)
    const playCard = (cardIndex) => GameActions.playSideDeckCard(pazaak, cardIndex, uuid, false)
    
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
