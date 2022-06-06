import rootReducer from './reducers'
import * as API from '../_DATA'


API._getQuestions = jest.fn()
API._getUsers = jest.fn()


describe('Redux Reducers', () => {
    describe('Questions Reducer', () => {
        it('should return the initial state', () => {
            expect(rootReducer({}, {})).toEqual({
                questions: {},
                users: {},
                auth: {}
            })
        })
        it('should handle GET_QUESTIONS', () => {
            expect(
                rootReducer({}, {
                    type: 'GET_QUESTIONS'
                })
            ).toEqual({
                questions: {},
                users: {},
                auth: {},
            })
        })
        it('should handle SET_QUESTIONS', () => {
            expect(
                rootReducer({}, {
                    type: 'SET_QUESTIONS',
                    payload: [{
                        questions: [{
                            id: 1,
                            optionOne: {
                                votes: [],
                                text: 'test'
                            },
                            optionTwo: {
                                votes: [],
                                text: 'test'
                            },
                        }]
                    }]
                })
            ).toEqual({
                questions: [{
                    questions: [{
                        id: 1,
                        optionOne: {
                            votes: [],
                            text: 'test'
                        },
                        optionTwo: {
                            votes: [],
                            text: 'test'
                        },
                    }],
                }
                ],
                users: {},
                auth: {},
            })
        })
        it('should handle SET_OLD_QUESTIONS', () => {
            expect(
                rootReducer({}, {
                    type: 'SET_OLD_QUESTIONS',
                    payload: [{

                        id: 1,
                        optionOne: {
                            votes: [],
                            text: 'test'
                        },
                        optionTwo: {
                            votes: [],
                            text: 'test'
                        },
                    }]
                })
            ).toEqual({
                questions: {
                    old: [
                        {
                            id: 1,
                            optionOne: {
                                votes: [],
                                text: 'test'
                            },
                            optionTwo: {
                                votes: [],
                                text: 'test'
                            },
                        }
                    ]
                },
                users: {},
                auth: {},
            })
        })
        it('should handle SET_NEW_QUESTIONS', () => {
            expect(
                rootReducer({}, {
                    type: 'SET_NEW_QUESTIONS',
                    payload: [{

                        id: 1,
                        optionOne: {
                            votes: [],
                            text: 'test'
                        },
                        optionTwo: {
                            votes: [],
                            text: 'test'
                        },
                    }]
                })
            ).toEqual({
                questions: {
                    new: [
                        {
                            id: 1,
                            optionOne: {
                                votes: [],
                                text: 'test'
                            },
                            optionTwo: {
                                votes: [],
                                text: 'test'
                            },
                        }
                    ]
                },
                users: {},
                auth: {},
            })
        })
    })
})
