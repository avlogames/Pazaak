import { createStore, combineReducers } from "redux"
export { Provider } from "react-redux"
import audio from "src/redux/audio"

const rootReducer = combineReducers({ audio })

export default createStore(rootReducer)
