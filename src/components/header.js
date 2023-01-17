import React from "react";
import logo from "../logo/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="content-header">
        <img className="logo-header" src={logo} alt="Logo" />
        <span>Rental Mobil Maju Jaya</span>
      </div>
    </div>
  );
};
export default Header;
