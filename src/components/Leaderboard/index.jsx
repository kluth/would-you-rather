import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/actions/userActions'

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
              users.sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length).map((user, index) => (
                  <div key={user.id}>
                      <div>
                          <h3>#{index + 1}: {index === 0 ? (
                              <span>👑</span>
                          ): (
                               null   
                          )}{user.name}</h3>
                          <h4>{Object.keys(user.answers).length} answers</h4>
                      </div>
                  </div>
              ))
            }
      </div>
    )
}

export default Leaderboard