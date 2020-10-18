import React from "react";

//Style
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-content-container">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>Bienvenido</li>
            <li>Victor David Escalona Gonzalez</li>
            <li>Usuario: @Victores21</li>
            <li>Correo: victorescalonag@gmail.com</li>
            <li>Cedula: 1095845082</li>
            <li>Fecha de nacimiento: 02-02-1999</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
