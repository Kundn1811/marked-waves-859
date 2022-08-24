import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from '../pages/Homepage'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
const Allroutes = () => {
  return (
    <Routes>
        <Route path= "/" element = {<HomePage/>} />
        <Route path= "/signin" element = {<Signin/>} />
        <Route path= "/signup" element = {<Signup />} />
        
    </Routes>
  )
}

export default Allroutes