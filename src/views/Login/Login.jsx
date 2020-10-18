import React from "react";

//Styles
import "./Login.css";

const Login = () => {
  return (
    <>
      <div class="hero-login">
        <div class="hero-content">
          <div class="hero-image-container">
            <img class="hero-image" src="/images/github-logo.png" alt="" />
          </div>

          <div class="hero-form">
            <h1 id="hero-form-title">Encuentra tu perfil de Github</h1>

            <form class="form-container" action="#">
              <div class="form-content">
                <input
                  class="form-content-input"
                  type="text"
                  placeholder="Usuario de Github"
                />
                <input
                  class="form-content-input"
                  type="email"
                  placeholder="Correo Electrónico"
                />
                <div class="shared-container-input">
                  <input
                    class="form-content-input"
                    type="text"
                    id="primer-nombre"
                    placeholder="Primer Nombre"
                  />
                  <input
                    class="form-content-input"
                    type="text"
                    id="segundo-nombre"
                    placeholder="Segundo Nombre"
                  />
                </div>

                <div class="shared-container-input">
                  <input
                    class="form-content-input"
                    type="text"
                    placeholder="Primer Apellido"
                  />
                  <input
                    class="form-content-input"
                    type="text"
                    placeholder="Segundo Apellido"
                  />
                </div>
                <input
                  class="form-content-input"
                  type="number"
                  placeholder="Cedula"
                />
                <label for="fecha-nacimiento" id="fecha-nacimiento-label">
                  Fecha de Nacimiento
                </label>
                <input
                  class="form-content-input"
                  type="date"
                  id="fecha-nacimiento"
                  placeholder="Fecha de Nacimiento"
                />
              </div>
              <div class="submit-button-container">
                <input
                  class="btn btn-transparent btn-white-outline color-white btn-entrar"
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
