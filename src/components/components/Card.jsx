import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import "../styles/card.sass"


function CardLodging(props) {
  const { lodging } = props; 
  const { id, cover, title } = lodging;
 
   

        return (
    
             <Link className='lodging_div' to={`/lodging/${id}`}>
              <div className='overlay'>
              <div className='gradient-overlay'></div> 
              <img className="imgCard" src={cover} alt={title} />
              </div>
              <h3 className="h3Card">{title}</h3>
            </Link>
         
        );
      


}

export default CardLodging;
