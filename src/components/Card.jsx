import React from "react";
import './Card.css'
export const Card = ({title,image,description}) => {
  return (
    <div class="col">
    <div class="card h-100" >
      <img src={image} class="card-img-top" style={{maxHeight: '11rem'}} alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
         {description}
        </p>
      </div>
    </div>
    </div>
  );
};
