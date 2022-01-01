import './App.css';
import React, {useState} from 'react';
import Message from './Message';

function App() {
  let [count, setCount] = useState(1)
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${ isMorning ? 'dayLight': ''}`}>
      <h2>Good {isMorning ? 'Morning' : 'Night'}</h2>
      <Message  counter = {count}/>

      <button onClick = {() =>{setCount(++count)}} >Update Counter</button>
      <button onClick = {() =>{setMorning(!isMorning)}}>Update Day</button>
    </div>
  );
}

export default App;
