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

    difficultyOptions = [
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

    startQuiz = () => {
        this.setState({
            beforeQuizHidden: true,
            duringQuizHidden: false
        })
    }

    endQuiz = () => {
        this.setState({
            duringQuizHidden: true,
            afterQuizHidden: false,
        })
    }

    restartQuiz = () => {
        this.setState({
            beforeQuizHidden: false,
            afterQuizHidden: true,
            timeRanOut: false
        })
    }

    generateQuestions = (numberOfQuestions) => {
        this.setState({
            questions: questionsFromBank(numberOfQuestions)
        })
    }

    getScore = (finalScore) => {
        this.setState({
            score: finalScore
        })
    }

    setTimer = (updatedTime) => {
        this.setState({
            timeInSeconds: updatedTime
        })
    }

    updateTimeRanOut = () => {
        this.setState({
            timeRanOut: true
        })
    }
 
    render() {
        const { beforeQuizHidden, duringQuizHidden, afterQuizHidden, questions, score, timeInSeconds, timeRanOut } = this.state
 
        return (
            <div>
                {!beforeQuizHidden && <BeforeQuiz
                startQuiz = {this.startQuiz}
                difficultyOptions = {this.difficultyOptions}
                generateQuestions = {this.generateQuestions}
                timeInSeconds = {timeInSeconds}
                setTimer = {this.setTimer}
                />}
 
                {!duringQuizHidden && <DuringQuiz
                questions = {questions}
                endQuiz = {this.endQuiz}
                getScore = {this.getScore}
                timeInSeconds = {timeInSeconds}
                timeRanOut = {timeRanOut}
                updateTimeRanOut = {this.updateTimeRanOut}
                />}
 
                {!afterQuizHidden && <AfterQuiz
                questions = {questions}
                restartQuiz = {this.restartQuiz}
                score = {score}
                timeInSeconds = {timeInSeconds}
                timeRanOut = {timeRanOut}
                />}
            </div>
        )
    }
}
 
export default Quiz