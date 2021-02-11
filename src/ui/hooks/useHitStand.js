import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Storage from "src/lib/Storage"
import GameActions from "src/lib/GameActions"

export default function useHitStand(uoid) {
  const pazaak = useSelector((s) => s.pazaak)
  const [uuid, setUuid] = useState(null)

  useEffect(() => {
    Storage.get("uuid").then((u) => setUuid(u))
  }, [])

  const stand = () => {
    return GameActions.stand(pazaak, uuid, uoid, true)
  }

  const hitMe = () => {
    return GameActions.hit(pazaak, uuid, uoid, true)
  }

  return [hitMe, stand]
}
