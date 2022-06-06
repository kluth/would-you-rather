import { combineReducers } from "redux"
import userReducer from "./userReducer"
import questionReducer from "./questionReducer"
import authReducer from "./authReducer"

const rootReducer = combineReducers({
  users: userReducer,
  questions: questionReducer,
  auth: authReducer
})

export default rootReducer
