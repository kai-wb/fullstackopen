import { useState } from 'react'

const Most = (props) => {
  let sum = props.votes.reduce((accumulator, curr) => accumulator += curr, 0)  

  if (sum === 0) {
    return (
      <div>
        No votes cast yet
      </div>
    )
  }

  function findMaxIdx() {
    let maxIdx = 0
    for (let i = 1; i<props.votes.length; i++) {
      if (props.votes[i] > props.votes[maxIdx]) {
        maxIdx = i
      }
    }
    return maxIdx
  }

  // let cur_max_idx = props.votes.reduce((maxIdx, curValue, curIdx, array) => curValue > array[curIdx] ? maxIdx = curIdx : maxIdx, 0)

  let cur_max_idx = findMaxIdx()

  return (
    <div>
      {props.anecdotes[cur_max_idx]} has the maximum votes with {props.votes[cur_max_idx]} votes.
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  function randomAnecdote() {
    let cur_idx = Math.floor(Math.random() * (anecdotes.length));
    setSelected(cur_idx)
}

  function handleVotes(){
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }


  return (
    <div>
      
      <h1>Anecdote of the day</h1>

      {anecdotes[selected]}<br></br>
      has {votes[selected]} votes <br></br>
      <button onClick={() => randomAnecdote()}>next anecdote</button>
      <button onClick={() => handleVotes()}>vote</button>


      <h1>Anecdote with most votes</h1>

      <Most anecdotes={anecdotes} votes={votes}/>



    </div>
  )
}

export default App