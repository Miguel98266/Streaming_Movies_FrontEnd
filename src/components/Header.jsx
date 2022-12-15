import './header.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isShow, setIsShow] = useState(true)
  let location = useLocation();
  console.log(location.pathname);
  
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
          <a className="navbar-brand" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              height="30"
              alt=""
              loading="lazy"
            />
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  New Movie
                </a>
              </li>
            </ul>
            <p className="my-2 my-lg-0 text-white">
              Welcome, Name
            </p>
            <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
};
