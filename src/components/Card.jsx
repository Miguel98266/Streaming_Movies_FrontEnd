import React from "react";
import './Card.css'
import { Link } from "react-router-dom";

export const Card = ({_id,title,image,description}) => {
  return (
    <Link to={'/detail-movie'}  state={_id} className="link text-black">
    <div class="col">
    <div class="card h-100" >
      <img src={image} class="card-img-top" style={{maxHeight: '10.3rem'}} alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
         {description}
        </p>
      </div>
    </div>
    </div>
    </Link>
  );
};
