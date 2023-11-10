import React from 'react';
import KasaLogo from '../assets/Nav-link.png';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.scss'

function Navbar() {
  return (
    <header className='navbar-logo'>
      <img src={KasaLogo} alt='logo de kasa' className='Logo-Nav' />
      
     <nav className='navbar'>
      <NavLink to='/'>Accueil</NavLink>
      <NavLink to='/about'> A propos</NavLink>
    
      </nav> 
  
    </header>
  );
}

export default Navbar;
