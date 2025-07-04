import { useState, useCallback, useEffect, useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [password, setPassword] = useState("");
  const [noallowed, setNoallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);

  const passgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (noallowed) str += "0123456789"
    if (charallowed) str += "!#$%^&*()?><{}~"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, noallowed, charallowed, setPassword])

  useEffect(() => {
    passgenerator()
  }, [noallowed, length, charallowed,passgenerator])

  const refElement = useRef(null);
 const copier=useCallback(()=>{

  refElement.current?.select()
  refElement.current?.setSelectionRange(0,54)
  window.navigator.clipboard.writeText(password)

 }, [password])

  return (
    <>
      <h1 className='text-white text-3xl font-semibold' >Password Generator</h1>
      <div className='max-w-lg bg-slate-700 m-auto mt-4 py-3'>
        <div className='flex justify-center items-center'>
          <input type="text" ref={refElement} value={password} readOnly className='bg-white text-start text-black w-96 h-12 rounded-xl px-2' />
          <button className='bg-blue-600 rounded-xl outline-none px-4 py-2 text-white font-semibold mx-2 font-sans' onClick={copier} >Copy</button>
        </div>
        <div className='flex items-center gap-x-2 justify-center p-3'>
          <input type="range"
          value={length}
            min={8}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}

          />
          <label className='text-orange-600 font-semibold'>Length: {length}</label>
          <input type="checkbox" value={noallowed} defaultChecked={noallowed}
          onChange={()=>{
            setNoallowed((prev)=>(!prev));
          }} />
          <label className='text-orange-600 font-semibold'>numbers</label>
          <input type="checkbox" value={charallowed}
           defaultChecked={charallowed}
          onChange={()=>{
            setCharallowed((prev)=>(!prev));
          }} />
          <label className='text-orange-600 font-semibold'>characters</label>
        </div>
        <div>

        </div>

      </div>
    </>

  )
}

export default App
