import { applyMiddleware, compose, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import appReducer from "./reducers"

const middlewares = [
  thunk
]
const enhancer = (process.env.NODE_ENV === "development"
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) ?? compose
  : compose)(applyMiddleware(...middlewares))

export default createStore(appReducer, enhancer)
