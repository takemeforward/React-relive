import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const changeColor = (colorVal)=>{
    setColor(colorVal)
  }
  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-8 py-4 rounded-3xl'>
          <button onClick={() => changeColor("red")} className='outline-none px-4 rounded-lg py-1 bg-red-500 hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>Red</button>
          <button onClick={() => changeColor("blue")} className='outline-none px-4 rounded-lg py-1 bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Blue</button>
          <button onClick={() => changeColor("green")} className='outline-none px-4 rounded-lg py-1 bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'>Green</button>
          <button onClick={() => changeColor("yellow")} className='outline-none px-4 rounded-lg py-1 bg-yellow-500 hover:bg-yellow-600 text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50'>Yellow</button>
          <button onClick={() => changeColor("violet")} className='outline-none px-4 rounded-lg py-1 bg-violet-500 hover:bg-violet-600 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50'>Violet</button>
          </div>
      </div>
    </div>
  )
}

export default App
