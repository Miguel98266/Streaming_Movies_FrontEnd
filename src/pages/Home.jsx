import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { GET_MOVIES } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import './Home.css'
export const Home = () => {
  useEffect(() => {
    getMovies();
  }, []);

  const [getMovies, { data, error }] = useLazyQuery(GET_MOVIES);

  return (
    <div className="container mt-4">
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {data &&
          data.getMovies.map(({ _id, title, description, image,rate }) => (
            <Card
              key={_id}
              _id={_id}
              title={title}
              description={description}
              image={image}
              rating={rate}
            />
          ))}
      </div>
    </div>
  );
};
