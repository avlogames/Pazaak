import { createStore, combineReducers } from "redux"
export { Provider } from "react-redux"
import audio from "src/redux/audio"
import pazaak from "src/redux/pazaak"

const rootReducer = combineReducers({ audio, pazaak })

export default createStore(rootReducer)
