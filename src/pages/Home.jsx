import '../components/styles/home.sass'
import '../components/styles/card.sass'
import Navlink from '../components/components/Navlink'
import background from '../components/assets/Backgroud.png'
import Footer from  "../components/components/Footer"
import React from 'react'
import lodging from "../data/lodging.json"
import Card from '../components/components/Card'




export default function Home() {
    return (
        <div className='Home-page'>
           <Navlink />
              <div className='back-home'>
                <img src={background} alt='nav-link' className='background-top'  />
                <p className='white-color text-over'>Chez vous, partout et ailleurs</p>
             </div>  
                <div id='gallery'>
                    
                    <Card lodging={lodging} />
                </div>
            <Footer />
            
            
        </div>
    )
}
