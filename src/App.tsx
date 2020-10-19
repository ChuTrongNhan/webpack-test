import * as React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Dashboard from "./screens/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <p>
          <Link to="/">Home App</Link>
        </p>
        <p>
          <Link to="/about">About App</Link>
        </p>
        <p>
          <Link to="/dashboard">Dashboard App</Link>
        </p>
      </div>
      <div>
        {process.env.DB_HOST}
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
