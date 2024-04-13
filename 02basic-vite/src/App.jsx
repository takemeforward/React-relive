import { useState } from 'react'
function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    // console.log('Value added', counter)
    if(counter<20){
      counter = counter + 1;
      setCounter(counter)
    }
  }
  const removeValue = ()=>{
    // console.log("Value removed", counter)
    if(counter>0){
      counter = counter -1;
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Takemeforward</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>+</button> <br /><p></p>
      <button onClick={removeValue}>-</button>
    </>
  )
}

export default App
