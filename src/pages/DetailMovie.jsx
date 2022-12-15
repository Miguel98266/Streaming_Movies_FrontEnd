import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_MOVIEBYID } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { Rate } from "../components/Rate";
import './DetailMovie.css'

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
                <h3 className="text-white my-5">
                  {data.getMovieById.description}
                </h3>
                <h3 className="text-white">
                  Realease Date:{" "}
                  {new Date(data.getMovieById.dateRelease).getFullYear() +
                    "-" +
                    new Date(data.getMovieById.dateRelease).getMonth()}
                </h3>
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
          <form className="container bg-white rounded mt-4">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ">
              Rating
              </label>
              
            <div className="rating"> 
                <input type="radio" name="rating" value="5" id="5"/><label htmlFor="5">☆</label> 
                <input type="radio" name="rating" value="4" id="4"/><label htmlFor="4">☆</label> 
                <input type="radio" name="rating" value="3" id="3"/><label htmlFor="3">☆</label> 
                <input type="radio" name="rating" value="2" id="2"/><label htmlFor="2">☆</label> 
                <input type="radio" name="rating" value="1" id="1"/><label htmlFor="1">☆</label>
            </div>
             
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
               Review
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
