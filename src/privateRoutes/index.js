import React from 'react'
import {Routes,Route} from 'react-router'
import Home from './Home'
import Details from './Details'

function index() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail/:id' element={<Details/>} />
      
    </Routes>
    
  )
}

export default index