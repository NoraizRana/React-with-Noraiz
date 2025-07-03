import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0);
    const [data, fetchData]=useState("Asad");
    useEffect(()=>{
      console.log("component re-rendered");
    },[data])

    function dataFetch(){
      console.log("Counter Data Fetched...");
    }
     function addcounter(){
      setCounter(counter+1);
      console.log("Counter value increased by 1");
     }

  return (
    <>
    <h1>The value of Counter is : {counter}</h1>
    <button onClick={addcounter}>Click me</button>
    <button onClick={dataFetch}>FetchData</button>
    </>
  )
}

export default App
