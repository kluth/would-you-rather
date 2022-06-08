import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveAnswer } from '../../store/actions/questionActions'
import './Question.css'
import { useNavigate } from 'react-router-dom'


const Question = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const newQuestions = useSelector(state => state.questions.new)
    const oldQuestions = useSelector(state => state.questions.old)
    const users = useSelector(state => state.users)
    const auth = useSelector(state => state.auth)
    const { id } = useParams()
    // if states of newQuestions and oldQuestions are empty, redirect to /uhoh
    useEffect(() => {
    if (!newQuestions && !oldQuestions) {
        navigate('/uhoh')
        return
        }
    }, [newQuestions, oldQuestions, navigate])


    const questions = newQuestions?.concat(oldQuestions)
    const question = questions?.find(question => question.id === id)
    const handleSelection = (event) => {
        event.preventDefault()
        saveAnswer(dispatch, {
            authedUser: auth.id,
            qid: id,
            answer: event.target.value
        }).then(() => {
            navigate('/')
        })
    }
    
    // question is from questions array found by id
    
    return (
        <>
            {question && 
      <main role="main">
          <div className='question-card'>
              <div className='question-card-header'>
                  <div className='question-card-header-text'>
                                <h3>Would you rather</h3>
                                <img src={users[question.author]?.avatarURL || 'https://i.pravatar.cc/150'} alt={users[question.author]?.name || 'Avatar'}/>
                  </div>
              </div>
                    <div className='question-card-body'>
                        {/* when question is in newQuestions show the form */
                        newQuestions.includes(question) &&
                            <form onSubmit={handleSelection}>
                                <div className='question-card-body-option'>
                                    <input type='radio' name='option' value='optionOne' id='optionOne'/>
                                    <label htmlFor='optionOne'>{question.optionOne.text}</label>
                                </div>
                                <div className='question-card-body-option'>
                                    <input type='radio' name='option' value='optionTwo' id='optionTwo'/>
                                    <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                                </div>
                                <button type='submit'>Submit</button>
                            </form>
                        }
                        {/* when question is in oldQuestions show the text with the percentages of each option */
                        oldQuestions.includes(question) &&
                            <div className='question-card-body-option'>
                                <div className='question-card-body-option-text'>
                                    <p>{question.optionOne.text}</p>
                                    <p>{`${(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100}%`}</p>
                                </div>
                                <div className='question-card-body-option-text'>
                                    <p>{question.optionTwo.text}</p>
                                    <p>{`${(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100}%`}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </main>
            }
        </>
    )
}
                  

export default Question