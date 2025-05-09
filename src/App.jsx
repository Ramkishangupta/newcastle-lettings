import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './page/HOME/Home'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Home></Home>
      </div>
    </BrowserRouter>
  )
}

export default App
