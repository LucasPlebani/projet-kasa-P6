import React from "react";
import redStar from "../assets/red_star.png"
import greyStar from "../assets/grey_star.png"


function Rating(props) {
  const range = [1, 2, 3, 4, 5];
  const rating = props.rating;

  return (
    <div className="rating">
      {range.map((rangeElem) => (
        <span key={rangeElem.toString()}>
          {rating >= rangeElem ? (
            <img src={redStar} alt="Star active" />
          ) : (
            <img src={greyStar} alt="Star inactive" />
          )}
        </span>
      ))}
    </div>
  );
}

export default Rating;