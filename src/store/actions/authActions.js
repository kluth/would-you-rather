import { ActionTypes } from ".";
import * as API from '../../_DATA'

export const login = async (dispatch, userLogin) => {
    dispatch({ type: ActionTypes.LOGIN_USER })

    API._getUsers()
        .then(users => {
            let user = Object.values(users).find(user => user.id === userLogin.id && user.password === userLogin.password)
            if (user) {
                dispatch({ type: ActionTypes.SET_USER_LOGIN, payload: user })
                dispatch({ type: ActionTypes.GET_QUESTIONS })
            } else {
                dispatch({ type: ActionTypes.FAILED_USER_LOGIN })
            }
        })
        .catch(err => {
            dispatch({ type: ActionTypes.FAILED_USER_LOGIN, payload: err })
        })
}
