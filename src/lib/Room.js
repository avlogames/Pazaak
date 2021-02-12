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

  static addOpponent = (room, uuid) => ({
    ...room,
    players: { ...room.players, [uuid]: Player.create("woman", false, "Nibbler", uuid) },
    waitingForOpponent: false,
  })
}

export default Room
