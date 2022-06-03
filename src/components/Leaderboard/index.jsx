import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/actions/userActions'

const Leaderboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch]);
    const users = useSelector(state => state.users)
  return (
      <div role="list">
          {
              // if user is not empty, sort by score
              users.length > 0 &&
              users.sort((a, b) => b.score - a.score).map(user => {
                    return (
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <h3>{user.score}</h3>
                        </div>
                    )
              }
                )
          }
      </div>
    )
}

export default Leaderboard