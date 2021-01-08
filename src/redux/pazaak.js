import getSideDeck from "src/library/getSideDeck"
import initializeStack from "src/library/initializeStack"

const playerStack = initializeStack(true)
const playerScore = playerStack.reduce((acc, val) => (acc += val.value), 0)

const initialState = {
  activeTurn: "001",
  opponentAvatar: "src/assets/fat-man.jpg",
  opponentStack: initializeStack(),
  opponentCredits: 0,
  opponentName: "Madame Burger",
  opponentStand: false,
  opponentScore: 0,
  opponentSideDeck: getSideDeck(),
  opponentUserId: "001",
  opponentWins: 0,
  playerAvatar: "src/assets/fat-woman.jpg",
  playerStack,
  playerCredits: 0,
  playerName: "Dr. Sex",
  playerStand: false,
  playerScore,
  playerSideDeck: getSideDeck(),
  playerUserId: "002",
  playerWins: 0,
  ready: false,
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "PAZAAK":
      return { ...state, ...action.value }

    case "player-play-card":
      return {
        ...state,
        playerSideDeck: action.sideDeck,
        playerStack: action.stack,
        playerScore: state.playerStack.reduce((acc, val) => (acc += val.value), 0),
      }

    case "system-deal-card":
      if (action.participant === "player") {
        return { ...state, playerStack: action.stack }
      }
      return { ...state, opponentStack: action.stack }

    default:
      return state
  }
}
