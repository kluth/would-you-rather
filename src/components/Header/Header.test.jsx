import Header from './'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
    legacy_createStore as createStore
} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../store/reducers'
import { initialState as authState } from '../../store/reducers/authReducer'

let store = createStore(rootReducer, authState)

const renderWithProvider = (ui, { reduxState } = {}) => {
  store = createStore(rootReducer, reduxState || authState)
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>)
}

describe('Header', () => {
    it('should render', () => {
        renderWithProvider(
            <Header />
        )
        expect(screen).toMatchSnapshot()
    })
})
    