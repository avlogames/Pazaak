export { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import pazaak from "src/api/redux/reducerPazaak"

const rootReducer = combineReducers({ pazaak })
const store = createStore(rootReducer)

export default store
