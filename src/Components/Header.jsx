import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
  <div className="container mt-2">
    <div className="d-flex flex-row justify-content-between align-items-center">
      <div className="mt-2">
        <h6>Company Name</h6>
      </div>
    <div>
      <nav>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/features'>Features</NavLink>
         <NavLink to='/enterprise'>Enterprise</NavLink>
         <NavLink to='/support'>Support</NavLink>
      </nav>
    </div>
   </div>
   <hr />
  </div>
  )
}

export default Header