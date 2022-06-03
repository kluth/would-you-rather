export const GET_RANDOM_QUOTE = "GET_RANDOM_QUOTE"
export const SET_RANDOM_QUOTE = "SET_RANDOM_QUOTE"
export const FAILED_RANDOM_QUOTE = "FAILED_RANDOM_QUOTE"


// Compare this snippet from src\store\actions\quoteActions.js:
// import { ActionTypes } from "."
//
// // EXAMPLE HOW TO USE ACTION
// export const getRandomQuote = (dispatch) => {
//   dispatch({ type: ActionTypes.GET_RANDOM_QUOTE })
//
//   fetch("http://api.quotable.io/random")
//     .then(response => response.json())
//     .then(data => {
//       dispatch({ type: ActionTypes.SET_RANDOM_QUOTE, payload: data })
//     })
//     .catch(error => {
//       dispatch({ type: ActionTypes.FAILED_RANDOM_QUOTE, payload: error })
//     })
// }
//
// export const setRandomQuote = (dispatch, payload) => {
//   dispatch({ type: ActionTypes.SET_RANDOM_QUOTE, payload })
// }
//
// export const failedRandomQuote = (dispatch, payload) => {
//   dispatch({ type: ActionTypes.FAILED_RANDOM_QUOTE, payload })
// }
//

export const GET_USER = 'GET_USER'
export const SET_USER = 'SET_USER'
export const FAILED_USER = 'FAILED_USER'

export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'
export const FAILED_USERS = 'FAILED_USERS'

export const LOGIN_USER = 'LOGIN_USER'
export const SET_USER_LOGIN = 'SET_USER_LOGIN'
export const FAILED_USER_LOGIN = 'FAILED_USER_LOGIN'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const FAILED_QUESTIONS = 'FAILED_QUESTIONS'

export const SET_OLD_QUESTIONS = 'SET_OLD_QUESTIONS'
export const SET_NEW_QUESTIONS = 'SET_NEW_QUESTIONS'

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SET_QUESTION = 'SET_QUESTION'
export const FAILED_QUESTION = 'FAILED_QUESTION'

export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SET_ANSWER = 'SET_ANSWER'
export const FAILED_ANSWER = 'FAILED_ANSWER'