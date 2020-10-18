import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Home from "../Home/Home";
//React Hooks Form Validator
import { useForm } from "react-hook-form";

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

  const [isFormValidated, setIsFormValidated] = useState(false);

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

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setIsFormValidated(true);
    console.log("yei");
  };
  if (isFormValidated) {
    addCookies();
    return <Redirect to="/home" />;
  }
  const errorMessage = (message) => {
    return (
      <p
        style={{
          color: "#fff",
        }}
      >
        {message}
      </p>
    );
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-content">
                <input
                  className="form-content-input"
                  type="text"
                  placeholder="Usuario de Github"
                  name="username"
                  ref={register({ required: true, minLength: 1 })}
                />
                <input
                  className="form-content-input"
                  type="email"
                  placeholder="Correo Electrónico"
                  name="email"
                  ref={register({ required: true })}
                />
                <div className="shared-container-input">
                  <input
                    className="form-content-input"
                    type="text"
                    id="primer-nombre"
                    placeholder="Primer Nombre"
                    name="firstName"
                    ref={register({ required: true, minLength: 1 })}
                  />

                  <input
                    className="form-content-input"
                    type="text"
                    id="segundo-nombre"
                    placeholder="Segundo Nombre"
                    name="secondName"
                    ref={register({ required: true, minLength: 1 })}
                  />
                </div>

                <div className="shared-container-input">
                  <input
                    className="form-content-input"
                    type="text"
                    placeholder="Primer Apellido"
                    name="lastName"
                    ref={register({ required: true, minLength: 1 })}
                  />
                  <input
                    className="form-content-input"
                    type="text"
                    placeholder="Segundo Apellido"
                    name="secondLastName"
                    ref={register({ required: true, minLength: 1 })}
                  />
                </div>
                <input
                  className="form-content-input"
                  type="number"
                  placeholder="Cedula"
                  name="ci"
                  ref={register({ required: true, minLength: 1 })}
                />
                <label id="fecha-nacimiento-label">Fecha de Nacimiento</label>
                <input
                  className="form-content-input"
                  type="date"
                  id="fecha-nacimiento"
                  placeholder="Fecha de Nacimiento"
                  name="birthDate"
                  ref={register({ required: true, minLength: 1 })}
                />
              </div>
              <div className="submit-button-container">
                <input
                  className="btn btn-transparent btn-white-outline color-white btn-entrar"
                  type="submit"
                  value="Buscar"
                  // onClick={() => addCookies()}
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
