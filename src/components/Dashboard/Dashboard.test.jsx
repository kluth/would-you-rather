import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import {
  axe,
  toHaveNoViolations
} from 'jest-axe'

import Dashboard from './'
import rootReducer from '../../store/reducers'
import { initialState as questionState } from '../../store/reducers/questionReducer'


expect.extend(toHaveNoViolations)

let store = createStore(rootReducer, questionState)

const renderWithProvider = (ui, { reduxState } = {}) => {
  store = createStore(rootReducer, reduxState || questionState)
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>)
}

describe('Dashboard', () => {
    
    it('should have no a11y violations with questions', async () => {
        const { container } = renderWithProvider(<Dashboard />, {
            reduxState: {
                questions: [
                    {
                        id: 1,
                        optionOne: {
                            votes: [],
                            text: 'test'
                        },
                        optionTwo: {
                            votes: [],
                            text: 'test'
                        }
                    },
                    {
                        id: 2,
                        optionOne: {
                            votes: [],
                            text: 'test'
                        },
                        optionTwo: {
                            votes: [],
                            text: 'test'
                        }
                    }
                ]
            }
            })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    })
    
    it('should display the no questions message when there are no questions in the database', () => {
        renderWithProvider(<Dashboard />, {
            reduxState: {
                questions: []
            }
        })
        expect(screen.getByText('No questions yet')).toBeInTheDocument()
    })

    it('should have no a11y violations without questions', async () => {
    const { container } = renderWithProvider(<Dashboard />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
    })

    // if there are new questions, they should be displayed
    it('should display the new questions when there are new questions in the database', () => {
        renderWithProvider(<Dashboard />, {
            reduxState: {
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
                            }
                        },
                        {
                            id: 2,
                            optionOne: {
                                votes: [],
                                text: 'test'
                            },
                            optionTwo: {
                                votes: [],
                                text: 'test'
                            }
                        }
                    ]
                }
            }
        })
        expect(screen.getAllByText('New Questions',
            { exact: false })).toHaveLength(2)
    })

    it('should display the old questions when there are old questions in the database', () => {
        renderWithProvider(<Dashboard />, {
            reduxState: {
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
                            }
                        },
                        {
                            id: 2,
                            optionOne: {
                                votes: [],
                                text: 'test'
                            },
                            optionTwo: {
                                votes: [],
                                text: 'test'
                            }
                        }
                    ]
                }
            }
        })
        expect(screen.getAllByText('Old Questions',
            { exact: false })).toHaveLength(2)
    })

    // when option one has more votes than option two, it should be displayed as the winner
    it('should display the first option as winner of the old question when it has more votes', () => {
        renderWithProvider(<Dashboard />, {
            reduxState: {
                questions: {
                    old: [
                        {
                            id: 1,
                            optionOne: {
                                votes: [1, 2, 3, 4, 5],
                                text: 'test 1'
                            },
                            optionTwo: {
                                votes: [1, 2, 3, 4],
                                text: 'test 2'
                            }
                        }
                    ]
                }
            }
        })
        expect(screen.getByText(`test 1 is winning by 5 votes over 4 votes for test 2`,
            { exact: false })).toBeInTheDocument()
    })

    // when option two has more votes than option one, it should be displayed as the winner
    it('should display the second option as winner of the old question when it has more votes', () => {
        renderWithProvider(<Dashboard />, {
            reduxState: {
                questions: {
                    old: [
                        {
                            id: 1,
                            optionOne: {
                                votes: [1, 2, 3, 4],
                                text: 'test 1'
                            },
                            optionTwo: {
                                votes: [1, 2, 3, 4, 5],
                                text: 'test 2'
                            }
                        }
                    ]
                }
            }
        })
        expect(screen.getByText(`test 2 is winning by 5 votes over 4 votes for test 1`,
            { exact: false })).toBeInTheDocument()
    })

    // when option one has the same number of votes as option two, it should be displayed as a tie
    it('should display the first option as a tie of the old question when it has the same number of votes', () => {
        renderWithProvider(<Dashboard />, {
            reduxState: {
                questions: {
                    old: [
                        {
                            id: 1,
                            optionOne: {
                                votes: [1, 2, 3, 4],
                                text: 'test 1'
                            },
                            optionTwo: {
                                votes: [1, 2, 3, 4],
                                text: 'test 2'
                            }
                        }
                    ]
                }
            }
        })
        expect(screen.getByText(`It's a tie! Both test 1 and test 2 have 4 votes each.`,
            { exact: false })).toBeInTheDocument()
    })
});