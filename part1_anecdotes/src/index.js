import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button1 = ({increaseFunc}) => {
  
  return (
    <button onClick={()=>increaseFunc(Math.floor(Math.random() * 6))}>
      press me for random anecdote
    </button>
  )
}

const Button2 = ({increaseVotes,currentquote,currentvotes}) => {
  
  return (
    <button onClick={()=>{
      const copy = [ ...currentvotes ]
      // increment the property 2 value by one
      copy[currentquote] += 1 
      increaseVotes(copy)

    }}>
      press me for voting this anecdote
    </button>
  )
}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))
  const increaseVotes = (newvotes) => setVotes(newvotes)
  let mostvoted =0
  return (
    <div>
      <h1>Anecdotes</h1>
      {props.anecdotes[selected]}
      <br></br>
      Votes for this anecdote are currently: {votes[selected]}
      <br></br>
      <Button1 increaseFunc={setSelected}/>
      <Button2 increaseVotes={increaseVotes} currentquote={selected} currentvotes={votes}/>
      <h1>Most voted anecdote</h1>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <br></br>
      Has {Math.max(...votes)} votes

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)