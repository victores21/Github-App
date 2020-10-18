import React from "react";

//Styles
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="hero-login">
        <div className="hero-content">
          <div className="hero-image-container">
            <img className="hero-image" src="/images/github-logo.png" alt="" />
          </div>

          <div className="hero-form">
            <h1 id="hero-form-title">Encuentra tu perfil de Github</h1>

            <form className="form-container" action="#">
              <div className="form-content">
                <input
                  className="form-content-input"
                  type="text"
                  placeholder="Usuario de Github"
                />
                <input
                  className="form-content-input"
                  type="email"
                  placeholder="Correo Electrónico"
                />
                <div className="shared-container-input">
                  <input
                    className="form-content-input"
                    type="text"
                    id="primer-nombre"
                    placeholder="Primer Nombre"
                  />
                  <input
                    className="form-content-input"
                    type="text"
                    id="segundo-nombre"
                    placeholder="Segundo Nombre"
                  />
                </div>

                <div className="shared-container-input">
                  <input
                    className="form-content-input"
                    type="text"
                    placeholder="Primer Apellido"
                  />
                  <input
                    className="form-content-input"
                    type="text"
                    placeholder="Segundo Apellido"
                  />
                </div>
                <input
                  className="form-content-input"
                  type="number"
                  placeholder="Cedula"
                />
                <label for="fecha-nacimiento" id="fecha-nacimiento-label">
                  Fecha de Nacimiento
                </label>
                <input
                  className="form-content-input"
                  type="date"
                  id="fecha-nacimiento"
                  placeholder="Fecha de Nacimiento"
                />
              </div>
              <div className="submit-button-container">
                <input
                  className="btn btn-transparent btn-white-outline color-white btn-entrar"
                  type="submit"
                  value="Entrar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
