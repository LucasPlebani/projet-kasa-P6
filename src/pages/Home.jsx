import '../components/styles/home.sass'
import '../components/styles/card.sass'
import Navbar from '../components/components/Navbar'
import background from '../components/assets/Backgroud.png'
import Footer from "../components/components/Footer"
import React from 'react'
import lodging from "../data/lodging.json"
import CardLodging from '../components/components/Card';





export default function Home() {
   

    return (
        <div className='Home-page'>
            <Navbar />
            <div className='back-home'>
                <img src={background} alt='nav-link' className='background-top' />
                <p className='white-color text-over'>Chez vous, partout et ailleurs</p>
            </div>
            <div id='gallery'>
                {lodging.map((data) => (
                    <CardLodging lodging={data} key={data.id} />
                    
                ))}
                
            </div>

            <Footer />


        </div>
    )
    
}
