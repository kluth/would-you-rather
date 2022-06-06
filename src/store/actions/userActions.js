import { ActionTypes } from ".";
import * as API from '../../_DATA'

export const getUsers = async (dispatch) => {
    dispatch({ type: ActionTypes.GET_USERS });

    API._getUsers()
        .then(users => {
            dispatch({ type: ActionTypes.SET_USERS, payload: Object.values(users) });
        })
        .catch(err => {
            dispatch({ type: ActionTypes.FAILED_USERS, payload: err });
        });
}