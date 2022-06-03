import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveAnswer } from '../../store/actions/questionActions'


const Question = () => {
    const dispatch = useDispatch()
    const handleSelection = (event) => {
        event.preventDefault()
        const { value } = event.target
        console.log(value)
        saveAnswer(dispatch, value)
    }
    const questions = useSelector(state => state.questions)
    
    const { id } = useParams()
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
                  <form onChange={handleSelection}>
                      <div className='question-card-body-option'>
                          <input type="radio" name="option" value="optionOne" />
                          <label htmlFor="optionOne">{question.optionOne.text}</label>
                      </div>
                      <div className='question-card-body-option'>
                          <input type="radio" name="option" value="optionTwo" />
                          <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                        </div>
                  </form>
              </div>
          </div>
    </main>
  )
}

export default Question