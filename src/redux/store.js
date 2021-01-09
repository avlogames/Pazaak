import AsyncStorage from "@react-native-async-storage/async-storage"
export { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import pazaak from "src/redux/reducerPazaak"

const persistConfig = { key: "root", storage: AsyncStorage }
const rootReducer = combineReducers({ pazaak })
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export default store
