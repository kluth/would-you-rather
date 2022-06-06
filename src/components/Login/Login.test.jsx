import Login from ".";

import {
    render,
    screen,
} from "@testing-library/react";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "../../store/reducers";
import { Provider } from "react-redux";
import {
    login
} from "../../store/actions/authActions";

import userEvent from "@testing-library/user-event";

const store = createStore(rootReducer)
const handleLoginMock = jest.fn()

describe("Login", () => {
    it("should render", () => {
        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );
        expect(screen).toMatchSnapshot();
    });

    it('should get the form input values and call login', () => {
        // simulate the login workflow with react-scripts
        //
        // 1. render the component
        // 2. get the form input values
        // 3. call the login action
        // 4. check if the login action was called
        // 5. check if the login action was called with the correct values

        render(
            <Provider store={store}>
                <Login />
            </Provider>
        );

        const loginForm = screen.getByTestId('loginForm');
        loginForm.attributes.onSubmit = handleLoginMock;

        const username = screen.getByTestId('username');
        const password = screen.getByTestId('password');

        userEvent.type(username, 'test');
        userEvent.type(password, 'test');

        userEvent.click(screen.getByTestId('login'));

        expect(handleLoginMock).toHaveBeenCalledTimes(1)
        expect(handleLoginMock).toHaveBeenCalledWith({
            id: 'test',
            password: 'test'
        })
    })
})