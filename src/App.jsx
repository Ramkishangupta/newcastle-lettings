import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/HOME/Home'
import Service from './page/SERVICES/Service'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/services' element={<Service/>}></Route>
    </Routes>
  )
}

export default App
