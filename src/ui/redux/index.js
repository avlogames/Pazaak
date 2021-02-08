export { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"

// Pazaak Reducer
function pazaak(state = {}, action) {
  switch (action.type) {
    case "hydrate":
      return { ...action.value }
    default:
      return state
  }
}

export default createStore(combineReducers({ pazaak }))
