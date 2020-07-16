import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => {
return (<h1>{name}</h1>)
}

const Statistics = ({valueg,valuen,valueb}) => {

  const totalv = valueg + valuen + valueb

  if (totalv==0){
    return(
      <p>No feedback given yet</p>
    )
  }
  
  return (
    
    <table><tbody>
      <Statistic name='good' value={valueg}/>
      <Statistic name='neutral' value={valuen}/>
      <Statistic name='bad' value={valueb}/>
      <Total totalv={totalv}/>
      <Average totalv={totalv} valueg={valueg} valueb={valueb}/>
      <Percentage totalv={totalv} valueg={valueg}/>
    </tbody></table>
    
  )
}
  const Statistic = (props) => {

    return (
      
       <tr>
         <td>{props.name}</td>
         <td>{props.value}</td>
       </tr>  
      
    )
  }


  const Total = ({totalv}) =>  {return (
    <tr>
      <td> Total votes: </td>
      <td>{totalv}</td>
    </tr>  
    )
  }

  const Average = ({totalv,valueg,valueb}) => {

    const Average= (valueg-valueb)/totalv
    return (
    <tr>
      <td> Average: </td>
      <td>{Average}</td>
    </tr>
    )
  }
  const Percentage = ({totalv,valueg}) => {

    const percentage= (valueg*100)/totalv
    return (
    <tr>
      <td> positive: </td>
      <td>{percentage} % </td>
    </tr>
    )
  }

const Button = ({text,increaseFunc}) => {

  return (
    <button onClick={increaseFunc}>
       {text}
    </button>
  )
}


const App = () => {
  const header1 = 'unicafe feedback page'
  const header2 = 'statistics'
 
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good+1)
  const increaseNeutral = () => setNeutral(neutral+1)
  const increaseBad = () => setBad(bad+1)

  return (
    <div>
      
      <Header name={header1}/>
      <Button text='good' increaseFunc={increaseGood}/>
      <Button text='neutral' increaseFunc={increaseNeutral}/>
      <Button text='bad' increaseFunc={increaseBad}/>

      <Header name={header2}/>

      <Statistics valueg={good} valuen={neutral} valueb={bad}/>
    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)