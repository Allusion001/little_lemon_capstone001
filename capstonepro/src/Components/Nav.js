import React from 'react';
import "./Nav.css"
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <>
        <ul className='navigation'>
            <li><Link to="/">Home</Link></li>

            <li><Link to="/">About</Link></li>
            <li><Link to="/">Menu</Link></li>
            <li><Link to="c"> Reservations</Link></li>
            <li><Link to="/">Order Online</Link></li>
            <li><Link to="/">Login</Link></li>
        </ul>
    </>
  )
}

export default Nav