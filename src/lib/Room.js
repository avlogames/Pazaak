import * as player from "src/lib/player"

export function create(code, uuid) {
  return {
    activePlayer: uuid,
    gameOver: false,
    players: { [uuid]: player.create("man", true, "Dr. Colossus", uuid) },
    roomCode: code,
    standing: [],
    waitingForOpponent: true,
    winner: null,
  }
}

export function addOpponent(room, uuid) {
  return {
    ...room,
    players: { ...room.players, [uuid]: player.create("woman", false, "Nibbler", uuid) },
    waitingForOpponent: false,
  }
}
