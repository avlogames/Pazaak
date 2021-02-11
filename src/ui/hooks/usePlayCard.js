import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Storage from "src/lib/Storage"
import GameActions from "src/lib/GameActions"

export default function usePlayCard() {
  const pazaak = useSelector((s) => s.pazaak)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    Storage.get("uuid").then((u) => setUuid(u))
  }, [])

  const playCard = async (cardIndex) => {
    return GameActions.playSideDeckCard(pazaak, cardIndex, uuid)
  }

  return [playCard]
}
