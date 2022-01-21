import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <span> Photos App </span>
      </div>
      <div className="header__link">
        <NavLink  className="link" to="/photos">
          Photos
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
