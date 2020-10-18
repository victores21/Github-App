import React from "react";

//Style
import "./Navbar.css";

const Navbar = (props) => {
  const {
    username,
    email,
    firstName,
    secondName,
    lastName,
    secondLastName,
    ci,
    birthDate,
  } = props.userInfoFromCookies;
  return (
    <>
      <header className="header">
        <div className="header-content-container">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>Bienvenido</li>
            <li>
              {firstName} {secondName} {lastName} {secondLastName}
            </li>
            <li>Usuario: @{username}</li>
            <li>Correo: {email}</li>
            <li>Cedula: {ci}</li>
            <li>Fecha de nacimiento: {birthDate}</li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
