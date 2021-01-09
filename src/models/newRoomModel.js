export default function newRoomModel(code, uuid) {
  return {
    activePlayer: uuid,
    players: [],
    roomCode: code,
    waitingForOpponent: true,
  }
}
