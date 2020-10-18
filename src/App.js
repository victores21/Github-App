import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import FormValidator from "./components/FormValidator/FormValidator";
import NotFound from "./views/NotFound/NotFound";

const App = () => {
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
  useEffect(() => {
    if (
      cookies.username === undefined &&
      history.location.pathname === "/home"
    ) {
      history.push("/");
    }
  });
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/test" component={FormValidator} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
