import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './page/HOME/Home'
import Service from './page/SERVICES/Service'
import Property from './page/PROPERTY/Property'
import SearchProperties from './page/SEARCH PROPERTIES';
import Contact from './page/CONTACT US';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/services' element={<Service/>}></Route>
      <Route path='/property' element={<Property/>}></Route>
      <Route path="/contact" element={<Contact />} />
      <Route path='/searchproperties' element={<SearchProperties/>}></Route>
    </Routes>
  )
}

export default App
