import { createStore } from "redux"
export { Provider} from "react-redux"

const initialState = {
  gameCode: null
}

function reducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default createStore(reducer, initialState)
