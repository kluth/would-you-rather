import Header from './'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('Header', () => {
    it('should render', () => {
        render(<BrowserRouter>
        <Header />
        </BrowserRouter>)
        expect(screen).toMatchSnapshot()
    })
})
    