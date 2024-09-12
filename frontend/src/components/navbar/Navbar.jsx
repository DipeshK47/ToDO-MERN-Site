import React from 'react';
import './Navbar.css';
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
const Navbar = () => {
  // Correctly access the isLoggedIn state from auth slice
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(authActions.logout())
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <b>
            <MdOutlineCollectionsBookmark className="icon" /> &nbsp; ToDO
          </b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link btn-nav" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link btn-nav" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link btn-nav" to="/todo">
                ToDo
              </Link>
            </li> 
            {!isLoggedIn && (
              <>
                <li className="nav-item mx-2">
                  <Link className="nav-link btn-nav" to="/signup">
                    SignUp
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link btn-nav" to="/signin">
                    SignIn
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <>
                <li className="nav-item mx-2" onClick={logout}>
                  <Link className="nav-link btn-nav" to="/logout">
                    Logout
                  </Link>
                  
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;