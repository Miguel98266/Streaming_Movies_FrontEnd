import React, { useContext, useState } from "react";
import "./FormReview.css";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_RATE } from "../graphql/Mutation";
import { GET_MOVIEBYID } from "../graphql/Queries";
import { AuthContext } from "../context/Auth";
import { useParams } from "react-router-dom";

export const FormReview = () => {
  const { user: userContext } = useContext(AuthContext);
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [input, setInput] = useState({
    description: "",
    rate: 0,
    movie: movieId,
    date: "",
  });
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const [createRate] = useMutation(CREATE_RATE, {
  });
  const onCreateRate = async (e) => {
    e.preventDefault();
    const user = userContext.id;
    const { data } = await createRate({
      variables: { user, description, rate, movie, date },
    });
    console.log(data)
    if (data) {
      if (data.createRate) {
        setInput({
            description:'',
            rate:0,
            date:""
        })
        navigate(`/movies/${movieId}`);
      }
    }
  };
  const { description, rate, date, movie } = input;
  return (
    <form className="container bg-white rounded mt-4" onSubmit={onCreateRate}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label ">
          Rating
        </label>
        <div className="rating">
          <input
            type="radio"
            name="rate"
            value="5"
            id="5"
            onChange={onInputChange}
          />
          <label htmlFor="5">☆</label>
          <input
            type="radio"
            name="rate"
            value="4"
            id="4"
            onChange={onInputChange}
          />
          <label htmlFor="4">☆</label>
          <input
            type="radio"
            name="rate"
            value="3"
            id="3"
            onChange={onInputChange}
          />
          <label htmlFor="3">☆</label>
          <input
            type="radio"
            name="rate"
            value="2"
            id="2"
            onChange={onInputChange}
          />
          <label htmlFor="2">☆</label>
          <input
            type="radio"
            name="rate"
            value="1"
            id="1"
            onChange={onInputChange}
          />
          <label htmlFor="1">☆</label>
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
          name="description"
          onChange={onInputChange}
          value={description}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label text-white">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          name="date"
          value={date}
          onChange={onInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
