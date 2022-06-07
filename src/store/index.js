import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import appReducer from "./reducers"

const middlewares = [
  thunk
]


export default createStore(appReducer, applyMiddleware(...middlewares))
