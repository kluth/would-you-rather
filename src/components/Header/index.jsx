import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
      <div role="navigation">
          <div className='header-container'>
              <div className='header-container-logo'>
                  <h1>
                      <Link to='/'>
                          <img src='https://i.imgur.com/3YyqQ.png' alt='logo' />
                      </Link>
                  </h1>
              </div>
              <div className='header-container-nav'>
                  <ul>
                      <li>
                          <Link to='/'>Home</Link>
                      </li>
                      <li>
                          <Link to='/leaderboard'>Leaderboard</Link>
                      </li>
                      <li>
                          <Link to='/new'>New Question</Link>
                      </li>
                  </ul>
              </div>
              </div>
          </div>
  )
}

export default Header