import ArrowRight from '../assets/chevronRight.png'
import ArrowLeft from '../assets/chevronLeft.png'
import React, { useState } from 'react';
import "../styles/Slideshow.sass"


function Slideshow({ pictures }) {
 
    const [index, setIndex] = useState(0);
  
    const viewPictures = pictures.length; // La longueur de pictures
    
    

    const prevView = () => {
      if (index === 0) {
        setIndex(viewPictures - 1);
      } else {
        setIndex(index - 1);
      }
    };
  
    const nextView = () => {
      if (index === viewPictures - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    };


  
    
  
    return (
      <div className='Slideshow'>
        <div className='displayPicture'>
          <img src={pictures[index]} className='imageView' key={"slide" + index} />
          <button className='hiddenbtn' onClick={prevView}>
            <img src={ArrowLeft} className='ArrowLeftPict buttonCarousel' alt='flèche de gauche' />
          </button>
          <button className='hiddenbtn' onClick={nextView}>
            <img src={ArrowRight} className='ArrowRightPict buttonCarousel' alt='flèche de droite' />
          </button>
        </div>
        <div className='Comptor'>
          {index + 1}/{viewPictures}
        </div>
      </div>
  );
  
  }
  
  export default Slideshow;
  