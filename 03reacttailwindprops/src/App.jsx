import { useState } from 'react'
import './App.css'
import Card from './component/card'
function App() {
  const values = [
    {
    name: "Vishal",
    text: "Fearless dreamer, with a heart full of adventure."
    },
    {
      name: "Raushan",
      text: "Tech enthusiast, always on the cutting edge of innovation."
    }
  ]
  return (
    <>
      <h1>My card componenet is </h1>
      <Card values={values[0]}/>
      <Card values={values[1]}/>
    </>
  )
}

export default App
