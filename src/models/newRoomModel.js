export default function newRoomModel(code, uuid) {
  return {
    activePlayer: uuid,
    gameOver: false,
    players: {},
    roomCode: code,
    standing: [],
    waitingForOpponent: true,
  }
}
