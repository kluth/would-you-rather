import { ActionTypes } from "../actions"

const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_USER:
            return {
                ...state
            }
        case ActionTypes.SET_USER_LOGIN:
            return action.payload
        case ActionTypes.FAILED_USER_LOGIN:
            return {
                ...state
            }
        default:
            return { ...state }
    }
}

export default reducer