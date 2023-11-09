import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navlink from "../components/components/Navlink";
import Footer from "../components/components/Footer";
import Slideshow from "../components/components/SlideshowCarousel";
import Collapse from "../components/components/Collapse"
import Tags from "../components/components/Tags"
import Rating from "../components/components/Rating"
import "../components/styles/Slideshow.sass"
import "../components/styles/lodging.sass"


function Lodging() {
  const [searchParams] = useSearchParams();
  const [idLogement] = useState(searchParams.get('_id'));
  const [lodging, setLodging] = useState(null);

  useEffect(() => {
    // Chargement JSON de manière asynchrone
    import("../data/lodging.json")
      .then((module) => {
        // Recherche par ID
        const lodgingData = module.default;
        const selectedLodging = lodgingData.find(element => element.id === idLogement);
        setLodging(selectedLodging);
      })
      .catch((error) => {
        console.error("Erreur de chargement du fichier JSON", error);
      });
  }, [idLogement]);

  if (!lodging) { //si chargement trop long affichage Loading
    return <div>Loading...</div>;
  }


  // importation Equipement + description //
  const equipements = lodging.equipments.map((element, index) => (
    <li className='description-content' key={"equip-" + index.toString()}>{element}</li>
  ));


  return (
    <div className="lodgingPage">
      <Navlink />
      <Slideshow pictures={lodging.pictures} />
      <div className='h1-Host'>
        <div className='hostElement hostRating red-color'>
          {lodging.host.name}
          <img src={lodging.host.picture} alt='picture lodging' className='hostPicture' />
          
        </div>
        <div className='lodgingP red-color'>
          <h1>{lodging.title}</h1>
        </div>
      </div>
      <h4 className='descriptionP red-color'>{lodging.description}</h4>
     
      <div className='rating-tags'>
      <Tags tags={lodging.tags} />
      <div className='rating hostRating'>
      <Rating rating={lodging.rating} />
      </div>
      </div>

      <div className='collapseLodging'>
        <Collapse title="Description" content={lodging.description} label="description" />
        <Collapse title="Equipements" content={equipements} className='collapseEquipement' label="equipements"/>
      </div>
      
      <Footer />
    </div>
  )
}
export default Lodging;