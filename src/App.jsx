import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/HOME/Home'
import Service from './page/SERVICES/Service'
import Property from './page/PROPERTY/Property'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/services' element={<Service/>}></Route>
      <Route path='/property' element={<Property/>}></Route>
    </Routes>
  )
}

export default App
