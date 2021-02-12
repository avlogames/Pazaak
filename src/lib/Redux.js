import store from "src/api/redux"
import Room from "src/lib/Room"
import Storage from "src/lib/Storage"
import { OFFLINE_OPPONENT, OFFLINE_ROOM_CODE } from "src/config"

class Redux {
  createFakeRoom = async () => {
    const uuid = await Storage.get("uuid")
    const singleRoom = Room.create(OFFLINE_ROOM_CODE, uuid)
    const doubleRoom = Room.addOpponent(singleRoom, OFFLINE_OPPONENT)
    this.hydrateStore(doubleRoom)
  }

  hydrateStore = (value) => {
    store.dispatch({ type: "hydrate", value })
  }
}

export default new Redux()
