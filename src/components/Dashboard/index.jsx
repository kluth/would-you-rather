import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getQuestions } from '../../store/actions/questionActions'
import { getUsers } from '../../store/actions/userActions'
import './Dashboard.css'

const Dashboard = () => {
  const questions = useSelector(state => state.questions)
  const auth = useSelector(state => state.auth)
  const dispatchQuestions = useDispatch()
  const dispatchUsers = useDispatch()
  useEffect(() => {
    getQuestions(dispatchQuestions, auth.id)
    getUsers(dispatchUsers)
  }, [auth.id, dispatchQuestions, dispatchUsers])
  
  return (
    <div id='dashboard'>
      {questions.new && questions.old &&
        <>
          <h1>New Questions [{questions.new.length}]</h1>
          <h2>Would you rather... ?</h2>
          {questions.new.length > 0 &&
            <div data-testid="question-grid" className='question-grid'>
              {questions.new.map(question => (
                <Link key={question.id} to={`/questions/${question.id}`}>
                  <div className='question-card'>
                    <div className='question-card-header'>
                      <h3>Would you rather</h3>
                      <div className='question-card-header-text'>
                        <h2>{question.optionOne.text}</h2>
                        <h2>{question.optionTwo.text}</h2>
                      </div>
                    </div>
                
                    <h5>Asked by {question.author} on {new Date(question.timestamp).toLocaleDateString()}</h5>
                  </div>
                </Link>
              ))}
            </div>
          }
          <h1>Old Questions [{questions.old.length}]</h1>
          <h2>Would you rather... ?</h2>
          {questions.old.length > 0 &&
            <div data-testid="question-grid" className='question-grid'>
              {questions.old.map(question => (
                <div className='question-card' key={question.id}>
                    <div className='question-card-header'>
                      <h3>Would you rather</h3>
                      <div className='question-card-header-text'>
                      <h2>
                        {question.optionOne.votes.length > question.optionTwo.votes.length &&
                          <p>
                            {question.optionOne.text} is winning by {question.optionOne.votes.length} votes over {question.optionTwo.votes.length} votes for {question.optionTwo.text}
                          </p>
                        }
                        {question.optionOne.votes.length < question.optionTwo.votes.length &&
                          <p>
                            {question.optionTwo.text} is winning by {question.optionTwo.votes.length} votes over {question.optionOne.votes.length} votes for {question.optionOne.text}
                          </p>
                        }
                      </h2>
                      </div>
                    </div>
                
                    <h5>Asked by {question.author} on {new Date(question.timestamp).toLocaleDateString()}</h5>
                  </div>
              ))}
            </div>
          }
        </>
      }
      {Object.values(questions).length === 0 &&
        <h1>No questions yet</h1>
      }
    </div>
  )
}

export default Dashboard