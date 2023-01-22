import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";
import { logout } from "../../services/login";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    logout();
    navigate("/admin");
  };
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
      <div class="" style={{ float: "right", paddingRight: "24px" }}>
        <button
          class="btn btn-outline-danger"
          type="submit"
          onClick={() => handleButton()}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
