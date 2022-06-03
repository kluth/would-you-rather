import React from 'react'
import { saveQuestion } from '../../store/actions/questionActions'
import { useDispatch, useSelector } from 'react-redux'

const New = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleSaveQuestion = (e) => {
        e.preventDefault()
        const optionOne = e.target.optionOne.value
        const optionTwo = e.target.optionTwo.value
        const author = auth.id
        const newQuestion = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author
        }
        saveQuestion(dispatch, newQuestion)
    }
  return (
      <div className='new-question'>
          <h1>New Question</h1>
          <h2>Would you rather... ?</h2>
          <div className='new-question-form'>
              <form onSubmit={handleSaveQuestion}>
                  <div className='new-question-form-option'>
                      <label>Option One</label>
                      <input type='text' name='optionOne' />
                  </div>
                  <div className='new-question-form-option'>
                      <label>Option Two</label>
                      <input type='text' name='optionTwo' />
                  </div>
                  <button type='submit'>Submit</button>
              </form>
              </div>
    </div>
  )
    }
    

export default New