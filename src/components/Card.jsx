import React from "react";

export const Card = ({title,image,description}) => {
  return (
    <div class="col">
    <div class="card h-100">
      <img src={image} class="card-img-top" alt="..." />
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
