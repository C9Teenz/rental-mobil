import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-bg">
      <Link className="navbar-brand nav-text img-nav" to="/dasboard">
        <img
          className="logo-header"
          style={{ width: "50px" }}
          src={logo}
          alt="Logo"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link nav-text" to="/dasboard">
              Items
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-text" to="/users">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-text" to="/brands">
              Brand
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
