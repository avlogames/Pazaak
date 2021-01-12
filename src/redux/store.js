export { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import audio from "src/redux/reducerAudio"
import pazaak from "src/redux/reducerPazaak"

const rootReducer = combineReducers({ audio, pazaak })
const store = createStore(rootReducer)

export default store
