import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./../../images/logo-dark.webp";
import { AuthContext } from "./../state/AuthLogin";

export default function Navbar(props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLogin = authCtx.isLoggedIn;
  const logout = () => {
    authCtx.logout();
    navigate("/");
  };
  console.log(authCtx);
  return (
    <nav className="navbar navbar-expand-lg" style={{ height: "15vh", backgroundColor: "#131722" }}>
      <div style={{height : 'inherit'}} className="d-flex justify-content-between container align-items-center">
      <button className="navbar-toggler bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-info"></span>
    </button>
    <div style={{height : 'inherit'}} className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="px-2">
            <img src={logo} alt="logo" />{" "}
          </li>
          {isLogin ? (
            <React.Fragment>
              <li className="px-2">
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li className="px-2">
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li className="px-2">
                <NavLink to="/tv">Tv</NavLink>
              </li>
            </React.Fragment>
          ) : (
            ""
          )}
        </ul>
        <ul className="navbar-nav">
          <li className="px-2">
            <a href="www.google.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="px-2">
            <a href="www.face.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="px-2">
            <a href="www.google.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          {isLogin ? (
            <li onClick={logout} className="px-2">
              <button className="btn btn-dark">Log out</button>
            </li> 
          ) : (
            <li className="px-2">
              <NavLink to="/Signup">Sign up</NavLink>
            </li>
          )}
        </ul>
        </div>
      </div>
    </nav>
  );
}
