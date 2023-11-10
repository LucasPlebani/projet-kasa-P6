import React from 'react'
import '../components/styles/error.sass'
import Navbar from '../components/components/Navbar'
import Footer from '../components/components/Footer'

import { Link } from 'react-router-dom';
  
export default function Error () {
    return (
        <div className='Error-page'>
             <Navbar />
            
            <h1 className='red-color p404 flex margin-bottom '>404</h1>
            <p className='red-color p flex margin-bottom '> Oups! la page que vous demandez n'existe pas.</p>
            <p >
            <Link to='/'className='red-color return flex margin-bottom'>Retourner sur la page d'accueil</Link>
            </p>
            <Footer />
        </div>
    )
}