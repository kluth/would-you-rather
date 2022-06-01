import {
    render,
    screen
} from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('should render a div with the id "app"', () => {
        render(<App />)
        const container = document.querySelector('#app')
        expect(container).toBeInTheDocument()
    })
})