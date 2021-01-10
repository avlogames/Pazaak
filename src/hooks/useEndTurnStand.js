import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import updateDocument from "src/api/updateDocument"
import dealCard from "src/helpers/dealCard"
import getAsyncStorage from "src/helpers/getAsyncStorage"

export default function useEndTurnStand(uoid) {
  const pazaak = useSelector((s) => s.pazaak)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    getAsyncStorage("uuid").then((u) => setUuid(u))
  }, [])

  const stand = () => {
    if (!pazaak.standing.includes(uuid)) {
      const newPazzak = pazaak
      newPazzak.standing.push(uuid)
      updateDocument(newPazzak)
    }
  }

  const endTurn = () => {
    const okey = Object.keys(pazaak.players).find((o) => o.uuid !== uuid)
    if (!pazaak.standing.includes(okey)) {
      const newPazzak = pazaak
      const newCard = dealCard()
      const oStack = newPazzak.players[okey].stack
      oStack[oStack.findIndex((o) => o.type === "placeholder")] = newCard
      newPazzak.players[okey].score = oStack.reduce((a, v) => (a + v.value), 0)
      updateDocument(newPazzak)
    }
  }

  return [endTurn, stand]
}
