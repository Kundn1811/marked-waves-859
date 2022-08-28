import React from 'react'
import { Navigate } from 'react-router-dom'
const RequireAuth = ({children}) => {
 const isAuth = localStorage.getItem("isAuth")
  
    if(!isAuth){
        return <Navigate to="/auth/signin"/>

    }
 return children


}

export default RequireAuth