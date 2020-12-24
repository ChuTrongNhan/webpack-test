import * as React from "react";
import "./App.scss";
import { Provider } from 'react-redux';
import store from './stores/store.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Dashboard from "./screens/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
