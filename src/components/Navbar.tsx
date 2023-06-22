import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import logo from '../../public/rock-paper-scissors.png';


function Navbar() {
  return (
    <nav className='navbar-list'>
      <ul className='navbar-links'>
      <li>
          <img src={logo} alt = "Logo" className='logo'/>
        </li>
        <li>
          <Link to="/">Find Salon</Link>
        </li>
       
        <li>
          <Link to="/about">About</Link>
        </li>
      
      </ul> 
    </nav>
  );
}

export default Navbar;