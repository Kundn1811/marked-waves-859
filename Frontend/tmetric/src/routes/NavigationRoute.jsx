import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRoute from './AppRoute'
import AuthRoute from './AuthRoute'
import FrontRoute from './FrontRoute'

const NavigationRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='*' element={<FrontRoute/>}/>
            <Route path='/auth/*' element={<AuthRoute/>}/>
            <Route path='/app/*'element={<AppRoute/>} />
        </Routes>


    </div>
  )
}

export default NavigationRoute