import React from "react";
import "./App.css";
// eslint-disable-next-line
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Home from "./components/Home";
import Lab from "./components/Lab";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/home" exact component={Home} />
        <Route path="/lab" exact component={Lab} />
      </Switch>
    </Router>
  );
}

export default App;
