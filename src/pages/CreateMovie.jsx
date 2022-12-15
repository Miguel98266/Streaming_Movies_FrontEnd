import React from "react";
import useForm from "../hooks/useForm";
import { CREATE_MOVIE } from "../graphql/Mutation";
import { GET_MOVIES } from "../graphql/Queries";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
export const CreateMovie = () => {
    const navigate = useNavigate();
    const [createMovie] = useMutation(CREATE_MOVIE, {
        refetchQueries: [{query: GET_MOVIES}]
    });
  const onCreateMovie = async (e) => {
    e.preventDefault();
    const { data } = await createMovie({
      variables: { title,description,image,dateRelease },
    });
    if (data) {
      if (data.createMovie) {
        navigate("/movies");
      }
    }
  };
  const { input, handleInputChange, handleSubmit } = useForm(onCreateMovie, {
    title: "",
    description: "",
    image: "",
    dateRelease: "",
  });
  const { title, description, image, dateRelease } = input;
  return (
    <form className="container" onSubmit={onCreateMovie}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label text-white">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label text-white">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          name="description"
          value={description}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label text-white">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={image}
          onChange={(e) => handleInputChange(e)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="dateRelease" className="form-label text-white">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          name="dateRelease"
          value={dateRelease}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
