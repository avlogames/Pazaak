import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import Redux from "src/lib/Redux"
import Storage from "src/lib/Storage"
import * as ai from "src/lib/ai"
import GameActions from "src/lib/GameActions"
import { OFFLINE_OPPONENT } from "src/config"

export default function useRandomMatch() {
  let lastPlayer = null
  const [uuid, setUuid] = useState(null)
  const { navigate } = useNavigation()
  const pazaak = useSelector((s) => s.pazaak)
  const ready = Object.keys(pazaak).length > 0 && uuid

  const aiLoop = async () => {
    const [move, combo] = await ai.determineMove(pazaak, uuid)

    switch (move) {
      case 0:
        return setTimeout(() => {
          GameActions.hit(pazaak, OFFLINE_OPPONENT, uuid, false)
          aiLoop()
        }, Math.floor(Math.random() * 2000))
      case 1:
        combo.arr.map(({ index }) => {
          GameActions.playSideDeckCard(pazaak, index, OFFLINE_OPPONENT, false)
        })
        return setTimeout(() => {
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
    setTimeout(() => Redux.createFakeRoom(), timeout)
    Storage.get("uuid").then((uuid) => setUuid(uuid))
  }, [])

  useEffect(() => {
    if (pazaak.activePlayer !== lastPlayer) {
      if (pazaak.activePlayer === OFFLINE_OPPONENT) aiLoop()
      lastPlayer = pazaak.activePlayer
    }
  }, [pazaak.activePlayer])

  const quit = async () => {
    Redux.hydrateStore({})
    Storage.remove("code")
    return navigate("choose_game")
  }

  return [pazaak, ready, uuid, quit]
}
