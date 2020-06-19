import React from 'react'
import styled from 'styled-components'
 
const RestartButton = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1.3em;
    margin-bottom: 120px;
    background-color: #00D8FF;
    border: 1px solid black;
    padding: 12px;
    transition: all 0.5s;
    font-family: 'Roboto';
    :hover {
        background-color: #5EE6FF;
        cursor: pointer;
    }
`
const Summary = styled.div`
    white-space: pre-wrap;
    font-size: 1.03em;
    margin-top: 15px;
`
const FinalScore = styled.div`
    font-weight: 600;
    margin-bottom: 15px;
`
class AfterQuiz extends React.Component {
 
    render() {
        const { questions, restartQuiz, score, timeRanOut } = this.props
 
        return (
            <div>
                <Summary>
                    {timeRanOut ? <span>Time ran out! {'\n \n'}</span> : <span>Finished with time to spare! {'\n \n'}</span>}
                    <FinalScore>Final Score: {score}/{questions.length} {'\n \n'}</FinalScore>
                    <span>Click 'Restart Quiz' to try again with a new set of questions.</span>
                </Summary>
                <RestartButton onClick={restartQuiz}>Restart Quiz</RestartButton>
            </div>
          )
        }
    }
 
export default AfterQuiz