import React from 'react'
import BeforeQuiz from '../components/beforeQuiz'
import DuringQuiz from '../components/duringQuiz'
import AfterQuiz from '../components/afterQuiz'
import { questionsFromBank } from '../questionsBank'
 
class Quiz extends React.Component  {
    state = {
        beforeQuizHidden: false,
        duringQuizHidden: true,
        afterQuizHidden: true,
        questions: {},
        score: 0,
        timeInSeconds: 0,
        timeRanOut: false
    }
 
    render() {
        const { questions, score, timeInSeconds, timeRanOut } = this.state
 
        const difficultyOptions = [
            {
                difficulty: 'Easy',
                numberOfQuestions: 12,
                timeInMin: 2
            },
            {
                difficulty: 'Medium',
                numberOfQuestions: 15,
                timeInMin: 1.5
            },
            {
                difficulty: 'Hard',
                numberOfQuestions: 20,
                timeInMin: 1
            }
        ]
    
        const startTheQuiz = () => {
            this.setState({
                beforeQuizHidden: true,
                duringQuizHidden: false
            })
        }
    
        const endTheQuiz = () => {
            this.setState({
                duringQuizHidden: true,
                afterQuizHidden: false,
            })
        }
    
        const restartQuiz = () => {
            this.setState({
                beforeQuizHidden: false,
                afterQuizHidden: true,
                timeRanOut: false
            })
        }
 
        const generateQuestions = (numberOfQuestions) => {
            this.setState({
                questions: questionsFromBank(numberOfQuestions)
            })
        }
 
        const getScore = (finalScore) => {
            this.setState({
                score: finalScore
            })
        }
 
        const setTimer = (updatedTime) => {
            this.setState({
                timeInSeconds: updatedTime
            })
        }
 
        const updateTimeRanOut = () => {
            this.setState({
                timeRanOut: true
            })
        }
 
        return (
            <div>
                {!this.state.beforeQuizHidden && <BeforeQuiz
                startTheQuiz = {startTheQuiz}
                difficultyOptions = {difficultyOptions}
                generateQuestions = {generateQuestions}
                timeInSeconds = {timeInSeconds}
                setTimer = {setTimer}
                />}
 
                {!this.state.duringQuizHidden && <DuringQuiz
                questions = {questions}
                endTheQuiz = {endTheQuiz}
                getScore = {getScore}
                timeInSeconds = {timeInSeconds}
                timeRanOut = {timeRanOut}
                updateTimeRanOut = {updateTimeRanOut}
                />}
 
                {!this.state.afterQuizHidden && <AfterQuiz
                questions = {questions}
                restartQuiz = {restartQuiz}
                score = {score}
                timeInSeconds = {timeInSeconds}
                timeRanOut = {timeRanOut}
                />}
            </div>
        )
    }
}
 
export default Quiz