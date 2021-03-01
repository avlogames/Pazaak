import { createStore, combineReducers } from "redux"
import * as room from "src/lib/room"
import * as storage from "src/lib/storage"
import { OFFLINE_OPPONENT, OFFLINE_ROOM_CODE } from "src/config"

/**
 * Create Store
 */
export const store = createStore(
  combineReducers({
    pazaak: (state = {}, action) => {
      switch (action.type) {
        case "hydrate":
          return { ...action.value }
        default:
          return state
      }
    },
  })
)

/**
 * Create Fake Room
 */
export async function createFakeRoom() {
  const uuid = await storage.get("uuid")
  const singleRoom = room.create(OFFLINE_ROOM_CODE, uuid)
  const doubleRoom = room.addOpponent(singleRoom, OFFLINE_OPPONENT)
  hydrateStore(doubleRoom)
}

/**
 * Hydrate Store
 */
export function hydrateStore(value) {
  store.dispatch({ type: "hydrate", value })
}
