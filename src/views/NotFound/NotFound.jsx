import React from "react";
import { useHistory } from "react-router-dom";

//Style
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();

  let cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.split("="))
    .reduce(
      (accumulator, [key, value]) => ({
        ...accumulator,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    );

  const historyHandler = () => {
    if (cookies.username === undefined) {
      history.push("/");
    } else {
      history.push("/home");
    }
  };
  return (
    <>
      <div className="hero-404">
        <div className="hero-404-content-container">
          <div className="button-container">
            <h1 id="not-found-titlte">Ups... Parece que te has perdido!</h1>
            <button class="not-found-button" onClick={historyHandler}>
              Regresar a Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
