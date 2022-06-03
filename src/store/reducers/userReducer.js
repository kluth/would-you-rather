import { ActionTypes } from "../actions"

export const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state
      }
    case ActionTypes.SET_USERS:
      return action.payload

    default:
      return { ...state }
  }
}

export default reducer
