import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>Navbar
              <Link to="/signup">SignUp</Link>
         <Link to="/signin">Signin</Link>
    </div>
  )
}

export default Navbar