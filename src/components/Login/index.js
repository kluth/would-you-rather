import React, { useEffect } from 'react'
import { login } from '../../store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import {
    getUsers
} from '../../store/actions/userActions'

const Login = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const handleLogin = (event) => {
        event.preventDefault()
        const { username } = event.target
        // set password to the users password in the store
        const password = users.find(user => user.id === username.value).password
        login(dispatch, { id: username.value, password: password })
    }
    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch])
    return (
        <form data-testid='loginForm' onSubmit={handleLogin}>
            <div className='login-form'>
                <div className='login-form-header'>
                    <h1>Login</h1>
                </div>
                <div className='login-form-body'>
                    <div className='login-form-body-input'>
                        <label htmlFor="username">Username</label>
                        {users &&
                            <select name="username" id="username">
                                {Object.values(users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                            </select>
                        }
                    </div>
                    <div className='login-form-body-button'>
                        <button type="submit" name='Login' data-testid='login'>Login</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login