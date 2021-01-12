const initialState = {}

export default function reducerAudio(state = initialState, action) {
  switch (action.type) {
    case "audio":
      return { ...state, [action.key]: action.value }
    default:
      return state
  }
}
