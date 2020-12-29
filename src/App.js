import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Alternate from "./Alternate";
import TiemposControl from "./TiemposControl";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/tiempos-control" component={TiemposControl} />
      <Route exact path="/tiempos-control/:variable" component={Alternate} />
    </Router>
  );
}

export default App;
