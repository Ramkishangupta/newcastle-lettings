import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './page/HOME/Home'
import SearchProperties from './components/SearchProperties'

// import Service from './page/SERVICES/Service'
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Home></Home> */}
        {/* <Service></Service> */}
        <SearchProperties/>
      </div>
    </BrowserRouter>
  )
}

export default App
