import React from "react";
//import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: props.mode === "light" ? "#cd9191" : "black" }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler "
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                aria-current="page"
                to="/"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                About
              </NavLink>
            </li>

            {/*<li className="nav-item">
              <NavLink  className="nav-link" to="/" style={{color: props.mode==='light'?'black':'white'}} >
                Contact Us
              </NavLink>
            </li>*/}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
          <div className=" mx-5 form-check form-switch">
            <label
              className="form-check-label "
              style={{ color: props.mode === "light" ? "black" : "white" }}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark mode
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
/*Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  linkedwith: PropTypes.string.isRequired,

};

/*Navbar.defaultProps = { title: "set web name", linkedwith: " set nav link" };
*/
