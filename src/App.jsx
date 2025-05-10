import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './page/HOME/Home'

// import Service from './page/SERVICES/Service'
function App() {
  return (
    <BrowserRouter>
      <div>
        <Home></Home>
        {/* <Service></Service> */}
      </div>
    </BrowserRouter>
  )
}

export default App
