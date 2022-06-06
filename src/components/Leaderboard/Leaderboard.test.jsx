import Leaderboard from ".";

import {
    render,
    screen,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

import rootReducer from "../../store/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk))

describe("Leaderboard", () => {
    it("should render as is if empty", () => {
        render(
            <Provider store={store}>
                <Leaderboard />
                </Provider>
        );
        expect(screen).toMatchSnapshot();
    });
})