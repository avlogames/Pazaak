import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import updateDocument from "src/api/firebase/firestore/updateDocument"
import Storage from 'src/lib/Storage'
import { PLACEHOLDER } from "src/ui/config"

export default function usePlayCard() {
  const pazaak = useSelector((s) => s.pazaak)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    Storage.get("uuid").then((u) => setUuid(u))
  }, [])

  const playCard = async (cindex) => {
    const newPazaak = pazaak
    const player = newPazaak.players[uuid]
    const card = player.sideDeck[cindex]
    player.stack[player.stack.findIndex((o) => o.type === "placeholder")] = card
    player.score = player.stack.reduce((a, o) => (a += o.value), 0)
    player.sideDeck[cindex] = PLACEHOLDER
    newPazaak.players[uuid] = player
    return updateDocument(newPazaak)
  }

  return [playCard]
}
