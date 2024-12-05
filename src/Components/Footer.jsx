import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
<div className="container">
 <nav>  
    <div className="d-flex flex-row justify-content-evenly">
      <div className="d-flex flex-column">
          <h5>Features</h5>
         <NavLink to='/cool'>Cool Stuff</NavLink>
         <NavLink to='/random'>Random Feature</NavLink>
         <NavLink to='/team'>Team Feature</NavLink>
      </div>

      <div className="d-flex flex-column">
         <h5>Resources</h5>
         <NavLink to='/resource'>Resource</NavLink>
         <NavLink to='/resource-names'>Resource Name</NavLink>
      </div>
     
      <div className="d-flex flex-column">
         <h5>About</h5>
         <NavLink to='/aboutteam'>Team</NavLink>
         <NavLink to='/locations'>Location</NavLink>
      </div>

    </div>
  </nav>
</div>
    
  )
}

export default Footer