import Player from "src/lib/Player"

class Room {
  static create = (code, uuid) => ({
    activePlayer: uuid,
    gameOver: false,
    players: { [uuid]: Player.create("man", true, "Dr. Colossus", uuid) },
    roomCode: code,
    standing: [],
    waitingForOpponent: true,
    winner: null,
  })
}

export default Room
