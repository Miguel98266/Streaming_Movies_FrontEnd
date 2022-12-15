import './header.css'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

export const Header = () => {
  const { isAuth, logout,user } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(true)
  let location = useLocation();
  
  const verifyLocation= ()=>{
    if (location.pathname==='/') {
      setIsShow(false)
      
    }else{
      setIsShow(true)
      
    }
  }
  useEffect(() => {
    verifyLocation()
  }, [verifyLocation])
  
  
  return  isShow &&  
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="/movies">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              height="30"
              alt=""
              loading="lazy"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link to='/movies' className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies/createMovie">
                  New Movie
                </Link>
              </li>
            </ul>
            {isAuth && <p className="my-2 my-lg-0 text-white">
              Welcome, {user.name}
            </p>
            }
            
            <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={logout}>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
};
