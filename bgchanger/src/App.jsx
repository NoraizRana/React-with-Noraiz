
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('lightgreen');
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center" style={{ backgroundColor: color }}>
      <div className="mb-10 h-14 w-full flex flex-wrap items-center justify-center bg-cyan-400 text-black font-bold">
        <div className='flex flex-wrap  gap-8'>
          <button className='w-18 h-9 rounded-2xl bg-purple-700 text-white px-4'
            onClick={() => setColor("purple")} >Purple</button>
          <button className='w-18 h-9 rounded-2xl bg-red-600 text-white px-4'
            onClick={() => setColor("red")} >Red</button>
          <button className='w-18 h-9 rounded-2xl bg-black text-white px-4'
            onClick={() => setColor("black")} >Black</button>
          <button className='w-18 h-9 rounded-2xl bg-fuchsia-700 text-white px-4'
            onClick={() => setColor("fuchsia")} >Fuchsia</button>
          <button className='w-18 h-9 rounded-2xl bg-orange-600  text-white px-4'
            onClick={() => setColor("orange")} >Orange</button>
          <button className='w-18 h-9 rounded-2xl bg-blue-600 text-white px-4'
            onClick={() => setColor("blue")} >Blue</button>
          <button className='w-18 h-9 rounded-2xl bg-pink-600  text-white px-4'
            onClick={() => setColor("pink")} >Pink</button>
          <button className='w-18 h-9 rounded-2xl bg-yellow-500 text-white px-4'
            onClick={() => setColor("yellow")} >Yellow</button>
          <button className='w-18 h-9 rounded-2xl bg-gray-600 text-white px-4'
            onClick={() => setColor("gray")} >Gray</button>
        </div>
      </div>
    </div>
  );
}

export default App;