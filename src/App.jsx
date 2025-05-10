import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import Home from './page/HOME/Home'
import SearchPropertiesSection from './page/HOME/Sections/SearchPropertiesSection'

// import Service from './page/SERVICES/Service'
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Home></Home> */}
        {/* <Service></Service> */}
        { <><SearchPropertiesSection></SearchPropertiesSection></>}
      </div>
    </BrowserRouter>
  )
}

export default App
