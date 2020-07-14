import React from 'react'
import styled from 'styled-components'
 
const QNumber = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.01em;
`
const Score = styled.div`
    margin-top: 50x;
    margin-bottom: 90px;
`
const Q = styled.div`
    text-align: center;
    margin: 0 auto;
    width: 80%;
    overflow-wrap: break-word;
    font-size: 1.8em;
    margin-top: 20px;
    margin-bottom: 20px;
`
const AnswerBtn = styled.button`
    color: black;
    display: block;
    width: 230px;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 1.02em;
    background-color: ${props => props.styleProp === 'correct' ? '#00FF00' : props.styleProp === 'incorrect' ? '#FF0000' : '#00D8FF'};
    border: 1.2px solid black;
    padding: 15px;
    transition: all 0.4s;
    font-family: 'Roboto';
    :hover {
        background-color: ${props => props.styleProp === 'correct' ? '#00FF00' : props.styleProp === 'incorrect' ? '##FF0000' : '#5EE6FF'};
        cursor: ${props => props.disabled ? 'default' : 'pointer'};
    }
`
const NextBtn = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 30px;
    font-size: 1.03em;
    background-color: ${props => props.disabled ? '#D3D3D3' : '#00D8FF'};
    border: 1px solid black;
    padding: 13px;
    transition: all 0.4s;
    font-family: 'Roboto';
    :hover {
        background-color: ${props => props.disabled ? '#D3D3D3' : '#5EE6FF'};
        cursor: ${props => props.disabled ? 'default' : 'pointer'};
    }
`
const AfterAnswer = styled.div`
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 25px;
`
const Timer = styled.div`
    margin-top: 100px;
    margin-bottom: 5px;
    font-size: 1.2em;
`
 
class DuringQuiz extends React.Component {
    constructor (props) {
        super(props)
        const { questions, timeInSeconds } = this.props
        const i = 0
        this.state = {
            i: i,
            questionNumber: i + 1,
            question: questions[i].question,
            answers: questions[i].answers,
            correctAnswer: questions[i].correct,
            answerState: '',
            answerDisabled: false,
            showAfterAnswer: false,
            next: questions.length > 1 ? 'Next Question' : 'Finish Quiz',
            nextDisabled: true,
            score: 0,
            timeInSeconds: timeInSeconds
        }
    }
 
    componentDidMount() {
        this.runTimer = setInterval( () => {
            this.setState({
                timeInSeconds: this.state.timeInSeconds - 1
            })}, 1000)
        }
 
    componentDidUpdate() {
        const { timeInSeconds, score } = this.state
        const { endQuiz, updateTimeRanOut, getScore } = this.props
        if (timeInSeconds === 0) {
            getScore(score)
            endQuiz()
            updateTimeRanOut()
        }
    }
 
    componentWillUnmount() {
        clearInterval(this.runTimer)
    }

    onAnswerClicked = (answer) => {
        const { correctAnswer, score, i } = this.state
        if (answer === correctAnswer) {
            this.setState({
                answerState: 'correct',
                score: score + 1
            })
        } else {
            this.setState({
                answerState: 'incorrect'
            })
        }
        this.setState({
            i: i + 1,
            nextDisabled: false,
            answerDisabled: true,
            showAfterAnswer: true
        })
    }

    onNextClicked = () => {
        const { questions, getScore, endQuiz } = this.props
        const { i, score } = this.state
        if (i === questions.length - 1) {
            this.setState({
                next: 'Finish Quiz'
            })
        } else if (i === questions.length) {
            getScore(score)
            return endQuiz()
        }
        this.setState({
            questionNumber: i + 1,
            question: questions[i].question,
            answers: questions[i].answers,
            correctAnswer: questions[i].correct,
            nextDisabled: true,
            answerDisabled: false,
            answerState: '',
            showAfterAnswer: false
        })
    }
 
    render() {
        const { questions } = this.props
        const { i, questionNumber, question, answers, correctAnswer, answerState, answerDisabled, showAfterAnswer, next, nextDisabled, score, timeInSeconds } = this.state
 
        return (
            <div>
                <Timer>{Math.floor(timeInSeconds / 60) + ':' + ('0' + Math.floor(timeInSeconds % 60)).slice(-2)}</Timer>
                <QNumber>Question {questionNumber}/{questions.length}</QNumber>
                <Q>{question}</Q>
                {showAfterAnswer && <AfterAnswer>Answer: {correctAnswer} </AfterAnswer>}
                <div>
                    {answers.map((answer) => (
                        <AnswerBtn disabled={answerDisabled} styleProp={answerState} key={answer} onClick={() => this.onAnswerClicked(answer)}>{answer}</AnswerBtn>
                    ))}
                </div>
                <NextBtn disabled={nextDisabled} onClick={this.onNextClicked}>{next}</NextBtn>
                <Score>Score: {score}/{i}</Score>
            </div>
          )
        }
    }
 
export default DuringQuiz
