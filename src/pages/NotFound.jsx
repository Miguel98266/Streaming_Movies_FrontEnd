import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import "./NotFound.css";
export const NotFound = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="background  text-white d-flex flex-column align-items-center  justify-content-center text-center">
      <div className="text-no-found">
        <p className="fs-1 fw-bold">Lost your way?</p>
        <p className="fs-2 pb-3">
          Sorry, we can't find that page. You'll find loads to explore on the
          home page
        </p>
        {isAuth ? (
          <Link to="/movies" className="button-not-found fs-5 fw-bold ">
            Home
          </Link>
        ) : (
          <Link to="/" className="button-not-found fs-5 fw-bold ">
            Login
          </Link>
        )}
        <div className="text-white mt-5 ">
          <p className="fs-2 d-inline error">Código de error </p>{" "}
          <span className="fs-3 fw-bold">NSES-404</span>
        </div>
      </div>
    </div>
  );
};
