export default function reducerPazaak(state = {}, action) {
  switch (action.type) {
    case "hydrate":
      return { ...action.value }
    default:
      return state
  }
}
