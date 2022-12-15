import "./logo.css";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import useForm from "../hooks/useForm";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../graphql/Queries";

export const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);
  const onVerifyUser = async (e) => {
    e.preventDefault();
    const { data } = await loginQuery({
      variables: { email, password },
    });
    console.log(isValid);
    if (data) {
      if (data.login.isValid) {
        loginUser(data.login.token);
        navigate("/movies");
      } else if (data.login == null || !data.login.isValid) {
        setIsValid(true);
        setTimeout(() => {
          setIsValid(false);
        }, 3000);
      }
    }
  };
  const { input, handleInputChange, handleSubmit } = useForm(onVerifyUser, {
    email: "",
    password: "",
  });
  const { email, password } = input;
  const [loginQuery, { data, error }] = useLazyQuery(LOGIN, {
    variables: { email, password },
  });
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="login__form">
        <div className="login__box">
          <h2>Sign In</h2>
          {isValid && (
              <div className="alert alert-danger " role="alert">
                Sorry, we can't find an account with this email address. Please
                try again or  <Link to="#">create a new account</Link>
              </div>
            )}
          <form onSubmit={onVerifyUser}>
            <div className="input__wrap">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input__wrap">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input__wrap">
              <button type="submit">Sign In</button>
            </div>
            
            <div className="support">
              <div className="remember">
                <span>
                  <input type="checkbox" />
                </span>
                <span>Remember me</span>
              </div>
              <div className="need_help">Need Help?</div>
            </div>
            <div className="login__footer">
              <div className="sign__up">
                <p>¿New to Netflix? </p>
                <Link to="#">Sign up now</Link>
              </div>
            </div>
            <div className="terms">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <Link to="#">Learn more.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
