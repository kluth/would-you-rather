import React from 'react'
import { login } from '../../store/actions/authActions'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()
    const handleLogin = (event) => {
        event.preventDefault()
        const { username, password } = event.target
        login(dispatch, { id: username.value, password: password.value })
    }
  return (
      <form data-testid='loginForm' onSubmit={handleLogin}>
          <div className='login-form'>
              <div className='login-form-header'>
                  <h1>Login</h1>
              </div>
              <div className='login-form-body'>
                  <div className='login-form-body-input'>
                      <label htmlFor="username">Username</label>
                      <input type="text" name="username" id="username" data-testid='username' />
                  </div>
                  <div className='login-form-body-input'>
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" id="password" data-testid='password' />
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