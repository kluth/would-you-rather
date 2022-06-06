import { ActionTypes } from "../actions"

export const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_QUESTIONS:
      return {
        ...state,
      }
    case ActionTypes.SET_QUESTIONS:
      return action.payload
    case ActionTypes.SET_OLD_QUESTIONS:
      return {
        ...state,
        old: action.payload
      }
    case ActionTypes.SET_NEW_QUESTIONS:
      return {
        ...state,
        new: action.payload
      }
    default:
      return { ...state }
  }
}

export default reducer
