import {
    render,
    screen
} from '@testing-library/react'

import Login from './'

describe('Login', () => {
    it('should render a div with the id "login"', () => {
        render(<Login />)
        const container = document.querySelector('#login')
        expect(container).toBeInTheDocument()
    })

    it('should render a form with the id "login-form"', () => {
        render(<Login />)
        const container = document.querySelector('#login-form')
        expect(container).toBeInTheDocument()
    })

    it('should render a label with the id "username-label"', () => {
        render(<Login />)
        const container = document.querySelector('#username-label')
        expect(container).toBeInTheDocument()
    })

    it('should render a label with the id "password-label"', () => {
        render(<Login />)
        const container = document.querySelector('#password-label')
        expect(container).toBeInTheDocument()
    })

    it('should render a button with the id "login-button"', () => {
        render(<Login />)
        const container = document.querySelector('#login-button')
        expect(container).toBeInTheDocument()
    })

    it('should render an input with the id "username-input"', () => {
        render(<Login />)
        const container = document.querySelector('#username-input')
        expect(container).toBeInTheDocument()
    })

    it('should render an input with the id "password-input"', () => {
        render(<Login />)
        const container = document.querySelector('#password-input')
        expect(container).toBeInTheDocument()
    })
})