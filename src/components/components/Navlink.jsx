import React from 'react';
import navlink from '../assets/Nav-link.png';
import { NavLink } from 'react-router-dom';
import '../styles/Navlink.sass'

function Navlink() {
  return (
    <div className='navbar-logo'>
      <img src={navlink} alt='nav-link' className='Nav-Link' />
      <ul className='move-navbar'>
        <li className='red-color navbar'>
    
          <NavLink to='/' className='red-color navbar li-style' activeClassName='active'>
            Accueil
          </NavLink>
        </li>
        <li>
  
          <NavLink to='/about' className='red-color navbar li-style' activeClassName='active'>
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navlink;
