const initialAudioState = {
  muzak: null,
}

export default function audio(state = initialAudioState, action) {
  switch (action.type) {
    case "setMuzak":
      return { ...state, muzak: action.value }
    default:
      return state
  }
}
