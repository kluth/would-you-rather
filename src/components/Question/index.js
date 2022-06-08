import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions, saveAnswer } from '../../store/actions/questionActions'
import './Question.css'
import { useNavigate } from 'react-router-dom'
import PageNotFound from '../PageNotFound'


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
        getQuestions(dispatch)
    }, [dispatch, navigate, newQuestions, oldQuestions])


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
                                <img src={Object.values(users).find(u => u.id === question.author).avatarURL || 'https://i.pravatar.cc/150'} alt={Object.values(users).find(u => u.id === question.author).name || 'Avatar'} />
                            </div>
                        </div>
                        <div className='question-card-body'>
                            {/* when question is in newQuestions show the form */
                                !question.optionOne.votes.includes(auth.id) && !question.optionTwo.votes.includes(auth.id) &&
                                <form onChange={handleSelection}>
                                    <div className='question-card-body-option'>
                                        <input type='radio' name='option' value='optionOne' />
                                        <label>{question.optionOne.text}</label>
                                    </div>
                                    <div className='question-card-body-option'>
                                        <input type='radio' name='option' value='optionTwo' />
                                        <label>{question.optionTwo.text}</label>
                                    </div>
                                </form>
                            }
                            {/* when question is in oldQuestions show the text with the percentages of each option */
                                question.optionOne.votes.includes(auth.id) || question.optionTwo.votes.includes(auth.id) &&
                                <div className='question-card-body-option'>
                                    <div className='question-card-body-option-text'>
                                        <>
                                            {question.optionOne.votes.includes(auth.id) &&
                                                <p className='pulsing'>Your choice</p>
                                            }
                                            <p>{question.optionOne.text}</p>
                                            <p>{question.optionOne.votes.length} votes which makes</p>
                                            <p>{`${(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100}%`}</p>
                                        </>
                                    </div>
                                    <hr />
                                    <div className='question-card-body-option-text'>
                                        <>
                                            {question.optionTwo.votes.includes(auth.id) &&
                                                <p className='pulsing'>Your choice</p>
                                            }
                                            <p>{question.optionTwo.text}</p>
                                            <p>{question.optionTwo.votes.length} votes which makes</p>
                                            <p>{`${(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100}%`}</p>
                                        </>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </main>
            }
            {!question &&
                <PageNotFound />
            }
        </>
    )
}


export default Question