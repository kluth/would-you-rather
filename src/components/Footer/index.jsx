import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
      <footer>
          <div className='footer-container'>
              <div className='footer-container-logo'>
                  <h1>
                      <img src='https://i.imgur.com/3YyqQ.png' alt='logo' />
                  </h1>
              </div>
              <div className='footer-container-nav'>
                  <ul>
                      <li>
                          <a href='/'>Home</a>
                      </li>
                      <li>
                          <a href='/leaderboard'>Leaderboard</a>
                      </li>
                  </ul>
              </div>
          </div>
    </footer>
  )
}

export default Footer