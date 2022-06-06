import Question from ".";
import { initialState } from '../../store/reducers/questionReducer'
import { rootReducer } from '../../store/reducers/index'
import { thunk } from 'redux-thunk'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

let store = createStore(rootReducer, initialState, thunk)

const renderWithProvider = (ui, { reduxState } = {}) => {
    store = createStore(rootReducer, reduxState || initialState, thunk)
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>)
}

describe("Question", () => {
    // Question component should render properly
    it("renders without crashing", () => {
        renderWithProvider(<Question />)
        expect(screen.getByText("Question")).toBeInTheDocument()
    })
})