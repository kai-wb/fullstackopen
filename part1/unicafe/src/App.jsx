import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
      
    </button>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>
      {props.text}
      </td>
      <td>
      {props.stat}
      </td>
    </tr>
       
    
  )
}

const Statistics = (props) => {
  
  if (props.all === 0) {
    return(
      <div>
      <h1>Statistics</h1>
      No feedback given
      </div>
    )
  }

  return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
      <StatisticsLine text="good" stat={props.good} />
      <StatisticsLine text="neutral" stat={props.neutral} />
      <StatisticsLine text="bad" stat={props.bad} />
      <StatisticsLine text="all" stat={props.all} />
      <StatisticsLine text="average" stat={props.average} />
      <StatisticsLine text="positive" stat={props.positive} />
        </tbody>
      </table>
      
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="good" onClick={() => {
        setGood(good+1)
        setAll(all+1)
      }}/> 


      <Button text="neutral" onClick={() => {
        setNeutral(neutral+1)
        setAll(all+1)
      }}/> 


      <Button text="bad" onClick={() => {
        setBad(bad+1)
        setAll(all+1)
      }}/>

{/* 
      <h1>Statistics</h1>
      good {good}<br></br>
      neutral {neutral}<br></br>
      bad {bad}<br></br>
      all {all} <br></br>
      average {(1*good - 1*bad)/all} <br></br>
      positive {good/all} */}

      <Statistics
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all} 
        average = {(1*good - 1*bad)/all} 
        positive = {good/all} 
      />



    </div>
  )
}

export default App