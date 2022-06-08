import * as API from './_DATA'

jest.setTimeout(300000)

describe('_DATA', () => {
    describe('_saveQuestion', () => {
        
        it('should return the question object when correct', async () => {
            const question = API._saveQuestion({
                optionOneText: 'test',
                optionTwoText: 'test',
                author: 'test'
            })
            expect(question).toBeInstanceOf(Promise)
            await expect(question).resolves.toEqual(
                {
                    // id should be some string
                    id: expect.any(String),
                    optionOne: {
                        votes: [],
                        text: 'test'
                    },
                    optionTwo: {
                        votes: [],
                        text: 'test'
                    },
                    author: 'test',
                    timestamp: expect.any(Number)
                }
            )
        })
        it('should reject the promise when incorrect', async () => {
            const question = API._saveQuestion({
                optionOneText: 'test',
                optionTwoText: 'test',
            })
            expect(question).toBeInstanceOf(Promise)
            await expect(question).rejects.toEqual(
                'Please provide optionOneText, optionTwoText, and author'
            )
        })
    })

    describe('_saveQuestionAnswer', () => {
        it('should return true when correct', async () => {
            const answer = API._saveQuestionAnswer({
                authedUser: 'sarahedo',
                qid: 'xj352vofupe1dqz9emx13r',
                answer: 'optionOne'
            })
            expect(answer).toBeInstanceOf(Promise)
            await expect(answer).resolves.toEqual(true)
        })
        it('should reject the promise when incorrect', async () => {
            const user = API._saveQuestionAnswer({
                authedUser: 'test',
                qid: 'test',
            })
            expect(user).toBeInstanceOf(Promise)
            await expect(user).rejects.toEqual(
                'Please provide authedUser, qid, and answer'
            )
        })
    })
})