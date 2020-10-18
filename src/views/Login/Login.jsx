import React, { useState } from "react";
import { Link } from "react-router-dom";

//Styles
import "./Login.css";

const Login = () => {
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    firstName: "",
    secondName: "",
    lastName: "",
    secondLastName: "",
    ci: "",
    birthDate: "",
  });

  const handleEmailChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const addCookies = () => {
    const {
      username,
      email,
      firstName,
      secondName,
      lastName,
      secondLastName,
      ci,
      birthDate,
    } = formValue;

    document.cookie = `username= ${username}`;
    document.cookie = `email= ${email}`;
    document.cookie = `firstName= ${firstName}`;
    document.cookie = `secondName= ${secondName}`;
    document.cookie = `lastName= ${lastName}`;
    document.cookie = `secondLastName= ${secondLastName}`;
    document.cookie = `ci= ${ci}`;
    document.cookie = `birthDate= ${birthDate}`;
  };

  return (
    <>
      <div className="hero-login">
        <div className="hero-content">
          <div className="hero-image-container">
            <img className="hero-image" src="/images/github-logo.png" alt="" />
          </div>

          <div className="hero-form">
            <h1 id="hero-form-title">Encuentra tu perfil de Github</h1>

            <form
              className="form-container"
              action="#"
              onChange={(e) => handleEmailChange(e)}
            >
              <div className="form-content">
                <input
                  required="required"
                  className="form-content-input"
                  type="text"
                  placeholder="Usuario de Github"
                  name="username"
                />
                <input
                  required="required"
                  className="form-content-input"
                  type="email"
                  placeholder="Correo Electrónico"
                  name="email"
                />
                <div className="shared-container-input">
                  <input
                    required="required"
                    className="form-content-input"
                    type="text"
                    id="primer-nombre"
                    placeholder="Primer Nombre"
                    name="firstName"
                  />
                  <input
                    required="required"
                    className="form-content-input"
                    type="text"
                    id="segundo-nombre"
                    placeholder="Segundo Nombre"
                    name="secondName"
                  />
                </div>

                <div className="shared-container-input">
                  <input
                    required="required"
                    className="form-content-input"
                    type="text"
                    placeholder="Primer Apellido"
                    name="lastName"
                  />
                  <input
                    required="required"
                    className="form-content-input"
                    type="text"
                    placeholder="Segundo Apellido"
                    name="secondLastName"
                  />
                </div>
                <input
                  required="required"
                  className="form-content-input"
                  type="number"
                  placeholder="Cedula"
                  name="ci"
                />
                <label id="fecha-nacimiento-label">Fecha de Nacimiento</label>
                <input
                  required="required"
                  className="form-content-input"
                  type="date"
                  id="fecha-nacimiento"
                  placeholder="Fecha de Nacimiento"
                  name="birthDate"
                />
              </div>
              <div className="submit-button-container">
                <Link to="/home">
                  <input
                    required="required"
                    className="btn btn-transparent btn-white-outline color-white btn-entrar"
                    type="submit"
                    value="Entrar"
                    onClick={() => addCookies()}
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
