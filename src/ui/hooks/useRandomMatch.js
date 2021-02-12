import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Redux from "src/lib/Redux"
import Storage from "src/lib/Storage"
import AiOpponent from "src/lib/AiOpponent"
import GameActions from "src/lib/GameActions"
import { OFFLINE_OPPONENT } from "src/ui/config"

export default function useRandomMatch() {
  const [uuid, setUuid] = useState(null)
  let lastPlayer = null
  const pazaak = useSelector((s) => s.pazaak)
  const ready = Object.keys(pazaak).length > 0 && uuid

  const aiLoop = async () => {
    const move = await AiOpponent.determineMove(pazaak, uuid)
    console.log(move)

    switch (move) {
      case 0:
        return setTimeout(() => {
          GameActions.hit(pazaak, OFFLINE_OPPONENT, uuid, false)
          aiLoop()
        }, Math.floor(Math.random() * 2000))
      case 1:
        return setTimeout(() => {
          GameActions.playSideDeckCard(pazaak, 0, OFFLINE_OPPONENT, false)
          aiLoop()
        }, Math.floor(Math.random() * 2000))
      case 2:
      default:
        return setTimeout(() => {
          GameActions.stand(pazaak, OFFLINE_OPPONENT, uuid, false)
        }, Math.floor(Math.random() * 2000))
    }
  }

  useEffect(() => {
    const timeout = Math.floor(Math.random() * 5000)
    setTimeout(() => Redux.createFakeRoom(), 0)
    Storage.get("uuid").then((uuid) => setUuid(uuid))
  }, [])

  useEffect(() => {
    if (pazaak.activePlayer !== lastPlayer) {
      if (pazaak.activePlayer === OFFLINE_OPPONENT) {
        console.log("POO")
        aiLoop()
      }
      lastPlayer = pazaak.activePlayer
    }
  }, [pazaak.activePlayer])

  const quit = async () => {
    Firestore.deleteRoom(code)
    Storage.remove("code")
    return navigate("enter_room_code")
  }

  return [pazaak, ready, uuid, quit]
}
