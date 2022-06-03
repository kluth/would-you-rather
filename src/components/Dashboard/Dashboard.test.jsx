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
    
    it('should display the questions in a grid', () => {
        renderWithProvider(<Dashboard />, {
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
        expect(screen.getByTestId('question-grid')).toBeInTheDocument()
    })

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

    it('should link to the question page', () => {
        renderWithProvider(<Dashboard />, {
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
        expect(screen.getAllByRole('link')[0]).toBeInTheDocument()
        expect(screen.getAllByRole('link')).toHaveLength(2)
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
});