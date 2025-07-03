import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0);
  const [add, setadd]=useState(0);
  function addvalue(){
    setCount(count +1);
    console.log("Value Added");
  }
  const learning=useCallback(()=>{

  },[count])

  return (
    <>
      <h1>{count}</h1>
      <Child learning={learning} count={count}/>
      <button onClick={addvalue}>Add</button>
      <h1>{add}</h1>
      <button onClick={()=>setadd(add+2)}>Add 2</button>
    </>
  )
}

export default App
