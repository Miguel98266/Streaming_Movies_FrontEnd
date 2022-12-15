import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_MOVIEBYID } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { Rate } from "../components/Rate";
import { FormReview } from "../components/FormReview";

export const DetailMovie = () => {
  useEffect(() => {
    getMovie();
  }, []);
  const { movieId } = useParams();
  const [getMovie, { data, error, loading }] = useLazyQuery(GET_MOVIEBYID, {
    variables: { _id: movieId },
  });

  return (
    <div className="container ">
      <div className="row">
        {loading ? (
          <div className="text-center">
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "10rem", height: "10rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          data && (
            <>
              <div className="col-12 col-md-6">
                <img
                  className="rounded img-fluid"
                  //   style={{ maxHeight: "40rem" , maxWidth: "40rem" ,minHeight: "30rem" , minWidth: "40rem" }}
                  src={data.getMovieById.image}
                />
              </div>
              <div className="col-12 col-md-6 ">
                <h1 className="text-white text-capitalize">
                  {data.getMovieById.title}
                </h1>
                <div className="d-inline">
                  <Rate
                    review={
                      data.getMovieById.rate.reduce((a, b) => a + b.rate, 0) /
                      data.getMovieById.rate.length
                    }
                  />
                  <h3 className="text-white">
                    {" "}
                    {data.getMovieById.rate.length} Reviews{" "}
                  </h3>
                </div>
                <p className="text-white my-3">
                  {data.getMovieById.description}
                </p>
                <p className="text-white fw-bold">
                  Realease Date:{" "} <span className="fw-normal"> {new Date(data.getMovieById.dateRelease).getFullYear() +
                    "-" +
                    new Date(data.getMovieById.dateRelease).getMonth()}</span>
                 
                </p>
              </div>
            </>
          )
        )}
        <div className="col-12 mt-4">
          <ol className="list-group ">
            <li className="list-group-item d-flex ">
              <h2>Reviews</h2>
            </li>

            {data ? (
              data.getMovieById.rate.map(
                ({ _id, description, rate, date, user }) => (
                  <li key={_id} className="list-group-item d-flex  gap-5">
                    <div className="ms-2 ">
                      <div className="fw-bold"> Rating </div>
                      {rate}
                      <Rate review={rate} />
                    </div>
                    <div className="ms-2 ">
                      <div className="fw-semibold"> {description} </div>
                      Review by {user.name}{" "}
                      {new Date(date).toLocaleDateString("pt-PT")}
                    </div>
                  </li>
                )
              )
            ) : (
              <h1 className="text-white text-capitalize">No hay nada</h1>
            )}
          </ol>
          <FormReview/>
        </div>
      </div>
    </div>
  );
};
