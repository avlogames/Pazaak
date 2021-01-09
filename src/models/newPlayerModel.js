import initializeSideDeck from "src/helpers/initializeSideDeck"
import initializeStack from "src/helpers/initializeStack"

export default function newPlayerModel(avatar, name, uuid) {
  return {
    avatar,
    credits: 0,
    name,
    score: 0,
    sideDeck: initializeSideDeck(),
    stack: initializeStack(),
    stand: false,
    uuid,
    wins: 0,
  }
}
