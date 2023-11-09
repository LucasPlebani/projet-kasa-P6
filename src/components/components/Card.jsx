import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import "../styles/card.sass"

function CardLodging(props) {
  const { lodging } = props; // Assuming you receive the lodging array as a prop

  return (
    <div className='logements'>
      {lodging.map((lodging) => {
        const { id, cover, title } = lodging;

        return (
          <div className="lodgingElement" key={id}>
            <Link to={{ pathname: "/lodging", search: `?_id=${id}` }}>
              <div className='overlay'>
              <div className='gradient-overlay'></div> 
              <img className="imgCard" src={cover} alt={title} />
              </div>
              <h3 className="h3Card">{title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CardLodging;
