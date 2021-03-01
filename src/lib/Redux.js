import store from "src/api/redux"
import * as room from "src/lib/room"
import * as storage from "src/lib/storage"
import { OFFLINE_OPPONENT, OFFLINE_ROOM_CODE } from "src/config"

/**
 * Create Fake Room
 */
export async function createFakeRoom() {
  const uuid = await storage.get("uuid")
  const singleRoom = room.create(OFFLINE_ROOM_CODE, uuid)
  const doubleRoom = room.addOpponent(singleRoom, OFFLINE_OPPONENT)
  this.hydrateStore(doubleRoom)
}

/**
 * Hydrate Store
 */
export function hydrateStore(value) {
  store.dispatch({ type: "hydrate", value })
}
