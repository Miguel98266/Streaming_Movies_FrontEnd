import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { Rate } from "./Rate";
export const Card = ({ _id, title, image, description, rating }) => {
  const avg=rating.reduce((a, b) => a + b.rate, 0) / rating.length;
  return (
    <Link to={`/movies/${_id}`} className="link text-black">
      <div className="col">
        <div className="card h-100">
          <img
            src={image}
            className="card-img-top"
            style={{ maxHeight: "10.3rem" }}
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* {JSON.stringify(avg)} */}
             <Rate review={avg}  />
            <h5 >{rating.length} Reviews </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};
