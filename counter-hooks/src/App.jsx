import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);
  const adder = () => {
    if (counter >= 20) {
      console.log("Counter Value is Highest")
      return counter;
    }
    else {

      setCounter(counter + 1);
    }
  }
  const reducer = () => {
    if (counter <= 0) {
      console.log("Counter value is least")
      return counter;
    }
    else {

      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>The Value of Counter is: {counter}</h1>
      <button onClick={adder}>Add Value {counter}</button>
      <br />
      <button onClick={reducer}>Decrease Value {counter}</button>
    </>
  )
}

export default App
