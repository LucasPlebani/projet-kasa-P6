import "../components/styles/collapse.scss"
import React from "react";
import navlink from '../components/assets/Nav-link.png'
import Collapse from "../components/components/Collapse"
import Background_about from "../components/assets/Background_about.jpg"
import Footer from '../components/components/Footer'
import { Link } from 'react-router-dom'


function About() {
    // contenu qui sera affiché dans les Collapse
    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service   = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <div className='about_class'>      
                <div className='navbar-logo'>
            <img src={navlink} alt='nav-link' className='Nav-Link' />
                <ul className='move-navbar'>
                    <li>
                    <Link to='/'className='red-color navbar li-style'>  Accueil </Link>
                        </li>
                    <li className='red-color navbar li-under'>A propos</li>
                </ul> 
            </div>    
              <div className='background_about'>
                <img src={Background_about} alt='nav-link' className='back-about' />
             </div>  
               
        
                <div className='about'>
                    <div><Collapse title="Fiabilité" content={fiabilite} /></div>
                    <div><Collapse title="Respect" content={respect} /></div>
                    <div><Collapse title="Service" content={service} /></div>
                    <div><Collapse title="Sécurité" content={securite} /></div>
                </div>
                
                <Footer />
             
        </div>
    )
}

export default About;