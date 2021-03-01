import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import * as actions from "src/lib/actions"
import * as ai from "src/lib/ai"
import * as redux from "src/lib/redux"
import * as storage from "src/lib/storage"
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
          actions.hit(pazaak, OFFLINE_OPPONENT, uuid, false)
          aiLoop()
        }, Math.floor(Math.random() * 2000))
      case 1:
        combo.arr.map(({ index }) => {
          actions.playSideDeckCard(pazaak, index, OFFLINE_OPPONENT, false)
        })
        return setTimeout(() => {
          aiLoop()
        }, Math.floor(Math.random() * 2000))
      case 2:
      default:
        return setTimeout(() => {
          actions.stand(pazaak, OFFLINE_OPPONENT, uuid, false)
        }, Math.floor(Math.random() * 2000))
    }
  }

  useEffect(() => {
    const timeout = Math.floor(Math.random() * 5000)
    setTimeout(() => redux.createFakeRoom(), timeout)
    storage.get("uuid").then((uuid) => setUuid(uuid))
  }, [])

  useEffect(() => {
    if (pazaak.activePlayer !== lastPlayer) {
      if (pazaak.activePlayer === OFFLINE_OPPONENT) aiLoop()
      lastPlayer = pazaak.activePlayer
    }
  }, [pazaak.activePlayer])

  const quit = async () => {
    redux.hydrateStore({})
    storage.remove("code")
    return navigate("choose_game")
  }

  return [pazaak, ready, uuid, quit]
}
