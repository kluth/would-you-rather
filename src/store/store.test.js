import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import * as API from '../_DATA'
import React from 'react'

import App from '../App'

API._getQuestions = jest.fn()
API._getUsers = jest.fn()

// mock useEffect
const effectSpy = jest.spyOn(React, 'useEffect')

const renderWithProvider = (ui) => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return render(
        <Provider store={store}>
            <BrowserRouter>
                {ui}
            </BrowserRouter>
        </Provider>
    )
}

describe('Redux State', () => {
    it('should fire the useEffect hook', () => {
        renderWithProvider(<App />)
        expect(effectSpy).toHaveBeenCalled()
    })

    // make sure the correct methods are called
    it('should call the API to get the questions', () => {
        renderWithProvider(<App />)
        expect(API._getQuestions).toHaveBeenCalled()
    })

    it('should call the API to get the users', () => {
        renderWithProvider(<App />)
        expect(API._getUsers).toHaveBeenCalled()
    })
})
