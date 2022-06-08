import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {
    ReactComponent as QuestionAnswer
} from '@material-design-icons/svg/outlined/question_answer.svg'
import { useSelector } from 'react-redux'

const Header = () => {
    const auth = useSelector(state => state.auth)
  return (
      <div role="navigation">
          <div className='header-container'>
              <div className='header-container-logo'>
                  <h1>
                      <Link to='/'>
                          <QuestionAnswer />
                          WYR
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
                          <Link to='/add'>New Question</Link>
                      </li>
                  </ul>
              </div>
              <div className="header-container-profile">
                  <img alt='Avatar' src={auth.avatarURL || 'https://i.pravatar.cc/150'} />
                    <h3>{auth.name}</h3>
              </div>
              </div>
          </div>
  )
}

export default Header