import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const ReactElement = React.createElement(
  'a',
  {href: 'http://google.com/', target: '_blank'},
  'Click here to visit google.'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  ,
  
)
