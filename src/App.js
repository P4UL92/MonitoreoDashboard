import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Alternate from "./Alternate";
import Monitor from "./Monitor";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/monitor" component={Monitor} />
      <Route exact path="/monitor/:variable" component={Alternate} />
    </Router>
  );
}

export default App;
