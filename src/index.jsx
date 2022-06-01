import React from 'react'
import {
    createRoot
} from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './features/App'
import Login from './features/Login'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
)