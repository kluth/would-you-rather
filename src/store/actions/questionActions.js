import { ActionTypes } from ".";
import * as API from '../../_DATA'

export const getQuestions = async (dispatch, id) => {
    dispatch({ type: ActionTypes.GET_QUESTIONS });

    API._getQuestions()
        .then(questions => {
            let oldQuestions = Object.values(questions).filter(question => question.optionOne.votes.includes(id) || question.optionTwo.votes.includes(id))
            let newQuestions = Object.values(questions).filter(question => !oldQuestions.includes(question))
            dispatch({ type: ActionTypes.SET_QUESTIONS, payload: Object.values(questions) });
            dispatch({ type: ActionTypes.SET_OLD_QUESTIONS, payload: oldQuestions });
            dispatch({ type: ActionTypes.SET_NEW_QUESTIONS, payload: newQuestions });
        })
        .catch(err => {
            dispatch({ type: ActionTypes.FAILED_QUESTIONS, payload: err });
        });
}

export const saveQuestion = async (dispatch, question) => {
    dispatch({ type: ActionTypes.SAVE_QUESTION });

    API._saveQuestion(question)
        .then(question => {
            dispatch({ type: ActionTypes.SET_QUESTION, payload: question });
        })
        .catch(err => {
            dispatch({ type: ActionTypes.FAILED_QUESTION, payload: err });
        });
}

export const saveAnswer = async (dispatch, answer) => {
    dispatch({ type: ActionTypes.SAVE_ANSWER });

    API._saveQuestionAnswer(answer)
        .then(answer => {
            dispatch({ type: ActionTypes.SET_ANSWER, payload: answer });
        })
        .catch(err => {
            dispatch({ type: ActionTypes.FAILED_ANSWER, payload: err });
        });
}
