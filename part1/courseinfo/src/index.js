import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Total Excersizes = {Number(props.exercises1) + Number(props.exercises2) + Number(props.exercises3)}</p>
    </div>
  )
}

const App = () => {
  
  return (
    <div>
    <Header course="Half Stack app development"/>
    <Content 
      part1 = 'Fundamentals of React'
      exercises1 = '10'
      part2 = 'Using props to pass data'
      exercises2 = '7'
      part3 = 'State of a component'
      exercises3 = '14'
      />
      <Total exercises1='10' exercises2='7' exercises3='14' />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))