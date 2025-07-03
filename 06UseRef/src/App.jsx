import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const refELement = useRef(null);
  console.log(refELement);
  const [name, setName] = useState("");
  function namesetter() {
    setName("");
    refELement.current.focus()
  }
  function handleinput(){
    refELement.current.style.color='orange'
    refELement.current.value="Mehar"
  }

  return (
    <>
      <h1>Aiz</h1>
      <input type="text" ref={refELement} value={name} placeholder='Enter Your Name' onChange={(e)=>{
        setName(e.target.value)
      }} />
      <button onClick={namesetter}>Reset</button>
      <button onClick={handleinput}>Handle it</button>
    </>
  )
}

export default App
