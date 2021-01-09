const initialState = {}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "newGame":
      return { ...action.value }
    default:
      return state
  }
}
