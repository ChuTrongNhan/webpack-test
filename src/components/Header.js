import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "../screens/Home.tsx";
import About from "../screens/About.tsx";
import Dashboard from "../screens/Dashboard.tsx";

const Header = () => {
  return (
    <BrowserRouter>
      <div className="header-container">
        <span className="header-tab">
          <Link to="/">Home</Link>
        </span>
        <span className="header-tab">
          <Link to="/about">About</Link>
        </span>
        <span className="header-tab">
          <Link to="/dashboard">Dashboard</Link>
        </span>
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

export default Header;
