import React from 'react'
import styled from 'styled-components'
 
const BeginBtn = styled.button`
    display: block;
    margin: 0 auto;
    margin-bottom: 100px;
    font-size: 2em;
    background-color: ${props => props.disabled ? '#D3D3D3' : '#00D8FF'};
    border: 1px solid black;
    padding: 20px;
    transition: all 0.4s;
    font-family: 'Roboto';
    :hover {
        background-color: ${props => props.disabled ? '#D3D3D3' : '#5EE6FF'};
        cursor: ${props => props.disabled ? 'default' : 'pointer'};
    }
`
const Note = styled.div`
  font-size: 1.04em;
  margin-top: 15px;
`
const DifficultyBtn = styled.button`
    color: black;
    display: block;
    width: 230px;
    margin: 0 auto;
    margin-top: 15px;
    white-space: pre-wrap;
    font-size: 1.02em;
    background-color: ${props => props.selected ? '#5EE6FF' : '#00D8FF'};
    border: ${props => props.selected ? '4px solid black' : '1.2px solid black'};
    padding: 11px;
    transition: all 0.2s;
    font-family: 'Roboto';
    :hover {
        background-color: #5EE6FF;
        cursor: ${props => props.selected ? 'default' : 'pointer'};
    }
`
const DifficultyText = styled.div`
    font-weight: 600;
    font-size: 1.1em;
    margin-bottom: -10px;
`
const Timer = styled.div`
    margin-top: 60px;
    margin-bottom: 5px;
    font-size: 1.2em;
`
const EmptyTimer = styled.div`
    margin-top: 60px;
    margin-bottom: 5px;
    font-size: 1.2em;
`
 
class BeforeQuiz extends React.Component {
    constructor (props) {
        super(props)
        const { difficultyOptions, timeInSeconds } = props
        this.state = {
            isDifficultySelected: Array(difficultyOptions.length).fill(false),
            beginDisabled: true,
            showTimer: false,
            timeInSeconds: timeInSeconds
        }
    }
 
    componentDidUpdate(prevState) {
        const { setTimer } = this.props
        const { timeInSeconds } = this.state
        if (timeInSeconds !== prevState.timeInSeconds) {
            setTimer(this.state.timeInSeconds)
        }
    }
 
    render() {
        let { isDifficultySelected } = this.state
        const { beginDisabled, showTimer, timeInSeconds } = this.state
        const { startTheQuiz, difficultyOptions, generateQuestions } = this.props
 
        const onSelectDifficulty = (numberOfQuestions, timeInMin, i) => {
            isDifficultySelected = Array(difficultyOptions.length).fill(false)
            isDifficultySelected[i] = !isDifficultySelected[i]
            this.setState({
                isDifficultySelected: isDifficultySelected,
                beginDisabled: false,
                showTimer: true,
                timeInSeconds: Math.floor(timeInMin * 60)
            })
            generateQuestions(numberOfQuestions)
        }
        
        return (
            <div>
                <Note>Select Difficulty:</Note>
                <div>
                    {difficultyOptions.map((difficultyOption, i) => (
                        <DifficultyBtn selected={isDifficultySelected[i]} key={i} onClick={() => onSelectDifficulty(difficultyOption.numberOfQuestions, difficultyOption.timeInMin, i)}>
                            <DifficultyText>{difficultyOption.difficulty}</DifficultyText> {'\n'} {difficultyOption.numberOfQuestions} question{difficultyOption.numberOfQuestions === 1 ? '' : 's'} in {difficultyOption.timeInMin} {difficultyOption.timeInMin === 1 ? 'minute' : 'minutes'}
                        </DifficultyBtn>
                    ))}
                </div>
                {showTimer ? <Timer>{Math.floor(timeInSeconds / 60) + ':' + ('0' + Math.floor(timeInSeconds % 60)).slice(-2)}</Timer> : <EmptyTimer></EmptyTimer>}
                <BeginBtn disabled={beginDisabled} onClick={startTheQuiz}>Begin Quiz</BeginBtn>
            </div>
          )
        }
    }
 
export default BeforeQuiz