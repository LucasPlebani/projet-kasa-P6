import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/components/Navbar";
import Footer from "../components/components/Footer";
import Slideshow from "../components/components/SlideshowCarousel";
import Collapse from "../components/components/Collapse"
import Tags from "../components/components/Tags"
import Rating from "../components/components/Rating"
import "../components/styles/Slideshow.sass"
import "../components/styles/lodging.sass"


function Lodging() {
  const { id } = useParams();
  const [lodging, setLodging] = useState(null);

  useEffect(() => {
console.log("ID du logement (avant recherche par ID):", id);


    // Chargement JSON de manière asynchrone
    import("../data/lodging.json")
    
    .then((module) => {
      // Vérification contenu fichier json
      const lodgingData = module.default;
      console.log("Données JSON :", lodgingData);

      //recherche par id 
      const selectedLodging = lodgingData.find(element => element.id === id);
      console.log("Logement sélectionné:", selectedLodging);
        
        // Mise à jour du state avec le logement sélectionné
        setLodging(selectedLodging);
      })
      .catch((error) => {
        console.error("Erreur de chargement du fichier JSON", error);
      });
  }, [id]);

  if (!lodging) {
    // si le logement est null, affichage de Loading
    return <div>Loading...</div>;
  }

  // importation Equipement + description //
  const equipements = lodging.equipments.map((element, index) => (
    <li className='description-content' key={"equip-" + index.toString()}>{element}</li>
  ));


  return (
    <div className="lodgingPage">
      <Navbar />
      <Slideshow pictures={lodging.pictures} />
      
       
       <h1 className='tittle red-color'>{lodging.title}</h1>
       <h4 className='descriptionP red-color'>{lodging.description}</h4>
     
     
      <div className='tags'>
      <Tags tags={lodging.tags} />
      </div>

      <div className='rating-host red-color'>
      <Rating rating={lodging.rating} />
      <div className='host-element'>
         <p className='hostname'>{lodging.host.name} </p>
          <img src={lodging.host.picture} alt='lodging' className='hostPicture' /></div>
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