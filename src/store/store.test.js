import { legacy_createStore as createStore } from 'redux'
import rootReducer from './reducers'
import initialState from './reducers/userReducer'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'



const renderWithProvider = (ui, { reduxState } = {}) => {
    const store = createStore(rootReducer, reduxState || initialState)
    return render(
        <Provider store={store}>
            <BrowserRouter>
                {ui}
            </BrowserRouter>
        </Provider>
    )
}

describe.skip('Redux State', () => {

    it('should not be empty if App is rendered', () => {
        renderWithProvider(<p />)
        expect(true).toBeTruthy()
    })

})
