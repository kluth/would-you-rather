import Leaderboard from ".";

import {
    render,
    screen,
    waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import rootReducer from "../../store/reducers";
import { initialState as userState } from "../../store/reducers/userReducer";
import { BrowserRouter } from "react-router-dom";


let store = createStore(rootReducer, userState)

const renderWithProvider = (ui, { reduxState } = {}) => {
  store = createStore(rootReducer, reduxState || userState)
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </Provider>)
}

describe("Leaderboard", () => {
    it("should render the container with the list role", () => {
        renderWithProvider(
            <Leaderboard />
        );

        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    // it should display the users in the state ordered by answered questions
    it("should display the users in the state ordered by answered questions", async () => {
        // render the Leaderboard component and get the users via useEffect with the mock function
        renderWithProvider(
            <Leaderboard />
        );

        await waitFor(() => {
            expect(screen.getByText("#1: Sarah Edo", {
                exact: false
            })).toBeInTheDocument()
        })
    })
})