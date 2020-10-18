import React from "react";

//Style
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header class="header">
        <div class="header-content-container">
          <input class="menu-btn" type="checkbox" id="menu-btn" />
          <label class="menu-icon" for="menu-btn">
            <span class="navicon"></span>
          </label>
          <ul class="menu">
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
