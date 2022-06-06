import React from 'react'
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

    const questions = newQuestions.concat(oldQuestions)
    const auth = useSelector(state => state.auth)
    const { id } = useParams()
    const handleSelection = (event) => {
        event.preventDefault()
        const { value } = event.target
        console.log(value)
        saveAnswer(dispatch, {
            authedUser: auth.id,
            qid: id,
            answer: value
        }).then(() => {
            navigate('/')
        })
    }
    
    // question is from questions array found by id
    const question = questions.find(question => question.id === id)
  return (
      <main role="main">
          <div className='question-card'>
              <div className='question-card-header'>
                  <div className='question-card-header-text'>
                      <h3>Would you rather</h3>
                  </div>
              </div>
              <div className='question-card-body'>
                  {/* form that holds the buttons for both options */}
                  <form onClick={handleSelection}>
                      <div className='question-card-body-option'>
                          <input type='radio' name='option' value='optionOne' />
                          <label>{question.optionOne.text}</label>
                      </div>
                      <div className='question-card-body-option'>
                          <input type='radio' name='option' value='optionTwo' />
                          <label>{question.optionTwo.text}</label>
                      </div>
                    </form>
              </div>
          </div>
    </main>
  )
}

export default Question