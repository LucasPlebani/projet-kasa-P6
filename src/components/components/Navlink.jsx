import React from 'react'
import navlink from '../assets/Nav-link.png'
import '../styles/home.sass'
import { Link } from 'react-router-dom'

function Navlink () { 

    return (
        <div className='navbar-logo'>
        <img src={navlink} alt='nav-link' className='Nav-Link' />
            <ul className='move-navbar'>

                <li className='red-color navbar '>  Accueil </li>
                <li > 
                <Link to='/about'className='red-color navbar li-style'>  A propos </Link>
                </li>
            </ul> 
        </div>
    ) 

}
export default Navlink; 