import React from 'react'
import styled from 'styled-components'
import reactlogo from '../media/reactlogo.png'
 
const Logo = styled.img`
  display: block;
  margin: 0 auto;
`
const Note = styled.div`
  white-space: pre-wrap;
  font-size: 1.03em;
  margin-top: 15px;
`
const Divider = styled.hr`
  margin-top: 55px;
  margin-bottom: 55px;
  width: 50%;
  box-shadow: 0 0 2px 0 black;
`
 
const Heading = () => {
  return (
    <div>
      <h1>React Quiz App</h1>
      <Logo src={reactlogo}></Logo>
      <Note>Welcome to the React Quiz App! {'\n \n'}
      Test your knowledge of ReactJS by taking a multiple choice quiz below.</Note>
      <Divider />
    </div>
  )
}
 
export default Heading