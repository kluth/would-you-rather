import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/actions/userActions'
import './Leaderboard.css'

const Leaderboard = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch]);
  return (
      <div role="list">
          {
              users.length > 0 &&
              users.sort((a, b) => (Object.keys(b.answers).length + Object.keys(b.questions).length) - (Object.keys(a.answers).length + Object.keys(a.questions).length)).map((user, index) => (
                  <div key={user.id}>
                      <div>
                          <h3>#{index + 1}: {index === 0 ? (
                              <span className='crown'>👑</span>
                          ): (
                               null   
                          )}{user.name}</h3>
                          <img src={user.avatarURL || 'https://i.pravatar.cc/50'} alt={user.name} />
                          <h4>{Object.keys(user.answers).length} answers</h4>
                          <h4>{Object.keys(user.questions).length} questions</h4>
                          <h5>Total Score: {Object.keys(user.answers).length + Object.keys(user.questions).length}</h5>
                      </div>
                  </div>
              ))
            }
      </div>
    )
}

export default Leaderboard