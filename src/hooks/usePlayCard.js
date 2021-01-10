import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import updateDocument from "src/api/updateDocument"
import getAsyncStorage from "src/helpers/getAsyncStorage"
import { PLACEHOLDER } from "src/constants"

export default function usePlayCard() {
  const pazaak = useSelector((s) => s.pazaak)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    getAsyncStorage("uuid").then((u) => setUuid(u))
  }, [])

  const playCard = async (cindex) => {
    const newPazaak = pazaak
    const pindex = newPazaak.players.findIndex((p) => p.uuid === uuid)
    const player = newPazaak.players[pindex]
    const card = player.sideDeck[cindex]
    player.stack[player.stack.findIndex((o) => o.type === "placeholder")] = card
    player.score = player.stack.reduce((a, o) => (a += o.value), 0)
    player.sideDeck[cindex] = PLACEHOLDER
    newPazaak.players[pindex] = player
    return updateDocument(newPazaak)
  }

  return [playCard]
}