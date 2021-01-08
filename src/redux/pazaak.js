import getSideDeck from "src/library/getSideDeck"
import initializeStack from "src/library/initializeStack"

const initialState = {
  currentMove: "002",
  opponentAvatar: "",
  opponentStack: initializeStack(),
  opponentCredits: 0,
  opponentName: "",
  opponentStand: false,
  opponentScore: 0,
  opponentSideDeck: getSideDeck(),
  opponentUserId: "001",
  opponentWins: 0,
  playerAvatar: "",
  playerStack: initializeStack(),
  playerCredits: 0,
  playerName: "",
  playerStand: false,
  playerScore: 0,
  playerSideDeck: getSideDeck(),
  playerUserId: "002",
  playerWins: 0,
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "PAZAAK":
      return { ...state, ...action.value }
    default:
      return state
  }
}
