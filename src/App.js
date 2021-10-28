import React from "react";
import "./App.css";
import Login from "./pages/login/Login";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
