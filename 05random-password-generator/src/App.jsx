import React, { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const inputRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed)  str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, specialCharAllowed])

  useEffect(()=>{passwordGenerator()},[length, numberAllowed, specialCharAllowed])

  const copyToClipboard = useCallback(()=>{
    inputRef.current?.select() // for the selection of the text
    window.navigator.clipboard.writeText(password)    // writting to clipboard
    .then(()=>{
      console.log("password copied", password)
    })
    .catch((err)=>{
      console.error("Failed to copy password", err)
    })
  },[password])
  return (

    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-center my-3 text-white'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={inputRef}/>
      <button onClick={copyToClipboard} className='copy-button shrink-0 mx-2 rounded-lg'>Copy</button>

     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        id='length'
        min={8}
        max={30}
        value={length}
        onChange={(e)=> setLength(e.target.value)}
        />
        <label htmlFor="length">Length: {length}</label>
      
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" name="numbers" id="numbers" 
        onChange={()=> setNumberAllowed((prev)=> !prev)}
        />
        <label htmlFor="numbers">Numbers</label>
      
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" name="chars" id="chars" 
        onChange={()=> setSpecialCharAllowed((prev)=>!prev)}
        />
        <label htmlFor="chars">Special Char</label>
      
      </div>
     </div>
   </div>
    </>
   
  )
}

export default App
