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

    if (data) {
      if (data.login) {
        loginUser(data.login.token);
        navigate("/movies");
      } else if (data.login == null) {
        setIsValid(true);
        setLogin({
          email: "",
          password: "",
        });
      }
    }
  };
  const { input, handleInputChange, handleSubmit } = useForm(onVerifyUser, {
    email: "",
    passwordbody: "",
  });
  const {email,passwordbody}=input
  const [loginQuery, { data, error }] = useLazyQuery(LOGIN, {
    variables: { email, passwordbody },
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
          <h2>Inicia sesión</h2>
          <form>
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
                type="text"
                placeholder="Contraseña"
                name="passwordbody"
                value={passwordbody}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="input__wrap">
              <button onClick={handleSubmit}>
                Inicia sesión
              </button>
            </div>
            {isValid && (
              <h3 className="text-red-500 mb-2">Invalid Credencials!!</h3>
            )}
            <div className="support">
              <div className="remember">
                <span>
                  <input type="checkbox" />
                </span>
                <span>Recuérdame</span>
              </div>
              <div className="need_help">¿Necesitas ayuda?</div>
            </div>
            <div className="login__footer">
              <div className="sign__up">
                <p>¿Primera vez en Netflix? </p>
                <Link href="#">Suscríbete ahora.</Link>
              </div>
            </div>
            <div className="terms">
              <p>
                Esta página está protegida por Google reCAPTCHA para comprobar
                que no eres un robot. <Link to="#">Más info.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
