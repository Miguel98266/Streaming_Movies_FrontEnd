import "./logo.css";

export const Login = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <div className="login__form">
        <div className="login__box">
          <h2>Inicia sesión</h2>
          <form>
            <div className="input__wrap">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input__wrap">
              <input type="text" placeholder="Contraseña" />
            </div>
            <div className="input__wrap">
              <button>Inicia sesión</button>
            </div>
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
                <a href="#">Suscríbete ahora.</a>
              </div>
            </div>
            <div className="terms">
              <p>
                Esta página está protegida por Google reCAPTCHA para comprobar
                que no eres un robot. <a href="#">Más info.</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
