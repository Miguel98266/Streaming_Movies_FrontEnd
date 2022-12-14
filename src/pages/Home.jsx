import React, { useEffect } from "react";
import { Card } from "../components/Card";
import { GET_MOVIES } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";

export const Home = () => {
  useEffect(() => {
    getMovies();
  }, []);

  const [getMovies, { data, error }] = useLazyQuery(GET_MOVIES);

  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {data &&
          data.getMovies.map(({ _id, title, description, image }) => (
            <Card
              key={_id}
              title={title}
              description={description}
              image={image}
            />
          ))}
      </div>
    </div>
  );
};
