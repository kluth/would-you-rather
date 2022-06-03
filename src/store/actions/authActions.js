import { ActionTypes } from ".";
import * as API from '../../_DATA'

/* export const getUsers = async (dispatch) => {
    dispatch({ type: ActionTypes.GET_USERS });

    API._getUsers()
        .then(users => {
            dispatch({ type: ActionTypes.SET_USERS, payload: Object.values(users) });
        })
        .catch(err => {
            dispatch({ type: ActionTypes.FAILED_USERS, payload: err });
        });
} */

export const login = async (dispatch, userLogin) => {
    dispatch({ type: ActionTypes.LOGIN_USER })

    API._getUsers()
        .then(users => {
            let user = Object.values(users).find(user => user.id === userLogin.id && user.password === userLogin.password)
            if (user) {
                dispatch({ type: ActionTypes.SET_USER_LOGIN, payload: user })
            } else {
                dispatch({ type: ActionTypes.FAILED_USER_LOGIN })
            }
        })
        .catch(err => {
            dispatch({ type: ActionTypes.FAILED_USER_LOGIN, payload: err })
        })
}
