import React from "react"
import { Text, Button } from "react-native"
import { OFFLINE_OPPONENT } from "src/config"
import useRandomMatch from "src/hooks/useRandomMatch"
import Layout from "src/layouts/BlueLayout"
import TableRing from "src/atoms/TableRing"
import OpponentSideDeck from "src/components/OpponentSideDeck"
import OpponentStack from "src/components/OpponentStack"
import PlayerStack from "src/components/PlayerStack"
import PlayerSideDeck from "src/components/PlayerSideDeck"
import OpponentDetails from "src/components/OpponentDetails"
import PlayerDetails from "src/components/PlayerDetails"
import HitStand from "src/components/HitStand"
import PopupModal from "src/atoms/PopupModal"
import WaitingForOpponent from "src/components/WaitingForOpponent"
import * as actions from "src/lib/actions"

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
    const stand = () => actions.stand(pazaak, uuid, uoid, false)
    const hit = () => actions.hit(pazaak, uuid, uoid, false)
    const playCard = (cardIndex) => actions.playSideDeckCard(pazaak, cardIndex, uuid, false)

    return (
      <Layout>
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
      </Layout>
    )
  }
}
