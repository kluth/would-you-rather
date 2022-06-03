import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import {
  axe,
  toHaveNoViolations
} from 'jest-axe'

import App from './App'
import rootReducer from './store/reducers'
import { initialState } from './store/reducers/questionReducer'
import thunk from 'redux-thunk'


expect.extend(toHaveNoViolations)

const renderWithProvider = (ui, { reduxState } = {}) => {
  const store = createStore(rootReducer, reduxState || initialState, thunk)
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>)
}

describe('App', () => {
  it('should render the application container', () => {
    renderWithProvider(<App />)
    expect(screen.getByRole('application')).toBeInTheDocument()
  })

  it('should have no accessibility violations', async () => {
    const { container } = renderWithProvider(<App />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
